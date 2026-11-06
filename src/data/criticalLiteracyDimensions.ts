/**
 * Quatre dimensions de la literacitat crítica, segons Lewison, Flint i Van Sluys (2002).
 * Noms dels eixos establerts per Jordi Castellví Mata i descriptors sintetitzats i
 * traduïts al català a partir de les definicions i desenvolupaments de les autores
 * a Language Arts, 79(5), pàgines 382–384. Els eixos són interrelacionats.
 */
export const criticalLiteracyDimensions = [
  {
    number: '01',
    title: 'Qüestionar allò comú',
    description: 'Mirar la vida quotidiana amb altres ulls: problematitzar allò que donem per fet i analitzar com els textos i el llenguatge construeixen la realitat i les identitats.'
  },
  {
    number: '02',
    title: 'Multiperspectiva',
    description: 'Contrastar punts de vista diversos, fins i tot contradictoris; preguntar-nos quines veus s’escolten i quines falten, i recuperar les que han estat silenciades o marginades.'
  },
  {
    number: '03',
    title: 'Problemes socials rellevants',
    description: 'Anar més enllà de les vivències individuals per comprendre els sistemes sociopolítics, les relacions de poder i les desigualtats que condicionen la vida quotidiana.'
  },
  {
    number: '04',
    title: 'Acció social',
    description: 'Passar de la reflexió a l’acció per transformar la realitat: qüestionar els privilegis i les injustícies, i promoure la participació i la justícia social.'
  }
] as const;

export const criticalLiteracyCitation = {
  authors: 'Lewison, M., Flint, A. S. i Van Sluys, K.',
  year: '2002',
  title: 'Taking on Critical Literacy: The Journey of Newcomers and Novices',
  journal: 'Language Arts',
  volume: '79(5)',
  pages: '382–392'
} as const;
