import fs from 'node:fs';
import path from 'node:path';
import { parse, serialize } from 'parse5';
import { catalog, exactOriginals, attributePrefixes } from '../src/i18n/catalog.mjs';

const dist = path.resolve('dist');
const origin = 'https://critical-think.ing';
const locales = ['ca','es','en','fr'];
const localeNames = {ca:'Català',es:'Español',en:'English',fr:'Français'};
const localeCodes = {ca:'CA',es:'ES',en:'EN',fr:'FR'};
const publicPrefixes = ['/images/','/documents/','/_astro/','/favicon','/assets/'];
const pages = [];
function discover(base, relative = '') {
  for (const entry of fs.readdirSync(base, {withFileTypes:true})) {
    const next = path.join(base,entry.name), rel = path.posix.join(relative,entry.name);
    if (entry.isDirectory()) discover(next,rel);
    else if (entry.name.endsWith('.html') && !/^((es|en|fr)\/)/.test(rel)) pages.push(rel);
  }
}
discover(dist);
if (!pages.length) throw Error('No s’han generat pàgines HTML amb Astro.');
const source = new Map(pages.map(p=>[p,fs.readFileSync(path.join(dist,p),'utf8')]));
const untranslated = {es:new Set(),en:new Set(),fr:new Set()};
const norm = s => String(s).replace(/\s+/g,' ').trim();
const known = new Map();
for(const item of catalog) {
  if(item.length!==4 || !item[0] || !item[1] || !item[2] || !item[3]) throw Error('Entrada de traducció incompleta: '+JSON.stringify(item));
  if(known.has(norm(item[0]))) throw Error('Text català duplicat: '+item[0]);
  known.set(norm(item[0]),{es:item[1],en:item[2],fr:item[3]});
}
const originals = new Set(exactOriginals.map(norm));
function translate(value,locale,record=true) {
  const text=norm(value);
  if(!text || locale==='ca' || /^[\d\s/.,·–—()\-©↗↓:]+$/.test(text) || originals.has(text)) return value;
  const x=known.get(text);
  if(x) return String(value).match(/^\s*/)[0]+x[locale]+String(value).match(/\s*$/)[0];
  // Keep bibliographic titles/registered names as originally published.
  if(/^(https?:|mailto:|ISBN|PID20\d\d|EDU20\d\d|GREDICS|ORCID|UAB|MICIU|AEI)/.test(text))return value;
  // Accessible controls often attach a translated verb to the unchanged title of a work.
  for(const [prefix,translations] of attributePrefixes){
    if(text.startsWith(prefix)){
      const translated=translations[locales.indexOf(locale)-1]+text.slice(prefix.length);
      return String(value).match(/^\s*/)[0]+translated+String(value).match(/\s*$/)[0];
    }
  }
  if(record && text.length>2 && /[a-zà-ü]/i.test(text))untranslated[locale].add(text);
  return value;
}
function attr(el,name){return el.attrs?.find(a=>a.name===name)?.value}
function setAttr(el,name,value){
  if(!el.attrs)el.attrs=[];
  const a=el.attrs.find(x=>x.name===name);
  if(a)a.value=value;else el.attrs.push({name,value});
}
function removeAttr(el,name){if(el.attrs)el.attrs=el.attrs.filter(x=>x.name!==name)}
function walk(el,fn){fn(el);for(const x of el.childNodes||[])walk(x,fn);if(el.content)walk(el.content,fn)}
function find(root,name){let value;walk(root,e=>{if(!value && e.tagName===name)value=e});return value}
function addChild(parent,item){
 parent.childNodes||=[];parent.childNodes.push(item);item.parentNode=parent;
}
function element(tag,attributes){
 return {nodeName:tag,tagName:tag,attrs:Object.entries(attributes).map(([name,value])=>({name,value})),namespaceURI:'http://www.w3.org/1999/xhtml',childNodes:[]};
}
function currentRoute(p){return p.replace(/index\.html$/,'').replace(/^\.\//,'')}
function localizedRoute(route,locale){return '/' + (locale==='ca'?'':locale+'/') + route}
function publicAsset(url){return publicPrefixes.some(p=>url.startsWith(p))}
function translatedHref(href,locale) {
 if (!href || href.startsWith('#') || /^([a-z]+:)?\/\//i.test(href) || href.startsWith('mailto:') || href.startsWith('tel:'))return href;
 if (!href.startsWith('/'))return href; // Existing relative URLs are not reinterpreted.
 if(publicAsset(href))return href;
 const [beforeHash,...hashParts]=href.split('#');
 const [pathname,search='']=beforeHash.split('?');
 if(pathname==='/' || pathname==='' || !/\.[a-z0-9]+$/i.test(pathname)){
   const dest=pathname.startsWith('/')?pathname.slice(1):pathname;
   return localizedRoute(dest,locale)+(search?'?'+search:'')+(hashParts.length?'#'+hashParts.join('#'):'');
 }
 return href;
}
const allDocuments = new Map();
for(const [file,html] of source){
 const route=currentRoute(file);
 for(const locale of locales){
   const doc=parse(html);
   const htmlNode=find(doc,'html');setAttr(htmlNode,'lang',locale);
   const head=find(doc,'head');
   const canonical=origin+localizedRoute(route,locale);
   addChild(head,element('link',{rel:'canonical',href:canonical}));
   for(const alt of locales){
     addChild(head,element('link',{rel:'alternate',hreflang:alt,href:origin+localizedRoute(route,alt)}));
   }
   addChild(head,element('link',{rel:'alternate',hreflang:'x-default',href:origin+localizedRoute(route,'ca')}));
   const metaDesc=find(doc,'meta'); // All metadata handled by traversal below.
   walk(doc,el=>{
     if(el.nodeName==='#text'){
       if(['script','style','textarea'].includes(el.parentNode?.tagName))return;
       if(el.parentNode?.tagName==='title' && String(el.value).includes(' | critical-think.ing')){
         const [title]=String(el.value).split(' | critical-think.ing');
         el.value=translate(title,locale)+' | critical-think.ing';return;
       }
       el.value=translate(el.value,locale);return;
     }
     if(!el.attrs)return;
     if(el.tagName==='a' && attr(el,'data-lang-link')){
       const target=attr(el,'data-lang-link');
       setAttr(el,'href',localizedRoute(route,target)); 
       if(target===locale)setAttr(el,'aria-current','page');else removeAttr(el,'aria-current');
     }else if(el.tagName==='a' && attr(el,'href')){
       setAttr(el,'href',translatedHref(attr(el,'href'),locale));
     }
     if(attr(el,'data-lang-current')!==undefined)setAttr(el,'data-lang-current',localeCodes[locale]);
     if(el.tagName==='span' && attr(el,'class')?.includes('lang-current-text')){
       if(el.childNodes?.[0]?.nodeName==='#text')el.childNodes[0].value=localeCodes[locale];
     }
     for(const attribute of ['alt','aria-label','title','placeholder','data-video-title']){
       const v=attr(el,attribute);
       if(v)setAttr(el,attribute,translate(v,locale,false));
     }
     if(el.tagName==='meta'&&['description','og:description','og:title'].includes(attr(el,'name')||attr(el,'property'))){
       const v=attr(el,'content');
       if(v){ 
        if(v.includes(' | critical-think.ing')){
          const t=v.split(' | critical-think.ing')[0];
          setAttr(el,'content',translate(t,locale)+' | critical-think.ing');
        }else setAttr(el,'content',translate(v,locale));
       }
     }
   });
   const dest=path.join(dist,(locale==='ca'?'':locale),file);
   fs.mkdirSync(path.dirname(dest),{recursive:true});
   fs.writeFileSync(dest,serialize(doc));
   allDocuments.set(localizedRoute(route,locale),doc);
 }
}
// A language change preserves the current section's hash; anchor IDs are the same in all languages.
const sitemap=locales.flatMap(locale=>pages.map(file=>origin+localizedRoute(currentRoute(file),locale)));
fs.writeFileSync(path.join(dist,'sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+sitemap.map(u=>'  <url><loc>'+u.replace(/&/g,'&amp;')+'</loc></url>').join('\n')+'\n</urlset>\n');
// Validate all internal routes, assets and anchors after translation.
const ids=new Map();
for(const [route,doc] of allDocuments){
  const routeIds=new Set();
  walk(doc,node=>{if(node.attrs){const id=attr(node,'id');if(id)routeIds.add(id)}});
  ids.set(route,routeIds);
}
const errors=[],externalLinks=new Map();
for(const [route,doc] of allDocuments){
  const external=[];
  walk(doc,node=>{
    if(node.tagName!=='a')return;
    const href=attr(node,'href');if(!href)return;
    if(/^https?:\/\//.test(href)){external.push(href);return}
    if(href.startsWith('mailto:')||href.startsWith('tel:'))return;
    if(href.startsWith('#')){
      const fragment=decodeURIComponent(href.slice(1));
      if(fragment&&!ids.get(route)?.has(fragment))errors.push(route+' → ancoratge inexistent '+href);
      return;
    }
    if(!href.startsWith('/'))return;
    const [raw,hash='']=href.split('#');
    const pathname=raw.split('?')[0],fragment=decodeURIComponent(hash);
    if(publicAsset(pathname)||/\.[a-z0-9]+$/i.test(pathname)){
      if(!fs.existsSync(path.join(dist,pathname.slice(1))))errors.push(route+' → fitxer inexistent '+pathname);
      return;
    }
    const slug=pathname.endsWith('/')?pathname:pathname+'/';
    if(!ids.has(slug))errors.push(route+' → pàgina inexistent '+slug);
    else if(fragment&&!ids.get(slug)?.has(fragment))errors.push(route+' → àncora inexistent '+slug+'#'+fragment);
  });
  externalLinks.set(route,external.sort().join('\n'));
}
for(const file of pages){
  const original=externalLinks.get(localizedRoute(currentRoute(file),'ca'));
  for(const locale of ['es','en','fr']){
    if(externalLinks.get(localizedRoute(currentRoute(file),locale))!==original){
      errors.push(file+' → no es conserven els enllaços externs a '+locale);
    }
  }
}
if(errors.length){
 console.error('ERRORS D’ENLLAÇOS I ANCORATGES:\n'+errors.join('\n'));process.exit(1);
}
console.log('i18n: '+pages.length+' pàgines × '+locales.length+' idiomes = '+(pages.length*locales.length)+' pàgines verificades.');
console.log('i18n: tots els enllaços interns, fitxers locals, ancoratges i enllaços externs preservats.');
for(const locale of ['es','en','fr']) {
 const list=[...untranslated[locale]].sort();
 console.log('i18n '+locale+': '+(known.size)+' entrades de traducció; '+list.length+' textos sense correspondència explícita.');
 if(list.length)console.log('i18n '+locale+' mostres: '+list.slice(0,30).join(' | '));
}
