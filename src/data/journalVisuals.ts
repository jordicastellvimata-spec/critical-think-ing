/**
 * Portades i imatges de capçalera d'origen editorial.
 * Algunes són imatges representatives de la revista i NO del número on va aparèixer l'article.
 * Mai no atribuïm una portada a un article concret. Si una imatge externa falla, es mostra
 * una imatge vectorial pròpia amb la identitat de la revista, guardada en local.
 */
export const journalVisuals: Record<string, { image?: string; fallback?: string; label: string; note?: string; variant: string }> = {
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
    fallback: '/images/journal-fallback-compare.svg',
    image: 'https://www.tandfonline.com/doi/cover-img/10.1080/ccom20.v054.i06',
    label: 'COMPARE',
    note: 'Portada de Compare, volum 54, número 6 (2024), on es va publicar l’article',
    variant: 'gold'
  },
  'Comunicar': {
    fallback: '/images/journal-fallback-comunicar.svg',
    image: 'https://www.revistacomunicar.com/ojs/public/journals/1/cover_issue_73_es_ES.jpg',
    label: 'Comunicar',
    note: 'Portada del número 73 de Comunicar, on es va publicar l’article',
    variant: 'green'
  },
  'Humanities and Social Sciences Communications': {
    fallback: '/images/journal-fallback-humanities.svg',
    image: 'https://pbs.twimg.com/media/Gdz8uBLXAAEq6Sg.png',
    label: 'Humanities & Social Sciences Communications',
    note: 'Identitat visual oficial de la revista Humanities & Social Sciences Communications',
    variant: 'purple'
  },
  'Aula Abierta': {
    fallback: '/images/journal-fallback-aula.svg',
    image: 'https://dialnet.unirioja.es/recursos/imagen?entidad=REVISTA&revista=177&tipo_contenido=65',
    label: 'Aula Abierta',
    note: 'Portada representativa de la revista Aula Abierta, volum 55, número 1 (2026)',
    variant: 'orange'
  },
  'Critical Education': {
    image: 'https://www.erudit.org/en/journals/criticaled/2025-v16-n1-criticaled09900/coverpage-hd.jpg',
    label: 'Critical Education',
    note: 'Portada representativa de la revista Critical Education, volum 16, número 1 (2025)',
    variant: 'blue'
  },
  'Trends in Higher Education': {
    fallback: '/images/journal-fallback-trends.svg',
    image: 'https://www.mdpi.com/files/uploaded/covers/higheredu/big_cover-higheredu-v3-i4.png',
    label: 'Trends in Higher Education',
    note: 'Imatge de coberta del volum 3, número 4 (2024) de Trends in Higher Education',
    variant: 'blue'
  },
  'Bellaterra Journal of Teaching & Learning Language & Literature': {
    fallback: '/images/journal-fallback-bellaterra.svg',
    image: 'https://revistes.uab.cat/jtl3/public/journals/5/cover_issue_117_en_US.jpg',
    label: 'Bellaterra Journal',
    note: 'Coberta representativa de Bellaterra Journal of Teaching & Learning Language & Literature',
    variant: 'gold'
  },
  'Culture & Education': {
    fallback: '/images/journal-fallback-culture.svg',
    image: 'https://www.tandfonline.com/doi/cover-img/10.1080/rcye20.v032.i02',
    label: 'CULTURE & EDUCATION',
    note: 'Portada de Culture & Education, volum 32, número 2 (2020), on es va publicar l’article',
    variant: 'red'
  },
  'Sustainability': {
    image: 'https://www.mdpi.com/files/uploaded/covers/sustainability/big_cover-sustainability-v15-i24.png',
    label: 'sustainability',
    note: 'Portada representativa de la revista Sustainability (2023)',
    variant: 'green'
  },
  'REIDICS. Revista de Investigación en Didáctica de las Ciencias Sociales': {
    fallback: '/images/journal-fallback-reidics.svg',
    image: 'https://didactica-ciencias-sociales.org/wp-content/uploads/2025/04/6802c720464d7-777x1024.jpeg',
    label: 'REIDICS',
    note: 'Portada del número 16 de REIDICS (2025), en què es va publicar l’article',
    variant: 'red'
  },
  'Panta Rei. Revista Digital de Ciencia y Didáctica de la Historia': {
    fallback: '/images/journal-fallback-panta.svg',
    image: 'https://revistas.um.es/public/journals/741/cover_issue_19261_es_ES.jpg',
    label: 'Panta Rei',
    note: 'Portada de Panta Rei, volum 14, número 2 (2020), on es va publicar l’article',
    variant: 'orange'
  }
};
