# Source du CV

`cv.html` est la source de `assets/CV-Lucas-Aguetai.pdf`. Pour modifier le CV,
on édite le HTML puis on régénère le PDF — on ne touche jamais au PDF directement.

## Régénérer le PDF

```bash
npm install playwright
node cv-src/build.js
```

Le script imprime `cv.html` en A4 via Chromium et écrase `assets/CV-Lucas-Aguetai.pdf`.

## Notes de mise en page

- Le gabarit est calé en pixels CSS (A4 = 793,7 px de large à 96 dpi).
- La bordure de l'en-tête et le filet du pied de page traversent toute la page :
  c'est le rôle des marges négatives sur `.header` et `.footer`.
- La colonne latérale déborde volontairement de 19 px à droite (`margin-right`),
  sinon « Reverse engineering · Forensics » passe à la ligne.
- Police sans : Helvetica Neue (système). Police mono : JetBrains Mono (installée
  localement ; sinon l'ajouter ou charger depuis Google Fonts).
- `photo.jpg` est la photo d'origine recadrée (736×802, soit ~690 dpi à la taille
  d'affichage). Le recadrage reproduit celui du tout premier CV — il a été retrouvé
  par corrélation avec la vignette de l'ancien PDF (crop à 92 % de la largeur).
