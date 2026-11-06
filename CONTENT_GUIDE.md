# Guia d'edició de critical-think.ing

Aquesta web utilitza Astro i es publica gratuïtament amb GitHub Pages. La portada funciona com una sola pàgina contínua amb navegació per ancoratges. Les subpàgines segueixen disponibles com a consulta ampliada. Els colors actuals es mantenen expressament fins a rebre referències visuals de l'autor. Les pàgines són:
- `src/pages/index.astro` — portada contínua amb línies de recerca, llibres i articles, projectes, pràctica, docència, GREDICS i revista, laboratori, trajectòria i contacte
- `src/pages/publicacions/index.astro` — llibres destacats i articles en revistes indexades
- `src/pages/projectes/index.astro` — recerca, edició i formació
- `src/pages/laboratori/index.astro` — recursos sobre pensament crític
- `src/pages/sobre-mi/index.astro` — biografia i trajectòria
- `src/layouts/Base.astro` — menú, capçalera, estils comuns i peu de pàgina
- `src/data/teachingVideos.ts` — quatre vídeos docents o entrevistes aportats per l'autor
- `src/components/TeachingVideoGallery.astro` — miniatures i reproductor YouTube activat amb clic

## Contingut estructurat
Les dades editables viuen a `src/data/site.ts`. Afegir una publicació implica afegir un objecte a `publications` amb `year`, `authors`, `title`, `venue`, `type`, `indexing` i `url` (DOI verificat). El conjunt principal només inclou articles de revistes indexades a Scopus o Web of Science. Les entrevistes i notes editorials no apareixen a la secció pública de publicacions. El criteri d'indexació és de revista, no d'indexació individual de cada article.

## Normes per a agents d'IA (Instinct, ChatGPT o altres)
1. No inventis publicacions, premis, càrrecs, cursos, resultats ni projectes; verifica fonts institucionals o demana confirmació.
2. Fes cada actualització en una branca pròpia i crea una pull request per revisar-la. No publiquis canvis no confirmats com si fossin definitius.
3. Conserva els colors actuals mentre l'autor busca referències visuals noves. Conserva l'accessibilitat i respecta `prefers-reduced-motion` en animacions. Executa `npm run build` abans de proposar canvis.
4. Evita dades personals no professionals. El contacte públic és `jordi.castellvi.mata@uab.cat`.
5. La web és en català de moment; no mostris selectors d'idioma sense pàgines traduïdes.
6. Mantén els enllaços DOI de les publicacions actualitzats i verifica indexació de revista. Evita afegir enllaços de marcador de posició. Mantén també la navegació contínua amb enllaços d'ancoratge.
7. Els continguts del Laboratori són propostes en desenvolupament fins que l'autor els validi.

## Desenvolupament
`npm install`, `npm run dev`, `npm run build`.

## Identitat visual i jornades
- `public/images/gredics-logo.svg`: vectorització del logotip aportat per l'autor (negres i vermell). No utilitzar el monograma provisional.
- `src/data/site.ts` (`jornades2027`): dades de les XXIII Jornades extretes de la Segona Circular de 29/10/2026; enllaç oficial: https://webs.uab.cat/jornadesdcs/.
- A la portada, mantenir separades «Recerca» (projectes i col·lecció temàtica) i «...que connecta amb la pràctica» (MOOC, Jornades). Conservar colors fins a noves indicacions.

## Vídeos docents
Els vídeos de YouTube s'han de mantenir amb el títol i l'enllaç original verificats. El reproductor utilitza youtube-nocookie i no s'activa fins que la persona visitant clica la miniatura. La secció `#docencia` forma part de la portada, sense requerir una pàgina nova. No atribuir continguts, llocs o dates no confirmats als vídeos.

## Llibres destacats i navegació
- `src/data/featuredBooks.ts` inclou dos llibres verificats: `Enseñar el conflicto` (Dykinson, 2024; Jordi és coeditor) i `¿Cómo investigar en Didáctica de las Ciencias Sociales?` (Octaedro, 2023; Jordi és coautor de tres capítols).
- `src/components/FeaturedBooks.astro` és la presentació destacada, visible tant a la portada com a Publicacions. La portada d'Octaedro usa una imatge editorial identificada; el llibre de Dykinson té una composició tipogràfica pròpia que no s'ha de confondre amb la portada oficial.
- A `src/layouts/Base.astro`, l'ordre de navegació ha de reproduir l'ordre vertical de les seccions de la portada: línies de recerca, publicacions, projectes, pràctica, docència, GREDICS i revista, laboratori i sobre mi. El menú compacte es mostra quan les vuit entrades no caben.
