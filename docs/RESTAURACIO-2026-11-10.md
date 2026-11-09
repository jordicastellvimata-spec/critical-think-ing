# Punt de restauració abans de la reestructuració (10/11/2026)

## Còpia íntegra preservada

- Repositori: `jordicastellvimata-spec/critical-think-ing`
- Branca immutable de referència (no modificar): `backup/pre-restructuracio-2026-11-10`
- Commit exacte: `d9ad25bd103a6f24e8c960c57302615ff81a1e3a`
- Enllaç: https://github.com/jordicastellvimata-spec/critical-think-ing/tree/backup/pre-restructuracio-2026-11-10

La branca conté tots els arxius, recursos, traduccions, estils i configuracions de la web tal com eren abans de la reorganització temàtica i tipogràfica. No és una captura de pantalla ni una exportació parcial: és el repositori complet en aquell estat.

## Com recuperar exactament aquella versió sense reescriure l'historial

Des d'una còpia local del repositori, amb permisos per crear branques i obrir una sol·licitud de canvis:

```sh
git fetch origin
git switch -c restaurar-versio-anterior origin/main
git restore --source=origin/backup/pre-restructuracio-2026-11-10 --staged --worktree .
git commit -m "Restore site to the pre-restructuring backup"
git push -u origin restaurar-versio-anterior
```

Obriu una pull request de `restaurar-versio-anterior` cap a `main`, valideu la compilació i fusioneu-la. El desplegament de GitHub Pages actualitzarà la web publicada. Així s'evita fer `force push` sobre `main` i es manté la traçabilitat.

> Atenció: la restauració completa també desfaria altres canvis que s'haguessin fet **després** de la reestructuració. Si només es volen recuperar determinades seccions o estils, és millor restaurar els fitxers afectats des del commit de la còpia i revisar-ne les diferències.

## Abast de la nova proposta

Reorganitza els continguts sota cinc àmbits principals (Recerca i projectes, Publicacions, Docència i transferència, Laboratori i Sobre mi), simplifica el menú, separa millor l'activitat editorial, distribueix la informació entre portada i pàgines de detall i normalitza la jerarquia visual d'encapçalaments. Manté les quatre llengües i els recursos didàctics.

La prova i la publicació del nou disseny es documenten a la pull request #57.
