/**
 * Portades i imatges de capçalera d'origen editorial.
 * Algunes són imatges representatives de la revista i NO del número on va aparèixer l'article.
 * Mai no atribuïm una portada a un article concret. Si una imatge externa falla, es mostra
 * el títol de la revista en una miniatura tipogràfica accessible.
 */
export const journalVisuals: Record<string, { image?: string; label: string; note?: string; variant: string }> = {
  'Social Sciences': {
    image: 'https://www.mdpi.com/files/uploaded/covers/socsci/big_cover-socsci-v14-i5.png',
    label: 'social sciences',
    note: 'Portada representativa de la revista Social Sciences (2025)',
    variant: 'blue'
  },
  'Frontiers in Education': {
    image: 'https://images.ctfassets.net/mrbo2ykgx5lt/13950/f2a880ab8853ae4486c7feae68398576/unnamed.png?f=center&fm=jpg&h=630&w=1200',
    label: 'frontiers in education',
    note: 'Identitat visual de la revista Frontiers in Education',
    variant: 'white'
  },
  'Compare: A Journal of Comparative and International Education': {
    image: 'https://www.tandfonline.com/doi/cover-img/10.1080/ccom20.v054.i01',
    label: 'COMPARE',
    note: 'Portada representativa de la revista Compare (2024)',
    variant: 'gold'
  },
  'Comunicar': {
    image: 'https://www.revistacomunicar.com/ojs/public/journals/1/cover_issue_73_es_ES.jpg',
    label: 'Comunicar',
    note: 'Portada del número 73 de Comunicar, on es va publicar l’article',
    variant: 'green'
  },
  'Humanities and Social Sciences Communications': {
    label: 'Humanities & Social Sciences Communications',
    variant: 'purple'
  },
  'Aula Abierta': { label: 'Aula Abierta', variant: 'orange' },
  'Critical Education': { label: 'Critical Education', variant: 'blue' },
  'Trends in Higher Education': { label: 'Trends in Higher Education', variant: 'blue' },
  'Bellaterra Journal of Teaching & Learning Language & Literature': { label: 'Bellaterra Journal', variant: 'gold' },
  'Culture & Education': {
    image: 'https://www.tandfonline.com/doi/cover-img/10.1080/rcye20.v033.i02',
    label: 'CULTURE & EDUCATION',
    note: 'Portada representativa de la revista Culture & Education (2021)',
    variant: 'red'
  },
  'Sustainability': {
    image: 'https://www.mdpi.com/files/uploaded/covers/sustainability/big_cover-sustainability-v15-i24.png',
    label: 'sustainability',
    note: 'Portada representativa de la revista Sustainability (2023)',
    variant: 'green'
  },
  'REIDICS. Revista de Investigación en Didáctica de las Ciencias Sociales': { label: 'REIDICS', variant: 'red' },
  'Panta Rei. Revista Digital de Ciencia y Didáctica de la Historia': { label: 'Panta Rei', variant: 'orange' }
};
