# Idiomes i traduccions

El lloc té quatre versions estàtiques: català (`/`, llengua principal), castellà (`/es/`), anglès (`/en/`) i francès (`/fr/`). Les pàgines de l'arxiu conserven els slugs `/projectes/`, `/publicacions/`, `/laboratori/` i `/sobre-mi/` en les quatre llengües, per evitar enllaços trencats.

## Funcionament

- La versió d'origen es redacta en català a `src/pages/`, `src/components/` i `src/data/`.
- `src/i18n/catalog.mjs` recull les equivalències de cada text editorial català en l'ordre **català ||| castellà ||| anglès ||| francès**.
- `npm run build` executa Astro i després `scripts/localize.mjs`, que genera les quatre rutes, tradueix el contingut i els atributs accessibles, actualitza `html[lang]`, `canonical`, `hreflang` i el sitemap.
- El selector d'idioma es defineix a `src/layouts/Base.astro`. Manté el mateix apartat i el fragment `#...` en canviar de llengua.
- L'script de construcció comprova que totes les rutes, els ancoratges, els documents locals i els enllaços externs es conservin. Si hi ha algun enllaç intern trencat, el build falla.

## Quan s'afegeix contingut

Cal incloure al catàleg cadascuna de les expressions catalanes noves que s'hagin de traduir. La compilació imprimeix un resum de fragments que no tenen traducció explícita i s'han de revisar.

Els títols originals de publicacions, llibres i vídeos poden continuar en la llengua en què es van publicar per conservar la referència bibliogràfica. La seva descripció, els controls, els textos de context i les metadades sí que s'han de traduir. Conserveu sempre les adreces institucionals, DOI, ISBN i identificadors existents.

Eviteu crear versions manuals independents de l'HTML, perquè s'han de mantenir sincronitzades amb els quatre idiomes.
