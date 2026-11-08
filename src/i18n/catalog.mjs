// Catalog of editorial translations. Published article, book and video titles retain their
// original language to preserve accurate bibliographic references.
const block = s => s.trim().split('\n').filter(Boolean).map(line => {
  const cells=line.split('|||').map(s=>s.trim());
  if(cells.length!==4)throw new Error('Four-language entry required: '+line);
  return cells;
});
export const catalog = [
  ...block(String.raw`
Jordi Castellví Mata · Universitat Autònoma de Barcelona|||Jordi Castellví Mata · Universidad Autónoma de Barcelona|||Jordi Castellví Mata · Autonomous University of Barcelona|||Jordi Castellví Mata · Université autonome de Barcelone
Llegir el món.|||Leer el mundo.|||Read the world.|||Lire le monde.
Escriure el futur.|||Escribir el futuro.|||Write the future.|||Écrire l’avenir.
Investigo com l'educació pot ajudar-nos a qüestionar allò que donem per fet, comprendre críticament el present i imaginar futurs més justos.|||Investigo cómo la educación puede ayudarnos a cuestionar lo que damos por sentado, comprender críticamente el presente e imaginar futuros más justos.|||I study how education can help us question what we take for granted, critically understand the present and imagine fairer futures.|||J’étudie comment l’éducation peut nous aider à remettre en question nos évidences, à comprendre le présent de façon critique et à imaginer des avenirs plus justes.
Explorar publicacions|||Explorar publicaciones|||Explore publications|||Explorer les publications
Conèixer la meva trajectòria|||Conocer mi trayectoria|||About my journey|||Découvrir mon parcours
RECERCA · DOCÈNCIA · TRANSFERÈNCIA|||INVESTIGACIÓN · DOCENCIA · TRANSFERENCIA|||RESEARCH · TEACHING · KNOWLEDGE EXCHANGE|||RECHERCHE · ENSEIGNEMENT · TRANSFERT
DESCOBREIX MÉS ↓|||DESCUBRE MÁS ↓|||DISCOVER MORE ↓|||DÉCOUVRIR ↓
Àmbit de recerca · Didàctica de les ciències socials|||Área de investigación · Didáctica de las ciencias sociales|||Research field · Social studies education|||Domaine de recherche · Didactique des sciences sociales
Línies|||Líneas|||Research|||Axes
de recerca.|||de investigación.|||areas.|||de recherche.
Investigo com interpretem el món social i com l’educació pot ajudar a qüestionar discursos i formar una ciutadania crítica.|||Investigo cómo interpretamos el mundo social y cómo la educación puede ayudar a cuestionar discursos y formar una ciudadanía crítica.|||I explore how we interpret society and how education can challenge dominant discourses and foster critical citizenship.|||J’étudie comment nous interprétons le monde social et comment l’éducation peut questionner les discours et former des citoyens critiques.
Producció científica · Publicacions acadèmiques|||Producción científica · Publicaciones académicas|||Research output · Academic publications|||Production scientifique · Publications académiques
Idees que es|||Ideas que se|||Ideas that|||Des idées qui
converteixen en recerca.|||convierten en investigación.|||become research.|||deviennent recherche.
Articles de recerca|||Artículos de investigación|||Research articles|||Articles de recherche
Portal de Recerca de la UAB ↗|||Portal de Investigación de la UAB ↗|||UAB Research Portal ↗|||Portail de recherche de l’UAB ↗
Projectes i activitat científica|||Proyectos y actividad científica|||Projects and research activity|||Projets et activité scientifique
Recerca...|||Investigación...|||Research...|||Recherche...
Educació democràtica, ciutadania i pensament crític: projectes col·lectius que busquen comprendre la realitat i transformar l'educació.|||Educación democrática, ciudadanía y pensamiento crítico: proyectos colectivos que buscan comprender la realidad y transformar la educación.|||Democratic education, citizenship and critical thinking: collaborative projects that seek to understand society and transform education.|||Éducation démocratique, citoyenneté et pensée critique : des projets collectifs pour comprendre la réalité et transformer l’éducation.
PROJECTE DE RECERCA · EN CURS|||PROYECTO DE INVESTIGACIÓN · EN CURSO|||RESEARCH PROJECT · ONGOING|||PROJET DE RECHERCHE · EN COURS
Altres projectes de recerca|||Otros proyectos de investigación|||Other research projects|||Autres projets de recherche
FINANÇAMENT INSTITUCIONAL|||FINANCIACIÓN INSTITUCIONAL|||INSTITUTIONAL FUNDING|||FINANCEMENT INSTITUTIONNEL
EDICIÓ CIENTÍFICA · DISCOVER EDUCATION|||EDICIÓN CIENTÍFICA · DISCOVER EDUCATION|||SCHOLARLY EDITING · DISCOVER EDUCATION|||ÉDITION SCIENTIFIQUE · DISCOVER EDUCATION
Perspectives crítiques sobre educació, democràcia i justícia social.|||Perspectivas críticas sobre educación, democracia y justicia social.|||Critical perspectives on education, democracy and social justice.|||Perspectives critiques sur l’éducation, la démocratie et la justice sociale.
Descobrir la col·lecció temàtica ↗|||Descubrir la colección temática ↗|||Explore the topical collection ↗|||Découvrir la collection thématique ↗
...que connecta amb la pràctica|||...que conecta con la práctica|||...connecting with practice|||...en lien avec la pratique
Transferència i formació|||Transferencia y formación|||Knowledge exchange and training|||Transfert et formation
...que connecta|||...que conecta|||...connecting|||...en lien
amb la pràctica|||con la práctica|||with practice|||avec la pratique
La formació del professorat i el debat entre l'escola i la universitat són parts essencials de la recerca educativa.|||La formación del profesorado y el diálogo entre la escuela y la universidad son partes esenciales de la investigación educativa.|||Teacher education and dialogue between schools and universities are essential to educational research.|||La formation des enseignants et le dialogue entre l’école et l’université sont essentiels à la recherche en éducation.
FORMACIÓ OBERTA · COURSERA|||FORMACIÓN ABIERTA · COURSERA|||OPEN LEARNING · COURSERA|||FORMATION OUVERTE · COURSERA
MOOC de la UAB sobre literacitat crítica, ciutadania i educació democràtica, del qual soc codirector i docent.|||MOOC de la UAB sobre literacidad crítica, ciudadanía y educación democrática, del que soy codirector y docente.|||A UAB MOOC on critical literacy, citizenship and democratic education, which I co-direct and teach.|||MOOC de l’UAB sur la littératie critique, la citoyenneté et l’éducation démocratique, dont je suis codirecteur et enseignant.
Explorar el curs ↗|||Explorar el curso ↗|||Explore the course ↗|||Découvrir le cours ↗
JORNADES INTERNACIONALS · UAB|||JORNADAS INTERNACIONALES · UAB|||INTERNATIONAL CONFERENCE · UAB|||JOURNÉES INTERNATIONALES · UAB
27–29 GENER|||27–29 ENERO|||27–29 JANUARY|||27–29 JANVIER
XXIII Jornades Internacionals de Recerca en Didàctica de les Ciències Socials|||XXIII Jornadas Internacionales de Investigación en Didáctica de las Ciencias Sociales|||23rd International Conference on Social Studies Education Research|||XXIIIes Journées internationales de recherche en didactique des sciences sociales
Coordinació de les Jornades de Didàctica de les Ciències Socials a la UAB.|||Coordinación de las Jornadas de Didáctica de las Ciencias Sociales en la UAB.|||Co-organising the Social Studies Education Research Conference at UAB.|||Co-organisation des Journées de didactique des sciences sociales à l’UAB.
Web de les Jornades ↗|||Web de las Jornadas ↗|||Conference website ↗|||Site des Journées ↗
Veure també les intervencions en vídeo|||Ver también las intervenciones en vídeo|||Watch the talks on video|||Voir aussi les interventions en vidéo
Recerca col·lectiva i edició científica|||Investigación colectiva y edición científica|||Collaborative research and scholarly publishing|||Recherche collective et édition scientifique
Compartir coneixement.|||Compartir conocimiento.|||Share knowledge.|||Partager les savoirs.
Construir comunitat.|||Construir comunidad.|||Build community.|||Construire une communauté.
GRUP DE RECERCA · UAB|||GRUPO DE INVESTIGACIÓN · UAB|||RESEARCH GROUP · UAB|||GROUPE DE RECHERCHE · UAB
Grup de Recerca en Didàctica de les Ciències Socials|||Grupo de Investigación en Didáctica de las Ciencias Sociales|||Social Studies Education Research Group|||Groupe de recherche en didactique des sciences sociales
Recerca sobre educació per a la ciutadania, pensament crític, història, problemes socials i cultura democràtica a la Universitat Autònoma de Barcelona.|||Investigación sobre educación para la ciudadanía, pensamiento crítico, historia, problemas sociales y cultura democrática en la Universidad Autónoma de Barcelona.|||Research on citizenship education, critical thinking, history, social issues and democratic culture at the Autonomous University of Barcelona.|||Recherche sur l’éducation à la citoyenneté, la pensée critique, l’histoire, les questions sociales et la culture démocratique à l’Université autonome de Barcelone.
Web de GREDICS ↗|||Web de GREDICS ↗|||GREDICS website ↗|||Site de GREDICS ↗
El meu perfil ↗|||Mi perfil ↗|||My profile ↗|||Mon profil ↗
REVISTA CIENTÍFICA · ACTIVITAT EDITORIAL|||REVISTA CIENTÍFICA · ACTIVIDAD EDITORIAL|||ACADEMIC JOURNAL · EDITORIAL ACTIVITY|||REVUE SCIENTIFIQUE · ACTIVITÉ ÉDITORIALE
Revista d'investigació en didàctica de la geografia, la història i les ciències socials. Hi participo com a director adjunt.|||Revista de investigación en didáctica de la geografía, la historia y las ciencias sociales. Participo en ella como director adjunto.|||A research journal on geography, history and social studies education, where I serve as associate editor.|||Revue de recherche sur l’enseignement de la géographie, de l’histoire et des sciences sociales, dont je suis rédacteur adjoint.
Visitar la revista ↗|||Visitar la revista ↗|||Visit the journal ↗|||Consulter la revue ↗
Conceptes · Preguntes · Activitats|||Conceptos · Preguntas · Actividades|||Concepts · Questions · Activities|||Concepts · Questions · Activités
Laboratori de|||Laboratorio de|||Critical Thinking|||Laboratoire de
Pensament Crític.|||Pensamiento Crítico.|||Lab.|||Pensée Critique.
Qüestionar allò que donem per fet, escoltar mirades diverses, comprendre les desigualtats i actuar per transformar la realitat.|||Cuestionar lo que damos por sentado, escuchar distintas perspectivas, comprender las desigualdades y actuar para transformar la realidad.|||Question assumptions, listen to different perspectives, understand inequalities and take action to change the world.|||Questionner nos évidences, écouter d’autres points de vue, comprendre les inégalités et agir pour transformer la réalité.
Explorar les quatre dimensions|||Explorar las cuatro dimensiones|||Explore the four dimensions|||Explorer les quatre dimensions
OBSERVAR / CONTRASTAR / ARGUMENTAR / ACTUAR|||OBSERVAR / CONTRASTAR / ARGUMENTAR / ACTUAR|||OBSERVE / COMPARE / REASON / ACT|||OBSERVER / CONFRONTER / ARGUMENTER / AGIR
Font:|||Fuente:|||Source:|||Source :
Sobre mi|||Sobre mí|||About me|||À propos
Una mica sobre mi.|||Un poco sobre mí.|||A little about me.|||Quelques mots sur moi.
Treballo a la UAB, on faig classes de didàctica de les ciències socials i participo en projectes de recerca educativa. Bona part de la meva feina gira al voltant de la formació de mestres i de com connectar l'escola amb els debats del nostre temps.|||Trabajo en la UAB, donde imparto didáctica de las ciencias sociales y participo en proyectos de investigación educativa. Gran parte de mi trabajo se centra en la formación de docentes y en conectar la escuela con los debates de nuestro tiempo.|||I work at UAB, where I teach social studies education and take part in educational research projects. Much of my work focuses on teacher education and connecting schools with the debates of our time.|||Je travaille à l’UAB, où j’enseigne la didactique des sciences sociales et participe à des projets de recherche en éducation. Une grande partie de mon travail porte sur la formation des enseignants et le lien entre l’école et les débats de notre époque.
Formació acadèmica|||Formación académica|||Academic background|||Formation universitaire
Doctorat en Educació|||Doctorado en Educación|||PhD in Education|||Doctorat en éducation
Màster Universitari en Recerca en Educació|||Máster Universitario en Investigación en Educación|||Master’s degree in Educational Research|||Master en recherche en éducation
Grau en Història|||Grado en Historia|||Bachelor’s degree in History|||Licence d’histoire
Grau en Educació Primària|||Grado en Educación Primaria|||Bachelor’s degree in Primary Education|||Licence en enseignement primaire
Visitar el meu perfil acadèmic a la UAB ↗|||Visitar mi perfil académico en la UAB ↗|||Visit my UAB research profile ↗|||Consulter mon profil scientifique à l’UAB ↗
Contacte i col·laboracions|||Contacto y colaboraciones|||Contact and collaborations|||Contact et collaborations
Parlem-ne.|||Hablemos.|||Let’s talk.|||Échangeons.
Escriu-me|||Escríbeme|||Email me|||Écrivez-moi
`),
  //NEXT
];

export const exactOriginals = [
  'Jordi Castellví Mata','critical-think.ing','GREDICS','UAB','ORCID','ResearchGate',
  'Bluesky','Google Scholar','Barcanova.','Jesuïtes Educació.','Discover','Education',
  'La formación del pensamiento crítico en la era digital','Enseñanza de las Ciencias Sociales',
  'MICIU','AEI','UE','FEDER, UE','coursera','Amazon','ISBN','2027 · UAB',
  'CRITICAL THINKING / SOCIAL SCIENCES EDUCATION'
];
export const attributePrefixes = [
  ['Portada de ', ['Portada de ','Cover of ','Couverture de ']],
  ['Portada del llibre ', ['Portada del libro ','Book cover: ','Couverture du livre ']],
  ['Primera pàgina del recurs ', ['Primera página del recurso ','First page of the resource ','Première page de la ressource ']],
  ['Consultar ', ['Consultar ','View ','Consulter ']],
  ['Obre ', ['Abrir ','Open ','Ouvrir ']],
  ['Obrir ', ['Abrir ','Open ','Ouvrir ']],
  ['Reprodueix el vídeo: ', ['Reproduce el vídeo: ','Play video: ','Lire la vidéo : ']],
  ['Reprodueix: ', ['Reproduce: ','Play: ','Lire : ']],
  ['Cercar a Amazon ', ['Buscar en Amazon ','Search Amazon for ','Rechercher sur Amazon ']],
  ['Veure la fitxa de ', ['Ver la ficha de ','View details for ','Voir la fiche de ']]
];
