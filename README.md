# critical-think.ing

Web acadèmica de Jordi Castellví Mata, construïda amb Astro i publicada a GitHub Pages al domini propi **https://critical-think.ing/**.

## Desenvolupament

- `npm install`
- `npm run dev`
- `npm run build` — genera les versions CA/ES/EN/FR i verifica metadades SEO, URL canòniques, hreflang, dades estructurades, enllaços i sitemaps.

## Indexació i SEO

- `public/robots.txt` apunta a `public/sitemap-index.xml`, que referencia el `sitemap.xml` generat automàticament.
- `scripts/seo.mjs` conté títols i descripcions de cada secció en quatre idiomes.
- `scripts/localize.mjs` genera URL canòniques, `hreflang`, metadades socials i el sitemap multilingüe.
- `src/layouts/Base.astro` publica dades estructurades de la identitat acadèmica.
- `scripts/check-seo.mjs` valida aquests elements a cada compilació.

La publicació a GitHub Pages es fa amb `.github/workflows/deploy.yml` quan es fusionen canvis a `main`.
