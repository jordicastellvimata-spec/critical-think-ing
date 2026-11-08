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
  ...block(String.raw`
Relats hegemònics|||Relatos hegemónicos|||Hegemonic narratives|||Récits hégémoniques
Com es construeixen, es transmeten i es qüestionen les visions dominants del món social.|||Cómo se construyen, transmiten y cuestionan las visiones dominantes del mundo social.|||How dominant views of society are constructed, transmitted and questioned.|||Comment les visions dominantes du monde social se construisent, se transmettent et sont remises en question.
Discursos d’odi i contrarelats|||Discursos de odio y contrarrelatos|||Hate speech and counter-narratives|||Discours de haine et contre-récits
Els discursos d’odi i les respostes educatives per analitzar-los i confrontar-los.|||Los discursos de odio y las respuestas educativas para analizarlos y confrontarlos.|||Hate speech and educational responses to analyse and challenge it.|||Les discours de haine et les réponses éducatives pour les analyser et les combattre.
Polarització sociopolítica i populismes|||Polarización sociopolítica y populismos|||Sociopolitical polarization and populism|||Polarisation sociopolitique et populismes
Els reptes que la polarització i els populismes plantegen a l’educació.|||Los retos que la polarización y los populismos plantean a la educación.|||The challenges polarization and populism pose to education.|||Les défis posés à l’éducation par la polarisation et les populismes.
Formació del pensament crític i de la ciutadania crítica|||Formación del pensamiento crítico y de la ciudadanía crítica|||Developing critical thinking and critical citizenship|||Développer la pensée critique et la citoyenneté critique
Com desenvolupar el judici crític i la participació conscient en la vida democràtica.|||Cómo desarrollar el juicio crítico y la participación consciente en la vida democrática.|||How to develop critical judgement and meaningful participation in democratic life.|||Comment développer le jugement critique et une participation consciente à la vie démocratique.
EN CURS|||EN CURSO|||ONGOING|||EN COURS
FINALITZAT|||FINALIZADO|||COMPLETED|||TERMINÉ
Competències de cultura democràtica en educació primària|||Competencias de cultura democrática en educación primaria|||Competences for democratic culture in primary education|||Compétences pour une culture démocratique à l’école primaire
Recerca sobre el desenvolupament i l’ensenyament de competències de cultura democràtica a l’educació primària.|||Investigación sobre el desarrollo y la enseñanza de competencias para la cultura democrática en educación primaria.|||Research on developing and teaching competences for democratic culture in primary education.|||Recherche sur le développement et l’enseignement des compétences pour une culture démocratique à l’école primaire.
Membre de l’equip investigador|||Miembro del equipo investigador|||Research team member|||Membre de l’équipe de recherche
Educació per al futur i esperança en la democràcia|||Educación para el futuro y esperanza en la democracia|||Education for the future and hope in democracy|||Éducation à l’avenir et espoir dans la démocratie
Repensar l’ensenyament de les ciències socials en temps de canvi, a partir dels futurs i els problemes socials.|||Repensar la enseñanza de las ciencias sociales en tiempos de cambio, a partir de los futuros y los problemas sociales.|||Rethinking social studies education in times of change through futures and social issues.|||Repenser l’enseignement des sciences sociales dans un contexte de changement, à partir des futurs et des questions sociales.
Interpretar problemes i conflictes contemporanis|||Interpretar problemas y conflictos contemporáneos|||Interpreting contemporary issues and conflicts|||Interpréter les problèmes et conflits contemporains
Una investigació sobre la contribució de les ciències socials a la formació d’una ciutadania global crítica.|||Una investigación sobre la contribución de las ciencias sociales a la formación de una ciudadanía global crítica.|||A study of how social studies education contributes to critical global citizenship.|||Une recherche sur la contribution des sciences sociales à la formation d’une citoyenneté mondiale critique.
Membre col·laborador de l’equip|||Miembro colaborador del equipo|||Collaborating team member|||Membre collaborateur de l’équipe
Col·lecció temàtica de Discover Education (Springer Nature)|||Colección temática de Discover Education (Springer Nature)|||Topical collection in Discover Education (Springer Nature)|||Collection thématique de Discover Education (Springer Nature)
Coordinació editorial d’una col·lecció sobre educació, democràcia i justícia social, amb Núria Arís i Antoni Santisteban.|||Coordinación editorial de una colección sobre educación, democracia y justicia social, con Núria Arís y Antoni Santisteban.|||Editorial coordination of a collection on education, democracy and social justice with Núria Arís and Antoni Santisteban.|||Coordination éditoriale d’une collection sur l’éducation, la démocratie et la justice sociale avec Núria Arís et Antoni Santisteban.
Veure la convocatòria|||Ver la convocatoria|||View the call for papers|||Voir l’appel à contributions
MOOC de la Universitat Autònoma de Barcelona|||MOOC de la Universidad Autónoma de Barcelona|||MOOC by the Autonomous University of Barcelona|||MOOC de l’Université autonome de Barcelone
Curs en línia sobre literacitat crítica, ciutadania i educació democràtica. Hi participo com a docent i codirector.|||Curso en línea sobre literacidad crítica, ciudadanía y educación democrática. Participo como docente y codirector.|||An online course on critical literacy, citizenship and democratic education, which I co-direct and teach.|||Cours en ligne sur la littératie critique, la citoyenneté et l’éducation démocratique, dont je suis enseignant et codirecteur.
Descobrir el MOOC|||Descubrir el MOOC|||Explore the MOOC|||Découvrir le MOOC
Activitat editorial|||Actividad editorial|||Editorial work|||Activité éditoriale
Participació en la direcció adjunta i en el treball editorial d’una revista especialitzada en didàctica de les ciències socials.|||Participación en la dirección adjunta y el trabajo editorial de una revista especializada en didáctica de las ciencias sociales.|||Associate editorial leadership and editorial work for a journal specializing in social studies education.|||Participation à la direction adjointe et au travail éditorial d’une revue spécialisée en didactique des sciences sociales.
Visitar la revista|||Visitar la revista|||Visit the journal|||Consulter la revue
EDICIÓ ACADÈMICA · 2026|||EDICIÓN ACADÉMICA · 2026|||ACADEMIC EDITING · 2026|||ÉDITION ACADÉMIQUE · 2026
REVISTES CIENTÍFIQUES|||REVISTAS CIENTÍFICAS|||ACADEMIC JOURNALS|||REVUES SCIENTIFIQUES
L’escola davant l’actualitat|||La escuela ante la actualidad|||Schools facing current affairs|||L’école face à l’actualité
Competències de Cultura Democràtica per canviar el món|||Competencias de cultura democrática para cambiar el mundo|||Competences for democratic culture to change the world|||Des compétences de culture démocratique pour changer le monde
Un espai de trobada entre professorat, investigadors i estudiants per interpretar críticament l’actualitat, contrastar perspectives i connectar la cultura democràtica amb la pràctica educativa.|||Un espacio de encuentro entre docentes, investigadores y estudiantes para interpretar críticamente la actualidad, contrastar perspectivas y conectar la cultura democrática con la práctica educativa.|||A meeting place for teachers, researchers and students to critically interpret current events, compare perspectives and connect democratic culture with educational practice.|||Un espace de rencontre entre enseignants, chercheurs et étudiants pour analyser l’actualité de manière critique, confronter les points de vue et relier la culture démocratique à la pratique éducative.
27, 28 i 29 de gener de 2027|||27, 28 y 29 de enero de 2027|||27–29 January 2027|||27, 28 et 29 janvier 2027
Jornades Internacionals de Recerca en Didàctica de les Ciències Socials|||Jornadas Internacionales de Investigación en Didáctica de las Ciencias Sociales|||International Conference on Social Studies Education Research|||Journées internationales de recherche en didactique des sciences sociales
Facultat de Ciències de l’Educació · UAB|||Facultad de Ciencias de la Educación · UAB|||Faculty of Education · UAB|||Faculté des sciences de l’éducation · UAB
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
