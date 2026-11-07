/**
 * Llibres acadèmics de Jordi Castellví Mata.
 * Dades dels llibres verificades a Octaedro (2023) i Dykinson (2024).
 * Informe individual de 2024 incorporat a partir de la publicació original aportada per l'autor.
 */
export const featuredBooks = [
  {
    year: '2024',
    role: 'COEDICIÓ',
    title: 'Enseñar el conflicto',
    subtitle: 'Perspectivas, significados y límites en la educación para una cultura democrática y la justicia social',
    contributors: 'Delfín Ortega-Sánchez, Jordi Castellví Mata i Neus González-Monfort (eds.)',
    publisher: 'Dykinson',
    description: 'Una obra col·lectiva sobre el conflicte com a qüestió social rellevant i sobre el paper de l’educació en la cultura democràtica i la justícia social.',
    url: 'https://www.dykinson.com/libros/ensenar-el-conflicto-9788410701762/',
    secondaryUrl: 'https://www.amazon.es/conflicto-Perspectivas-significados-educaci%C3%B3n-democr%C3%A1tica/dp/8410701766',
    secondaryLabel: 'Amazon',
    isbn: '978-84-1070-176-2',
    coverVariant: 'conflict',
    coverUrl: 'images/ensenar-el-conflicto-cover.webp',
  },
  {
    year: '2023',
    role: 'COAUTORIA · 3 CAPÍTOLS',
    title: '¿Cómo investigar en Didáctica de las Ciencias Sociales?',
    subtitle: 'Fundamentos metodológicos, técnicas e instrumentos de investigación',
    contributors: 'Delfín Ortega-Sánchez (ed.); Jordi Castellví Mata, Jesús Marolla i Carmen Escribano, entre altres autors',
    publisher: 'Octaedro',
    description: 'Contribucions als capítols d’investigació qualitativa, qüestions i protocols ètics, i elaboració de l’informe de recerca i redacció científica.',
    url: 'https://octaedro.com/libro/como-investigar-en-didactica-de-las-ciencias-sociales/',
    secondaryUrl: 'https://octaedro.com/wp-content/uploads/2023/05/9788419690203.pdf',
    secondaryLabel: 'Descarregar en accés obert',
    isbn: '978-84-19690-20-3',
    coverVariant: 'methods',
    coverUrl: 'https://octaedro.com/wp-content/uploads/2023/06/09556-1-600x920.jpg',
  },
  {
    year: '2024',
    role: 'AUTORIA · INFORME',
    title: 'Medi social a educació infantil',
    subtitle: 'Com aprenem sobre el medi social a l’escola?',
    contributors: 'Jordi Castellví Mata · Universitat Autònoma de Barcelona · Escola Montserrat Solà · GREDICS',
    publisher: 'UAB',
    description: 'Informe elaborat en col·laboració amb l’Escola Montserrat Solà, GREDICS i la Unitat de Didàctica de les Ciències Socials de la UAB. Explora com els infants aprenen sobre el temps, l’espai, la família, la cultura i la identitat a través de la vida quotidiana de l’escola.',
    url: 'documents/medi-social-educacio-infantil-2024.pdf',
    primaryLabel: 'Llegir l’informe (PDF)',
    coverVariant: 'infantil',
    coverUrl: 'images/medi-social-educacio-infantil-cover.webp',
  },
] as const;
