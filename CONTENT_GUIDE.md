# Guia d'edició de critical-think.ing

Aquesta web utilitza Astro i es publica gratuïtament amb GitHub Pages. Les pàgines són:
- `src/pages/index.astro` — portada
- `src/pages/publicacions/index.astro` — publicacions seleccionades
- `src/pages/projectes/index.astro` — recerca, edició i formació
- `src/pages/laboratori/index.astro` — recursos sobre pensament crític
- `src/pages/sobre-mi/index.astro` — biografia i trajectòria
- `src/layouts/Base.astro` — menú, capçalera, estils comuns i peu de pàgina

## Contingut estructurat
Les dades editables viuen a `src/data/site.ts`. Afegir una publicació implica afegir un objecte a `publications` amb `year`, `authors`, `title`, `venue`, `type` i `url` (DOI verificat).

## Normes per a agents d'IA (Instinct, ChatGPT o altres)
1. No inventis publicacions, premis, càrrecs, cursos, resultats ni projectes; verifica fonts institucionals o demana confirmació.
2. Fes cada actualització en una branca pròpia i crea una pull request per revisar-la. No publiquis canvis no confirmats com si fossin definitius.
3. Conserva el disseny i l'accessibilitat. Executa `npm run build` abans de proposar canvis.
4. Evita dades personals no professionals. El contacte públic és `jordi.castellvi.mata@uab.cat`.
5. La web és en català de moment; no mostris selectors d'idioma sense pàgines traduïdes.
6. Mantén els enllaços de publicacions actualitzats i evita afegir enllaços de marcador de posició.
7. Els continguts del Laboratori són propostes en desenvolupament fins que l'autor els validi.

## Desenvolupament
`npm install`, `npm run dev`, `npm run build`.
