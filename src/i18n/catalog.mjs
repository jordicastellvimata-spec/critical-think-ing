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
  ...block(String.raw`
Llibres i informes · Didàctica de les ciències socials|||Libros e informes · Didáctica de las ciencias sociales|||Books and reports · Social studies education|||Livres et rapports · Didactique des sciences sociales
Llibres|||Libros|||Books|||Livres
COEDICIÓ|||COEDICIÓN|||CO-EDITED VOLUME|||CODIRECTION
COAUTORIA · 3 CAPÍTOLS|||COAUTORÍA · 3 CAPÍTULOS|||CO-AUTHOR · 3 CHAPTERS|||COAUTORAT · 3 CHAPITRES
AUTORIA · INFORME|||AUTORÍA · INFORME|||AUTHOR · REPORT|||AUTEUR · RAPPORT
Una obra col·lectiva sobre el conflicte com a qüestió social rellevant i sobre el paper de l’educació en la cultura democràtica i la justícia social.|||Una obra colectiva sobre el conflicto como cuestión social relevante y el papel de la educación en la cultura democrática y la justicia social.|||A collective volume on conflict as a relevant social issue and the role of education in democratic culture and social justice.|||Un ouvrage collectif sur le conflit en tant que question sociale majeure et sur le rôle de l’éducation dans la culture démocratique et la justice sociale.
Contribucions als capítols d’investigació qualitativa, qüestions i protocols ètics, i elaboració de l’informe de recerca i redacció científica.|||Contribuciones a los capítulos sobre investigación cualitativa, cuestiones y protocolos éticos, elaboración de informes y escritura científica.|||Contributions to chapters on qualitative research, ethics and protocols, research reporting and academic writing.|||Contributions aux chapitres sur la recherche qualitative, les questions et protocoles éthiques, les rapports de recherche et la rédaction scientifique.
Informe elaborat en col·laboració amb l’Escola Montserrat Solà, GREDICS i la Unitat de Didàctica de les Ciències Socials de la UAB. Explora com els infants aprenen sobre el temps, l’espai, la família, la cultura i la identitat a través de la vida quotidiana de l’escola.|||Informe elaborado con la Escola Montserrat Solà, GREDICS y la Unidad de Didáctica de las Ciencias Sociales de la UAB. Explora cómo los niños aprenden sobre el tiempo, el espacio, la familia, la cultura y la identidad en la vida cotidiana de la escuela.|||A report developed with Escola Montserrat Solà, GREDICS and UAB's Social Studies Education Unit. It explores how children learn about time, space, family, culture and identity through everyday school life.|||Rapport élaboré avec l’Escola Montserrat Solà, GREDICS et l’unité de didactique des sciences sociales de l’UAB. Il examine comment les enfants découvrent le temps, l’espace, la famille, la culture et l’identité dans la vie quotidienne de l’école.
Fitxa editorial|||Ficha editorial|||Publisher's page|||Fiche de l’éditeur
Descarregar en accés obert|||Descargar en acceso abierto|||Download open-access edition|||Télécharger en accès libre
Llegir l’informe (PDF)|||Leer el informe (PDF)|||Read the report (PDF)|||Lire le rapport (PDF)
Delfín Ortega-Sánchez, Jordi Castellví Mata i Neus González-Monfort (eds.)|||Delfín Ortega-Sánchez, Jordi Castellví Mata y Neus González-Monfort (eds.)|||Delfín Ortega-Sánchez, Jordi Castellví Mata and Neus González-Monfort (eds.)|||Delfín Ortega-Sánchez, Jordi Castellví Mata et Neus González-Monfort (dir.)
Delfín Ortega-Sánchez (ed.); Jordi Castellví Mata, Jesús Marolla i Carmen Escribano, entre altres autors|||Delfín Ortega-Sánchez (ed.); Jordi Castellví Mata, Jesús Marolla y Carmen Escribano, entre otros autores|||Delfín Ortega-Sánchez (ed.); Jordi Castellví Mata, Jesús Marolla and Carmen Escribano, among other authors|||Delfín Ortega-Sánchez (dir.) ; Jordi Castellví Mata, Jesús Marolla et Carmen Escribano, entre autres auteurs
AUTORIA I DISSENY DE MATERIALS · PRIMÀRIA|||AUTORÍA Y DISEÑO DE MATERIALES · PRIMARIA|||AUTHORSHIP AND MATERIAL DESIGN · PRIMARY|||CONCEPTION DE MATÉRIELS · PRIMAIRE
Llibres de text de medi natural, social i cultural de|||Libros de texto de conocimiento del medio natural, social y cultural de|||Natural, social and cultural studies textbooks by|||Manuels de découverte du monde naturel, social et culturel de
Col·laboració en els programes Experimenta i Entorn de Coneixement del Medi, amb vuit volums per a 3r i 4t de primària.|||Colaboración en los programas Experimenta y Entorn de Conocimiento del Medio, con ocho volúmenes para 3.º y 4.º de primaria.|||Contributions to the Experimenta and Entorn programmes, with eight volumes for Years 3 and 4 of primary school.|||Participation aux collections Experimenta et Entorn de découverte du monde, avec huit volumes pour les 3e et 4e années du primaire.
Desplaça les portades per explorar els llibres|||Desliza las portadas para explorar los libros|||Swipe through the book covers|||Faites défiler les couvertures
3r de primària|||3.º de primaria|||Year 3 of primary school|||3e année du primaire
4t de primària|||4.º de primaria|||Year 4 of primary school|||4e année du primaire
3R DE PRIMÀRIA|||3.º DE PRIMARIA|||YEAR 3|||3e ANNÉE DU PRIMAIRE
4T DE PRIMÀRIA|||4.º DE PRIMARIA|||YEAR 4|||4e ANNÉE DU PRIMAIRE
Fitxa del llibre ↗|||Ficha del libro ↗|||Book details ↗|||Fiche du livre ↗
Els enllaços d’Amazon cerquen cada ISBN; no pressuposen que el llibre hi estigui disponible.|||Los enlaces de Amazon buscan cada ISBN; no garantizan que el libro esté disponible.|||Amazon links search each ISBN; they do not imply that the book is in stock.|||Les liens Amazon recherchent chaque ISBN, sans garantir la disponibilité du livre.
DISSENY DE PROJECTES · SECUNDÀRIA|||DISEÑO DE PROYECTOS · SECUNDARIA|||PROJECT DESIGN · SECONDARY|||CONCEPTION DE PROJETS · SECONDAIRE
Projectes amb|||Proyectos con|||Projects with|||Projets avec
Vaig dissenyar cinc projectes de ciències socials i vaig compartir la coordinació de l’equip que va desenvolupar un total de 24 projectes per a tota l’etapa de l’ESO.|||Diseñé cinco proyectos de ciencias sociales y compartí la coordinación del equipo que desarrolló un total de 24 proyectos para toda la ESO.|||I designed five social studies projects and co-coordinated the team that developed 24 projects across the entire lower secondary stage.|||J’ai conçu cinq projets de sciences sociales et co-coordonné l’équipe qui a développé 24 projets pour l’ensemble du secondaire obligatoire.
Desplaça les portades per explorar els projectes|||Desliza las portadas para explorar los proyectos|||Swipe through the project covers|||Faites défiler les couvertures des projets
Portades de presentació dels projectes desenvolupats amb Jesuïtes Educació.|||Portadas utilizadas para presentar los proyectos desarrollados con Jesuïtes Educació.|||Presentation covers for projects developed with Jesuïtes Educació.|||Couvertures de présentation des projets élaborés avec Jesuïtes Educació.
1r d’ESO|||1.º de ESO|||Year 1 of compulsory secondary education|||1re année du secondaire obligatoire
2n d’ESO|||2.º de ESO|||Year 2 of compulsory secondary education|||2e année du secondaire obligatoire
3r d’ESO|||3.º de ESO|||Year 3 of compulsory secondary education|||3e année du secondaire obligatoire
1R D’ESO|||1.º DE ESO|||YEAR 1 · SECONDARY|||1re ANNÉE · SECONDAIRE
2N D’ESO|||2.º DE ESO|||YEAR 2 · SECONDARY|||2e ANNÉE · SECONDAIRE
3R D’ESO|||3.º DE ESO|||YEAR 3 · SECONDARY|||3e ANNÉE · SECONDAIRE
PROJECTE · 1R D’ESO|||PROYECTO · 1.º DE ESO|||PROJECT · YEAR 1 SECONDARY|||PROJET · 1re ANNÉE DU SECONDAIRE
PROJECTE · 2N D’ESO|||PROYECTO · 2.º DE ESO|||PROJECT · YEAR 2 SECONDARY|||PROJET · 2e ANNÉE DU SECONDAIRE
PROJECTE · 3R D’ESO|||PROYECTO · 3.º DE ESO|||PROJECT · YEAR 3 SECONDARY|||PROJET · 3e ANNÉE DU SECONDAIRE
MATERIALS OBERTS · GENERALITAT DE CATALUNYA · 2025|||MATERIALES ABIERTOS · GENERALITAT DE CATALUNYA · 2025|||OPEN EDUCATIONAL RESOURCES · GOVERNMENT OF CATALONIA · 2025|||RESSOURCES LIBRES · GÉNÉRALITÉ DE CATALOGNE · 2025
Recursos per|||Recursos para|||Resources to|||Ressources pour
llegir el món.|||leer el mundo.|||read the world.|||lire le monde.
Dos materials per a la pràctica docent, publicats pel Departament d’Educació i Formació Professional amb Antoni Santisteban.|||Dos materiales para la práctica docente, publicados por el Departamento de Educación y Formación Profesional con Antoni Santisteban.|||Two classroom resources published by Catalonia's Department of Education and Vocational Training with Antoni Santisteban.|||Deux ressources pédagogiques publiées par le département de l’Éducation et de la Formation professionnelle de Catalogne avec Antoni Santisteban.
EDUCACIÓ PRIMÀRIA|||EDUCACIÓN PRIMARIA|||PRIMARY EDUCATION|||ENSEIGNEMENT PRIMAIRE
EDUCACIÓ SECUNDÀRIA|||EDUCACIÓN SECUNDARIA|||SECONDARY EDUCATION|||ENSEIGNEMENT SECONDAIRE
Recursos per llegir críticament el món i escriure per comprendre’l i transformar-lo.|||Recursos para leer críticamente el mundo y escribir para comprenderlo y transformarlo.|||Resources for critically reading the world and writing to understand and transform it.|||Ressources pour lire le monde de façon critique et écrire afin de le comprendre et de le transformer.
Orientacions sobre la interpretació crítica de discursos, l’argumentació i el diàleg davant qüestions socials.|||Orientaciones sobre la interpretación crítica de los discursos, la argumentación y el diálogo ante cuestiones sociales.|||Guidance on the critical interpretation of discourse, argumentation and dialogue about social issues.|||Orientations sur l’interprétation critique des discours, l’argumentation et le dialogue autour des questions sociales.
Antoni Santisteban i Jordi Castellví|||Antoni Santisteban y Jordi Castellví|||Antoni Santisteban and Jordi Castellví|||Antoni Santisteban et Jordi Castellví
Jordi Castellví i Antoni Santisteban|||Jordi Castellví y Antoni Santisteban|||Jordi Castellví and Antoni Santisteban|||Jordi Castellví et Antoni Santisteban
Consultar el recurs|||Consultar el recurso|||View the resource|||Consulter la ressource
FORMACIÓ DE MESTRES · UNIVERSITAT OBERTA DE CATALUNYA|||FORMACIÓN DE DOCENTES · UNIVERSITAT OBERTA DE CATALUNYA|||TEACHER EDUCATION · OPEN UNIVERSITY OF CATALONIA|||FORMATION DES ENSEIGNANTS · UNIVERSITÉ OUVERTE DE CATALOGNE
Recursos de didàctica|||Recursos de didáctica|||Social studies|||Ressources de didactique
de les ciències socials ·|||de las ciencias sociales ·|||education resources ·|||des sciences sociales ·
Entre 2021 i 2024 vaig contribuir a la creació del grau d’Educació Primària de la UOC amb el disseny de dues assignatures noves —«Ciències Socials i Ciutadania» i «Didàctica de les Ciències Socials»— i l’elaboració d’orientacions curriculars, materials d’aprenentatge i recursos audiovisuals.|||Entre 2021 y 2024 contribuí a la creación del grado de Educación Primaria de la UOC mediante el diseño de dos nuevas asignaturas —«Ciencias Sociales y Ciudadanía» y «Didáctica de las Ciencias Sociales»— y la elaboración de orientaciones curriculares, materiales de aprendizaje y recursos audiovisuales.|||Between 2021 and 2024, I helped develop UOC's new Primary Education degree by designing two new modules—Social Sciences and Citizenship, and Social Studies Education—and producing curriculum guidance, learning materials and videos.|||Entre 2021 et 2024, j’ai contribué à la création de la nouvelle licence d’enseignement primaire de l’UOC, en concevant deux cours —« Sciences sociales et citoyenneté » et « Didactique des sciences sociales »— ainsi que des orientations curriculaires, des supports pédagogiques et des vidéos.
RECURS AUDIOVISUAL · UOC · CONVERSA · DIDÀCTICA DE LES CIÈNCIES SOCIALS|||RECURSO AUDIOVISUAL · UOC · CONVERSACIÓN · DIDÁCTICA DE LAS CIENCIAS SOCIALES|||VIDEO RESOURCE · UOC · CONVERSATION · SOCIAL STUDIES EDUCATION|||RESSOURCE VIDÉO · UOC · CONVERSATION · DIDACTIQUE DES SCIENCES SOCIALES
RECURS AUDIOVISUAL · UOC · CONVERSA · EDUCACIÓ MEDIÀTICA|||RECURSO AUDIOVISUAL · UOC · CONVERSACIÓN · EDUCACIÓN MEDIÁTICA|||VIDEO RESOURCE · UOC · CONVERSATION · MEDIA EDUCATION|||RESSOURCE VIDÉO · UOC · CONVERSATION · ÉDUCATION AUX MÉDIAS
RECURS AUDIOVISUAL · UOC · RECURS AUDIOVISUAL · CIÈNCIES SOCIALS|||RECURSO AUDIOVISUAL · UOC · RECURSO AUDIOVISUAL · CIENCIAS SOCIALES|||VIDEO RESOURCE · UOC · SOCIAL STUDIES|||RESSOURCE VIDÉO · UOC · SCIENCES SOCIALES
RECURS AUDIOVISUAL · UOC · RECURS AUDIOVISUAL · EDUCACIÓ PRIMÀRIA|||RECURSO AUDIOVISUAL · UOC · RECURSO AUDIOVISUAL · EDUCACIÓN PRIMARIA|||VIDEO RESOURCE · UOC · PRIMARY EDUCATION|||RESSOURCE VIDÉO · UOC · ENSEIGNEMENT PRIMAIRE
Entrevista amb Pilar Benejam|||Entrevista con Pilar Benejam|||Interview with Pilar Benejam|||Entretien avec Pilar Benejam
Entrevista con Consuelo Díez|||Entrevista con Consuelo Díez|||Interview with Consuelo Díez|||Entretien avec Consuelo Díez
Finalitats educatives i ciutadania|||Finalidades educativas y ciudadanía|||Educational aims and citizenship|||Finalités éducatives et citoyenneté
Diàleg amb Antoni Santisteban|||Diálogo con Antoni Santisteban|||Dialogue with Antoni Santisteban|||Dialogue avec Antoni Santisteban
Veure a YouTube|||Ver en YouTube|||Watch on YouTube|||Regarder sur YouTube
`),
  ...block(String.raw`
CONSELL D’EUROPA|||CONSEJO DE EUROPA|||COUNCIL OF EUROPE|||CONSEIL DE L’EUROPE
PROGRAMA DISCO|||PROGRAMA DISCO|||DISCO PROGRAMME|||PROGRAMME DISCO
CULTURA DEMOCRÀTICA I FORMACIÓ DE MESTRES|||CULTURA DEMOCRÁTICA Y FORMACIÓN DE DOCENTES|||DEMOCRATIC CULTURE AND TEACHER EDUCATION|||CULTURE DÉMOCRATIQUE ET FORMATION DES ENSEIGNANTS
COOPERACIÓ EUROPEA · PARTICIPACIÓ EN PROJECTE|||COOPERACIÓN EUROPEA · PARTICIPACIÓN EN PROYECTO|||EUROPEAN COOPERATION · PROJECT PARTICIPATION|||COOPÉRATION EUROPÉENNE · PARTICIPATION AU PROJET
La cultura democràtica també s’aprèn a la universitat.|||La cultura democrática también se aprende en la universidad.|||Democratic culture is learned at university too.|||La culture démocratique s’apprend aussi à l’université.
Vaig participar a|||Participé en|||I took part in|||J’ai participé à
(EDCD-TEP), un projecte del programa DISCO del Consell d’Europa per integrar les competències de cultura democràtica a la formació inicial de mestres.|||(EDCD-TEP), un proyecto del programa DISCO del Consejo de Europa para integrar las competencias de cultura democrática en la formación inicial del profesorado.|||(EDCD-TEP), a project in the Council of Europe's DISCO programme to integrate competences for democratic culture into initial teacher education.|||(EDCD-TEP), un projet du programme DISCO du Conseil de l’Europe visant à intégrer les compétences pour une culture démocratique dans la formation initiale des enseignants.
Amb la UAB, l’Instituto Politécnico de Lisboa i la Manchester Metropolitan University.|||Con la UAB, el Instituto Politécnico de Lisboa y la Manchester Metropolitan University.|||With UAB, the Instituto Politécnico de Lisboa and Manchester Metropolitan University.|||Avec l’UAB, l’Instituto Politécnico de Lisboa et la Manchester Metropolitan University.
Unió Europea · Consell d’Europa|||Unión Europea · Consejo de Europa|||European Union · Council of Europe|||Union européenne · Conseil de l’Europe
PROGRAMA FINANÇAT PER LA UE I EL CONSELL D’EUROPA|||PROGRAMA FINANCIADO POR LA UE Y EL CONSEJO DE EUROPA|||PROGRAMME FUNDED BY THE EU AND COUNCIL OF EUROPE|||PROGRAMME FINANCÉ PAR L’UE ET LE CONSEIL DE L’EUROPE
Conèixer el projecte al Consell d’Europa|||Conocer el proyecto en el Consejo de Europa|||Read about the Council of Europe project|||Découvrir le projet au Conseil de l’Europe
LECTURES · RECURSOS PER AL PROFESSORAT|||LECTURAS · RECURSOS PARA DOCENTES|||READING · RESOURCES FOR TEACHERS|||LECTURES · RESSOURCES POUR LES ENSEIGNANTS
Per portar les idees|||Para llevar las ideas|||Bringing ideas|||Pour faire entrer les idées
a l’aula.|||al aula.|||into the classroom.|||dans la classe.
Quatre articles per explorar la lectura crítica, la ciutadania i les qüestions controvertides amb el professorat.|||Cuatro artículos para explorar la lectura crítica, la ciudadanía y las cuestiones controvertidas con el profesorado.|||Four articles for teachers exploring critical reading, citizenship and controversial issues.|||Quatre articles destinés aux enseignants pour explorer la lecture critique, la citoyenneté et les questions controversées.
LECTURA CRÍTICA|||LECTURA CRÍTICA|||CRITICAL READING|||LECTURE CRITIQUE
LITERACITAT DIGITAL|||LITERACIDAD DIGITAL|||DIGITAL LITERACY|||LITTÉRATIE NUMÉRIQUE
INTEL·LIGÈNCIA ARTIFICIAL|||INTELIGENCIA ARTIFICIAL|||ARTIFICIAL INTELLIGENCE|||INTELLIGENCE ARTIFICIELLE
JUSTÍCIA SOCIAL|||JUSTICIA SOCIAL|||SOCIAL JUSTICE|||JUSTICE SOCIALE
Llegir els mitjans i analitzar els seus missatges de manera crítica.|||Leer críticamente los medios y analizar sus mensajes.|||Critically reading media and analysing their messages.|||Lire les médias et analyser leurs messages de manière critique.
Un decàleg d’orientacions per a l’ensenyament de les ciències socials.|||Un decálogo de orientaciones para la enseñanza de las ciencias sociales.|||Ten guidelines for teaching social studies.|||Dix recommandations pour l’enseignement des sciences sociales.
Què pot aportar la IA a l’ensenyament i al pensament crític?|||¿Qué puede aportar la IA a la enseñanza y al pensamiento crítico?|||What can AI contribute to teaching and critical thinking?|||Que peut apporter l’IA à l’enseignement et à la pensée critique ?
Problemes socials rellevants, polarització i discursos d’odi a l’aula.|||Problemas sociales relevantes, polarización y discursos de odio en el aula.|||Social issues, polarization and hate speech in the classroom.|||Questions sociales, polarisation et discours de haine en classe.
Consultar l’article ↗|||Consultar el artículo ↗|||Read the article ↗|||Consulter l’article ↗
NÚM.|||NÚM.|||NO.|||N°
REVISTA CIENTÍFICA|||REVISTA CIENTÍFICA|||ACADEMIC JOURNAL|||REVUE SCIENTIFIQUE
TESI DOCTORAL · UAB · 2019|||TESIS DOCTORAL · UAB · 2019|||DOCTORAL THESIS · UAB · 2019|||THÈSE DE DOCTORAT · UAB · 2019
Literacitat crítica digital en els estudis socials.|||Literacidad crítica digital en los estudios sociales.|||Critical digital literacy in social studies.|||Littératie numérique critique dans l’enseignement des sciences sociales.
Estudis de cas en educació primària|||Estudios de caso en educación primaria|||Case studies in primary education|||Études de cas dans l’enseignement primaire
Una recerca sobre com es poden desenvolupar la lectura crítica del món digital i la participació de l’alumnat a través de l’ensenyament de les ciències socials.|||Una investigación sobre cómo desarrollar la lectura crítica del mundo digital y la participación del alumnado mediante la enseñanza de las ciencias sociales.|||Research into developing critical reading of the digital world and student participation through social studies education.|||Une recherche sur le développement de la lecture critique du monde numérique et de la participation des élèves grâce à l’enseignement des sciences sociales.
Llegir la tesi en accés obert|||Leer la tesis en acceso abierto|||Read the open-access thesis|||Lire la thèse en accès libre
Recerca · Edició · Transferència|||Investigación · Edición · Transferencia|||Research · Publishing · Knowledge exchange|||Recherche · Édition · Transfert
Projectes|||Proyectos|||Projects|||Projets
i iniciatives.|||e iniciativas.|||and initiatives.|||et initiatives.
Investigacions sobre cultura democràtica, ciutadania crítica i futurs, juntament amb iniciatives de formació i edició científica.|||Investigaciones sobre cultura democrática, ciudadanía crítica y futuros, junto con iniciativas de formación y edición científica.|||Research on democratic culture, critical citizenship and futures, alongside teacher education and scholarly publishing initiatives.|||Recherches sur la culture démocratique, la citoyenneté critique et les futurs, avec des initiatives de formation et d’édition scientifique.
Investigació|||Investigación|||Research|||Recherche
Projectes de recerca.|||Proyectos de investigación.|||Research projects.|||Projets de recherche.
Grup de recerca · UAB|||Grupo de investigación · UAB|||Research group · UAB|||Groupe de recherche · UAB
Grup de Recerca en Didàctica de les Ciències Socials de la Universitat Autònoma de Barcelona.|||Grupo de Investigación en Didáctica de las Ciencias Sociales de la Universidad Autónoma de Barcelona.|||The Social Studies Education Research Group at the Autonomous University of Barcelona.|||Le Groupe de recherche en didactique des sciences sociales de l’Université autonome de Barcelone.
Visitar GREDICS ↗|||Visitar GREDICS ↗|||Visit GREDICS ↗|||Consulter GREDICS ↗
Edició científica · Formació · Jornades|||Edición científica · Formación · Jornadas|||Scholarly publishing · Training · Conferences|||Édition scientifique · Formation · Colloques
Recerca que connecta|||Investigación que conecta|||Research connecting|||Une recherche en lien
amb la pràctica.|||con la práctica.|||with practice.|||avec la pratique.
ORGANITZACIÓ ACADÈMICA · 2027|||ORGANIZACIÓN ACADÉMICA · 2027|||ACADEMIC ORGANISATION · 2027|||ORGANISATION ACADÉMIQUE · 2027
Coordinació amb Neus González-Monfort i Mónica Hernández González.|||Coordinación con Neus González-Monfort y Mónica Hernández González.|||Co-organised with Neus González-Monfort and Mónica Hernández González.|||Coordination avec Neus González-Monfort et Mónica Hernández González.
Producció científica|||Producción científica|||Research output|||Production scientifique
Publicacions|||Publicaciones|||Publications|||Publications
Pensament crític, ciutadania democràtica, alfabetització digital, discursos d’odi i educació per al futur.|||Pensamiento crítico, ciudadanía democrática, alfabetización digital, discursos de odio y educación para el futuro.|||Critical thinking, democratic citizenship, digital literacy, hate speech and education for the future.|||Pensée critique, citoyenneté démocratique, littératie numérique, discours de haine et éducation aux futurs.
Articles de recerca · 2019—2026|||Artículos de investigación · 2019—2026|||Research articles · 2019—2026|||Articles de recherche · 2019—2026
Veure el catàleg complet a la UAB ↗|||Ver el catálogo completo en la UAB ↗|||View all publications at UAB ↗|||Voir l’ensemble des publications à l’UAB ↗
Portal de Recerca UAB ↗|||Portal de Investigación UAB ↗|||UAB Research Portal ↗|||Portail de recherche de l’UAB ↗
Idees · Recursos · Activitats|||Ideas · Recursos · Actividades|||Ideas · Resources · Activities|||Idées · Ressources · Activités
Un espai per posar el pensament crític en moviment: pensar conceptes, formular preguntes i imaginar com treballar-los a l’aula.|||Un espacio para poner el pensamiento crítico en movimiento: pensar conceptos, formular preguntas e imaginar cómo trabajarlos en el aula.|||A space to put critical thinking into practice: explore concepts, ask questions and imagine classroom activities.|||Un espace pour mettre la pensée critique en mouvement : explorer des concepts, formuler des questions et imaginer leur mise en œuvre en classe.
Les quatre dimensions de la literacitat crítica|||Las cuatro dimensiones de la literacidad crítica|||The four dimensions of critical literacy|||Les quatre dimensions de la littératie critique
Qüestionar, interpretar|||Cuestionar, interpretar|||Question, interpret|||Questionner, interpréter
i transformar.|||y transformar.|||and transform.|||et transformer.
Mirar la realitat amb altres ulls, escoltar perspectives diverses, examinar les relacions de poder i actuar per la justícia social.|||Mirar la realidad con otros ojos, escuchar perspectivas diversas, examinar las relaciones de poder y actuar por la justicia social.|||Look at reality differently, listen to diverse perspectives, examine power relations and act for social justice.|||Regarder la réalité autrement, écouter des points de vue divers, examiner les rapports de pouvoir et agir pour la justice sociale.
Per aprofundir|||Para profundizar|||Explore further|||Pour aller plus loin
De la teoria|||De la teoría|||From theory|||De la théorie
a la pràctica.|||a la práctica.|||to practice.|||à la pratique.
El MOOC «La formación del pensamiento crítico en la era digital» aprofundeix en la lectura crítica de la informació, la ciutadania i l'educació democràtica.|||El MOOC «La formación del pensamiento crítico en la era digital» profundiza en la lectura crítica de la información, la ciudadanía y la educación democrática.|||The MOOC «La formación del pensamiento crítico en la era digital» explores critical reading of information, citizenship and democratic education.|||Le MOOC «La formación del pensamiento crítico en la era digital» approfondit la lecture critique de l’information, la citoyenneté et l’éducation démocratique.
Veure el curs a Coursera ↗|||Ver el curso en Coursera ↗|||View the course on Coursera ↗|||Voir le cours sur Coursera ↗
Educar per pensar críticament és, també, educar per participar.|||Educar para pensar críticamente también es educar para participar.|||Teaching people to think critically also means teaching them to participate.|||Éduquer à la pensée critique, c’est aussi éduquer à la participation.
IDEA CENTRAL DEL LABORATORI|||IDEA CENTRAL DEL LABORATORIO|||CORE IDEA OF THE LAB|||IDÉE CLÉ DU LABORATOIRE
Qüestionar allò comú|||Cuestionar lo cotidiano|||Question the commonplace|||Questionner les évidences
Mirar la vida quotidiana amb altres ulls: problematitzar allò que donem per fet i analitzar com els textos i el llenguatge construeixen la realitat i les identitats.|||Mirar la vida cotidiana con otros ojos: problematizar lo que damos por sentado y analizar cómo los textos y el lenguaje construyen la realidad y las identidades.|||Look at everyday life from a different perspective: question assumptions and explore how texts and language construct reality and identities.|||Regarder le quotidien autrement : questionner les évidences et analyser comment les textes et le langage construisent la réalité et les identités.
Multiperspectiva|||Multiperspectiva|||Multiple perspectives|||Multiperspectivité
Contrastar punts de vista diversos, fins i tot contradictoris; preguntar-nos quines veus s’escolten i quines falten, i recuperar les que han estat silenciades o marginades.|||Contrastar puntos de vista diversos, incluso contradictorios; preguntarnos qué voces se escuchan y cuáles faltan, y recuperar las silenciadas o marginadas.|||Compare diverse, even contradictory, perspectives; ask whose voices are heard and whose are missing, and bring back those silenced or marginalized.|||Confronter des points de vue variés, parfois contradictoires ; interroger les voix entendues et absentes, et retrouver celles qui ont été réduites au silence ou marginalisées.
Problemes socials rellevants|||Problemas sociales relevantes|||Relevant social issues|||Questions socialement vives
Anar més enllà de les vivències individuals per comprendre els sistemes sociopolítics, les relacions de poder i les desigualtats que condicionen la vida quotidiana.|||Ir más allá de las experiencias individuales para comprender los sistemas sociopolíticos, las relaciones de poder y las desigualdades que condicionan la vida cotidiana.|||Go beyond individual experiences to understand the sociopolitical systems, power relations and inequalities that shape daily life.|||Dépasser les expériences individuelles pour comprendre les systèmes sociopolitiques, les rapports de pouvoir et les inégalités qui façonnent le quotidien.
Acció social|||Acción social|||Social action|||Action sociale
Passar de la reflexió a l’acció per transformar la realitat: qüestionar els privilegis i les injustícies, i promoure la participació i la justícia social.|||Pasar de la reflexión a la acción para transformar la realidad: cuestionar los privilegios y las injusticias, y promover la participación y la justicia social.|||Move from reflection to action to transform society: challenge privilege and injustice, and promote participation and social justice.|||Passer de la réflexion à l’action pour transformer la réalité : questionner les privilèges et les injustices, et encourager la participation et la justice sociale.
`),
  ...block(String.raw`
Línies de recerca|||Líneas de investigación|||Research areas|||Axes de recherche
Pràctica|||Práctica|||Practice|||Pratique
Docència|||Docencia|||Teaching|||Enseignement
Laboratori|||Laboratorio|||Lab|||Laboratoire
Contacte|||Contacto|||Contact|||Contact
Menú|||Menú|||Menu|||Menu
Contacte ↗|||Contacto ↗|||Contact ↗|||Contact ↗
Recerca, educació i pensament crític|||Investigación, educación y pensamiento crítico|||Research, education and critical thinking|||Recherche, éducation et pensée critique
Perfil UAB ↗|||Perfil UAB ↗|||UAB profile ↗|||Profil UAB ↗
CONTACTE ACADÈMIC|||CONTACTO ACADÉMICO|||ACADEMIC CONTACT|||CONTACT UNIVERSITAIRE
Espai acadèmic de Jordi Castellví Mata: pensament crític, educació democràtica, publicacions i projectes de didàctica de les ciències socials.|||Espacio académico de Jordi Castellví Mata: pensamiento crítico, educación democrática, publicaciones y proyectos de didáctica de las ciencias sociales.|||Jordi Castellví Mata's academic website: critical thinking, democratic education, publications and social studies education projects.|||Site académique de Jordi Castellví Mata : pensée critique, éducation démocratique, publications et projets en didactique des sciences sociales.
Pensament crític, educació democràtica i didàctica de les ciències socials.|||Pensamiento crítico, educación democrática y didáctica de las ciencias sociales.|||Critical thinking, democratic education and social studies education.|||Pensée critique, éducation démocratique et didactique des sciences sociales.
Projectes i iniciatives|||Proyectos e iniciativas|||Projects and initiatives|||Projets et initiatives
Projectes de recerca, coordinació editorial i formació oberta de Jordi Castellví Mata.|||Proyectos de investigación, coordinación editorial y formación abierta de Jordi Castellví Mata.|||Research projects, editorial coordination and open education by Jordi Castellví Mata.|||Projets de recherche, coordination éditoriale et formation ouverte de Jordi Castellví Mata.
Articles científics publicats per Jordi Castellví Mata en revistes acadèmiques sobre pensament crític, educació i ciutadania democràtica.|||Artículos científicos publicados por Jordi Castellví Mata en revistas académicas sobre pensamiento crítico, educación y ciudadanía democrática.|||Research articles by Jordi Castellví Mata on critical thinking, education and democratic citizenship.|||Articles scientifiques de Jordi Castellví Mata sur la pensée critique, l’éducation et la citoyenneté démocratique.
Laboratori de Pensament Crític|||Laboratorio de Pensamiento Crítico|||Critical Thinking Lab|||Laboratoire de pensée critique
Laboratori de Pensament Crític: idees, preguntes, activitats i recursos per a una educació democràtica.|||Laboratorio de Pensamiento Crítico: ideas, preguntas, actividades y recursos para una educación democrática.|||Critical Thinking Lab: ideas, questions, activities and resources for democratic education.|||Laboratoire de pensée critique : idées, questions, activités et ressources pour une éducation démocratique.
Trajectòria acadèmica de Jordi Castellví Mata, professor universitari i investigador a la UAB.|||Trayectoria académica de Jordi Castellví Mata, profesor universitario e investigador en la UAB.|||Academic background of Jordi Castellví Mata, university lecturer and researcher at UAB.|||Parcours académique de Jordi Castellví Mata, enseignant-chercheur à l’UAB.
Professor universitari i investigador. Treballo perquè la didàctica de les ciències socials contribueixi a una educació més crítica i democràtica.|||Profesor universitario e investigador. Trabajo para que la didáctica de las ciencias sociales contribuya a una educación más crítica y democrática.|||University lecturer and researcher. I work to make social studies education more critical and democratic.|||Enseignant-chercheur à l’université. Je travaille pour que la didactique des sciences sociales contribue à une éducation plus critique et démocratique.
La meva trajectòria|||Mi trayectoria|||My background|||Mon parcours
Investigar, ensenyar|||Investigar, enseñar|||Research, teach|||Chercher, enseigner
i compartir.|||y compartir.|||and share.|||et partager.
Soc professor de la Universitat Autònoma de Barcelona, on participo en la formació inicial del professorat i en recerques sobre ciutadania, pensament crític i educació democràtica. Soc doctor en Educació per la UAB (2019), amb menció internacional, i vaig rebre el Premi Extraordinari de Doctorat.|||Soy profesor en la Universidad Autónoma de Barcelona, donde participo en la formación inicial del profesorado y en investigaciones sobre ciudadanía, pensamiento crítico y educación democrática. Soy doctor en Educación por la UAB (2019), con mención internacional, y recibí el Premio Extraordinario de Doctorado.|||I teach at the Autonomous University of Barcelona, contributing to initial teacher education and research on citizenship, critical thinking and democratic education. I earned my PhD in Education at UAB (2019), with international distinction, and received the Extraordinary Doctoral Award.|||J’enseigne à l’Université autonome de Barcelone, où je participe à la formation initiale des enseignants et à des recherches sur la citoyenneté, la pensée critique et l’éducation démocratique. Titulaire d’un doctorat en éducation de l’UAB (2019), avec mention internationale, j’ai reçu le prix extraordinaire de doctorat.
La meva recerca s’ha centrat especialment en la literacitat crítica digital, els discursos d’odi, les qüestions socialment controvertides i la participació democràtica. M'interessa fer dialogar el coneixement acadèmic amb les preguntes reals que apareixen a les aules.|||Mi investigación se ha centrado especialmente en la literacidad crítica digital, los discursos de odio, las cuestiones socialmente controvertidas y la participación democrática. Me interesa poner en diálogo el conocimiento académico con las preguntas reales que surgen en las aulas.|||My research has particularly focused on critical digital literacy, hate speech, socially controversial issues and democratic participation. I aim to connect academic knowledge with the real questions that arise in classrooms.|||Mes recherches portent notamment sur la littératie numérique critique, les discours de haine, les questions socialement controversées et la participation démocratique. Je cherche à faire dialoguer les savoirs universitaires avec les questions qui émergent réellement en classe.
He fet una estada de recerca a la University of British Columbia i participo en iniciatives editorials, projectes de recerca i activitats de formació per a docents.|||He realizado una estancia de investigación en la University of British Columbia y participo en iniciativas editoriales, proyectos de investigación y actividades de formación docente.|||I completed a research stay at the University of British Columbia and take part in publishing initiatives, research projects and teacher development activities.|||J’ai effectué un séjour de recherche à l’University of British Columbia et je participe à des initiatives éditoriales, des projets de recherche et des formations pour enseignants.
Perfil personal a la UAB ↗|||Perfil personal en la UAB ↗|||Personal profile at UAB ↗|||Profil personnel à l’UAB ↗
Doctor internacional en Educació|||Doctor internacional en Educación|||International PhD in Education|||Docteur en éducation avec mention internationale
Universitat Autònoma de Barcelona|||Universidad Autónoma de Barcelona|||Autonomous University of Barcelona|||Université autonome de Barcelone
Premi Extraordinari de Doctorat|||Premio Extraordinario de Doctorado|||Extraordinary Doctoral Award|||Prix extraordinaire de doctorat
Programa de Doctorat en Educació · UAB|||Programa de Doctorado en Educación · UAB|||PhD Programme in Education · UAB|||Programme de doctorat en éducation · UAB
Coordinació d'unitat departamental|||Coordinación de unidad departamental|||Departmental unit coordination|||Coordination d’une unité départementale
Didàctica de les Ciències Socials · UAB|||Didáctica de las Ciencias Sociales · UAB|||Social Studies Education · UAB|||Didactique des sciences sociales · UAB
Investigació en educació i ciutadania|||Investigación en educación y ciudadanía|||Research in education and citizenship|||Recherche en éducation et citoyenneté
Perfils acadèmics i xarxes|||Perfiles académicos y redes|||Academic profiles and networks|||Profils académiques et réseaux
Seguim en contacte.|||Sigamos en contacto.|||Stay in touch.|||Restons en contact.
Portal de Recerca UAB|||Portal de Investigación UAB|||UAB Research Portal|||Portail de recherche UAB
Recerca i projectes|||Investigación y proyectos|||Research and projects|||Recherche et projets
Publicacions i citacions|||Publicaciones y citas|||Publications and citations|||Publications et citations
Xarxa de recerca|||Red de investigación|||Research network|||Réseau de recherche
Divulgació i conversa|||Divulgación y conversación|||Outreach and conversation|||Vulgarisation et échanges
Identificador acadèmic|||Identificador académico|||Researcher identifier|||Identifiant de chercheur
Grup de recerca|||Grupo de investigación|||Research group|||Groupe de recherche
`),
  ...block(String.raw`
Espai acadèmic de Jordi Castellví Mata: pensament crític, educació democràtica, publicacions, projectes i divulgació.|||Espacio académico de Jordi Castellví Mata: pensamiento crítico, educación democrática, publicaciones, proyectos y divulgación.|||Jordi Castellví Mata's academic website: critical thinking, democratic education, publications, projects and outreach.|||Site académique de Jordi Castellví Mata : pensée critique, éducation démocratique, publications, projets et diffusion des connaissances.
Universitat Autònoma de Barcelona (UAB)|||Universidad Autónoma de Barcelona (UAB)|||Autonomous University of Barcelona (UAB)|||Université autonome de Barcelone (UAB)
Universitat de Barcelona (UB)|||Universidad de Barcelona (UB)|||University of Barcelona (UB)|||Université de Barcelone (UB)
Universitat de Las Palmas de Gran Canaria (ULPGC)|||Universidad de Las Palmas de Gran Canaria (ULPGC)|||University of Las Palmas de Gran Canaria (ULPGC)|||Université de Las Palmas de Gran Canaria (ULPGC)
Llibres de text Barcanova|||Libros de texto Barcanova|||Barcanova textbooks|||Manuels scolaires Barcanova
Galeria dels vuit llibres de Barcanova|||Galería de ocho libros de Barcanova|||Gallery of eight Barcanova textbooks|||Galerie de huit manuels Barcanova
Galeria dels cinc projectes de Jesuïtes Educació|||Galería de cinco proyectos de Jesuïtes Educació|||Gallery of five Jesuïtes Educació projects|||Galerie de cinq projets de Jesuïtes Educació
Llibre anterior|||Libro anterior|||Previous book|||Livre précédent
Llibre següent|||Libro siguiente|||Next book|||Livre suivant
Projecte anterior|||Proyecto anterior|||Previous project|||Projet précédent
Projecte següent|||Proyecto siguiente|||Next project|||Projet suivant
Projectes de Jesuïtes Educació|||Proyectos de Jesuïtes Educació|||Jesuïtes Educació projects|||Projets de Jesuïtes Educació
carrusel|||carrusel|||carousel|||carrousel
Materials curriculars i projectes educatius|||Materiales curriculares y proyectos educativos|||Curricular resources and educational projects|||Ressources curriculaires et projets éducatifs
Navegació principal|||Navegación principal|||Main navigation|||Navigation principale
Navegació mòbil|||Navegación móvil|||Mobile navigation|||Navigation mobile
Inici de critical-think.ing|||Inicio de critical-think.ing|||critical-think.ing homepage|||Accueil de critical-think.ing
Canviar l’idioma|||Cambiar el idioma|||Change language|||Changer de langue
Idiomes disponibles|||Idiomas disponibles|||Available languages|||Langues disponibles
Obrir el menú|||Abrir el menú|||Open menu|||Ouvrir le menu
Perfils acadèmics i xarxes socials|||Perfiles académicos y redes sociales|||Academic profiles and social networks|||Profils académiques et réseaux sociaux
Quatre dimensions de la literacitat crítica|||Cuatro dimensiones de la literacidad crítica|||Four dimensions of critical literacy|||Quatre dimensions de la littératie critique
Retrat de Jordi Castellví Mata|||Retrato de Jordi Castellví Mata|||Portrait of Jordi Castellví Mata|||Portrait de Jordi Castellví Mata
Entitats finançadores del projecte PID2024-160676OB-I00|||Entidades financiadoras del proyecto PID2024-160676OB-I00|||Funding organisations of project PID2024-160676OB-I00|||Organismes financeurs du projet PID2024-160676OB-I00
Logotips del Ministeri de Ciència, Innovació i Universitats, de la Unió Europea i de l’Agència Estatal d’Investigació|||Logotipos del Ministerio de Ciencia, Innovación y Universidades, la Unión Europea y la Agencia Estatal de Investigación|||Logos of the Ministry of Science, Innovation and Universities, the European Union and the State Research Agency|||Logos du ministère de la Science, de l’Innovation et des Universités, de l’Union européenne et de l’Agence nationale de la recherche espagnole
Portada de la revista Discover Education, de Springer Nature|||Portada de la revista Discover Education, de Springer Nature|||Cover of Discover Education by Springer Nature|||Couverture de la revue Discover Education de Springer Nature
Portada de la revista Discover Education (Springer Nature)|||Portada de la revista Discover Education (Springer Nature)|||Cover of Discover Education (Springer Nature)|||Couverture de Discover Education (Springer Nature)
Imatge original de les Jornades: la Terra damunt una columna i un grup de persones|||Imagen original de las Jornadas: la Tierra sobre una columna y un grupo de personas|||Original conference image: the Earth above a column and a group of people|||Illustration originale des Journées : la Terre au-dessus d’une colonne et un groupe de personnes
Logotip de GREDICS, Grup de Recerca en Didàctica de les Ciències Socials|||Logotipo de GREDICS, Grupo de Investigación en Didáctica de las Ciencias Sociales|||Logo of GREDICS, the Social Studies Education Research Group|||Logo de GREDICS, Groupe de recherche en didactique des sciences sociales
Portada de la revista Enseñanza de las Ciencias Sociales, número 23(1), 2025|||Portada de la revista Enseñanza de las Ciencias Sociales, número 23(1), 2025|||Cover of Enseñanza de las Ciencias Sociales, issue 23(1), 2025|||Couverture de Enseñanza de las Ciencias Sociales, numéro 23(1), 2025
Logotip oficial de DISCO — Democratic and Inclusive School Culture in Operation|||Logotipo oficial de DISCO — Democratic and Inclusive School Culture in Operation|||Official logo of DISCO — Democratic and Inclusive School Culture in Operation|||Logo officiel de DISCO — Democratic and Inclusive School Culture in Operation
Finançament institucional del programa DISCO|||Financiación institucional del programa DISCO|||Institutional funding of the DISCO programme|||Financement institutionnel du programme DISCO
Logotips institucionals del programa conjunt de la Unió Europea i el Consell d’Europa|||Logotipos institucionales del programa conjunto de la Unión Europea y el Consejo de Europa|||Institutional logos of the joint European Union and Council of Europe programme|||Logos institutionnels du programme conjoint de l’Union européenne et du Conseil de l’Europe
Consultar la tesi doctoral en accés obert|||Consultar la tesis doctoral en acceso abierto|||Read the open-access doctoral thesis|||Consulter la thèse de doctorat en accès libre
Portada original vermella de la tesi doctoral Literacitat crítica digital en els estudis socials|||Portada original roja de la tesis doctoral Literacitat crítica digital en els estudis socials|||Original red cover of the doctoral thesis Literacitat crítica digital en els estudis socials|||Couverture rouge originale de la thèse Literacitat crítica digital en els estudis socials
Portada de la revista Íber, número 99 de 2020: Interpretar problemas y conflictos contemporáneos|||Portada de la revista Íber, número 99 de 2020: Interpretar problemas y conflictos contemporáneos|||Cover of Íber, issue 99 (2020): Interpretar problemas y conflictos contemporáneos|||Couverture de Íber, numéro 99 (2020) : Interpretar problemas y conflictos contemporáneos
Portada de la revista Íber, número 118 de 2025: Ciudadanía, redes y fake news|||Portada de la revista Íber, número 118 de 2025: Ciudadanía, redes y fake news|||Cover of Íber, issue 118 (2025): Ciudadanía, redes y fake news|||Couverture de Íber, numéro 118 (2025) : Ciudadanía, redes y fake news
Portada de la revista Íber, número 122 de 2026: La inteligencia artificial en la enseñanza de las ciencias sociales|||Portada de la revista Íber, número 122 de 2026: La inteligencia artificial en la enseñanza de las ciencias sociales|||Cover of Íber, issue 122 (2026): La inteligencia artificial en la enseñanza de las ciencias sociales|||Couverture de Íber, numéro 122 (2026) : La inteligencia artificial en la enseñanza de las ciencias sociales
Primera pàgina original de l’article publicat a Comunicació Educativa, número 37 de 2024|||Primera página original del artículo publicado en Comunicació Educativa, número 37 de 2024|||Original first page of the article published in Comunicació Educativa, issue 37 (2024)|||Première page originale de l’article publié dans Comunicació Educativa, numéro 37 (2024)
`),
  ...block(String.raw`
L’escola davant l’actualitat.|||La escuela ante la actualidad.|||Schools facing current affairs.|||L’école face à l’actualité.
Competències de Cultura Democràtica per canviar el món.|||Competencias de cultura democrática para cambiar el mundo.|||Competences for democratic culture to change the world.|||Des compétences de culture démocratique pour changer le monde.
27, 28 i 29 de gener de 2027 · Universitat Autònoma de Barcelona|||27, 28 y 29 de enero de 2027 · Universidad Autónoma de Barcelona|||27–29 January 2027 · Autonomous University of Barcelona|||27, 28 et 29 janvier 2027 · Université autonome de Barcelone
EDUCACIÓ PRIMÀRIA · 2025|||EDUCACIÓN PRIMARIA · 2025|||PRIMARY EDUCATION · 2025|||ENSEIGNEMENT PRIMAIRE · 2025
EDUCACIÓ SECUNDÀRIA · 2025|||EDUCACIÓN SECUNDARIA · 2025|||SECONDARY EDUCATION · 2025|||ENSEIGNEMENT SECONDAIRE · 2025
EXPERIMENTA · 3R DE PRIMÀRIA|||EXPERIMENTA · 3.º DE PRIMARIA|||EXPERIMENTA · YEAR 3 PRIMARY|||EXPERIMENTA · 3e ANNÉE DU PRIMAIRE
EXPERIMENTA · 4T DE PRIMÀRIA|||EXPERIMENTA · 4.º DE PRIMARIA|||EXPERIMENTA · YEAR 4 PRIMARY|||EXPERIMENTA · 4e ANNÉE DU PRIMAIRE
ENTORN · 3R DE PRIMÀRIA|||ENTORN · 3.º DE PRIMARIA|||ENTORN · YEAR 3 PRIMARY|||ENTORN · 3e ANNÉE DU PRIMAIRE
ENTORN · 4T DE PRIMÀRIA|||ENTORN · 4.º DE PRIMARIA|||ENTORN · YEAR 4 PRIMARY|||ENTORN · 4e ANNÉE DU PRIMAIRE
NÚM. 99|||NÚM. 99|||NO. 99|||N° 99
NÚM. 118|||NÚM. 118|||NO. 118|||N° 118
NÚM. 122|||NÚM. 122|||NO. 122|||N° 122
NÚM. 37|||NÚM. 37|||NO. 37|||N° 37
`),
  ...block(String.raw`
Professor universitari i investigador en didàctica de les ciències socials|||Profesor universitario e investigador en didáctica de las ciencias sociales|||University lecturer and researcher in social studies education|||Enseignant-chercheur en didactique des sciences sociales
Jordi Castellví Mata · Universitat Autònoma de Barcelona · Escola Montserrat Solà · GREDICS|||Jordi Castellví Mata · Universidad Autónoma de Barcelona · Escola Montserrat Solà · GREDICS|||Jordi Castellví Mata · Autonomous University of Barcelona · Escola Montserrat Solà · GREDICS|||Jordi Castellví Mata · Université autonome de Barcelone · Escola Montserrat Solà · GREDICS
Font: Lewison, M., Flint, A. S. i Van Sluys, K. (2002). «Taking on Critical Literacy: The Journey of Newcomers and Novices».|||Fuente: Lewison, M., Flint, A. S. y Van Sluys, K. (2002). «Taking on Critical Literacy: The Journey of Newcomers and Novices».|||Source: Lewison, M., Flint, A. S. and Van Sluys, K. (2002). “Taking on Critical Literacy: The Journey of Newcomers and Novices”.|||Source : Lewison, M., Flint, A. S. et Van Sluys, K. (2002). « Taking on Critical Literacy: The Journey of Newcomers and Novices ».
`),

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
  ['Veure la fitxa de ', ['Ver la ficha de ','View details for ','Voir la fiche de ']],
  ['Font: ', ['Fuente: ','Source: ','Source : ']]
];
