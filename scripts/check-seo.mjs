// Verify crawl signals and editorial metadata after each production build.
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { seoPages } from './seo.mjs';
const dist=path.resolve('dist'), locales=['ca','es','en','fr'],origin='https://critical-think.ing',errors=[];
function walk(node,fn){if(!node)return;fn(node);for(const child of node.childNodes||[])walk(child,fn);if(node.content)walk(node.content,fn)}
function attr(node,key){return node?.attrs?.find(a=>a.name===key)?.value}
function tags(root,name){const nodes=[];walk(root,n=>{if(n.tagName===name)nodes.push(n)});return nodes}
function textOf(root){let out='';walk(root,n=>{if(n.nodeName==='#text')out+=n.value});return out}
function url(route,locale){return origin+'/'+(locale==='ca'?'':locale+'/')+route}
function assert(condition,message){if(!condition)errors.push(message)}
const sitemap=fs.readFileSync(path.join(dist,'sitemap.xml'),'utf8');
const sitemapIndex=fs.readFileSync(path.join(dist,'sitemap-index.xml'),'utf8');
const robots=fs.readFileSync(path.join(dist,'robots.txt'),'utf8');
assert(robots.includes('Sitemap: '+origin+'/sitemap-index.xml'),'robots.txt must point to the sitemap index');
assert(sitemapIndex.includes('<loc>'+origin+'/sitemap.xml</loc>'),'sitemap index must point to the generated sitemap');
assert(sitemap.includes('xmlns:xhtml="http://www.w3.org/1999/xhtml"'),'sitemap needs xhtml alternate links');
let count=0;
for(const [route,translated] of Object.entries(seoPages)){
 for(const locale of locales){
   const rel=path.join(locale==='ca'?'':locale,route,'index.html');
   const file=path.join(dist,rel);
   if(!fs.existsSync(file)){errors.push('Missing page '+rel);continue}
   const doc=parse(fs.readFileSync(file,'utf8'));
   const html=tags(doc,'html')[0],head=tags(doc,'head')[0],title=tags(head,'title')[0];
   const metas=tags(head,'meta'),links=tags(head,'link'),canonical=url(route,locale),prefix=locale+'/'+route+': ';
   const meta=(name,key='name')=>metas.find(n=>attr(n,key)===name);
   const link=(rel,lang)=>links.find(n=>attr(n,'rel')===rel && (lang===undefined||attr(n,'hreflang')===lang));
   assert(attr(html,'lang')===locale,prefix+'wrong html lang');
   assert(textOf(title)===translated[locale].title,prefix+'title mismatch');
   assert(attr(meta('description'),'content')===translated[locale].description,prefix+'description mismatch');
   assert(attr(meta('og:title','property'),'content')===translated[locale].title,prefix+'Open Graph title mismatch');
   assert(attr(meta('og:description','property'),'content')===translated[locale].description,prefix+'Open Graph description mismatch');
   assert(attr(meta('og:url','property'),'content')===canonical,prefix+'Open Graph URL mismatch');
   assert(attr(link('canonical'),'href')===canonical,prefix+'canonical mismatch');
   assert(links.filter(n=>attr(n,'rel')==='canonical').length===1,prefix+'multiple canonicals');
   for(const alt of locales)assert(attr(link('alternate',alt),'href')===url(route,alt),prefix+'hreflang '+alt+' mismatch');
   assert(attr(link('alternate','x-default'),'href')===url(route,'ca'),prefix+'x-default mismatch');
   assert(sitemap.includes('<loc>'+canonical+'</loc>'),prefix+'URL missing from sitemap');
   assert(sitemap.includes('hreflang="'+locale+'" href="'+canonical+'"'),prefix+'sitemap alternate missing');
   const ld=tags(head,'script').find(n=>attr(n,'type')==='application/ld+json');
   try{const data=JSON.parse(textOf(ld));assert(data['@graph']?.some(n=>n['@type']==='Person'&&n.name==='Jordi Castellví Mata'),prefix+'missing Person JSON-LD')}
   catch{errors.push(prefix+'invalid JSON-LD')}
   count++;
 }
}
if(errors.length){console.error('SEO validation failed:\n'+errors.join('\n'));process.exit(1)}
console.log('SEO: '+count+' pages validated (metadata, canonical, hreflang, JSON-LD, sitemap and robots).');
