# PDF Letterhead Website

## Over

Dit is een jekyll website. Op de project website kun je veel meer lezen
over Jekyll.

Alles staat op een pagina en elke sectie heeft een eigen tekst bestand.

## Gebruik

### Site Instellingen

Alle globale site instellingen zoals titel of copyright tekst staan in ```_config.yml```.

Alle teksten staan in ```_posts/```. De bestanden moeten aan een paar
zaken voldoen:

### Teksten

- begin met datum-formaat om volgorde te bepalen (datum wordt verder
  genegeerd
- geen spaties gebruiken maar liggende streepjes
- eindigen met .md

Een tekst-bestand ziet er dus zo uit: ```2000-01-03-dit-is-een-voorbeeld.md```

### Afbeeldingen

Alles afbeeldingen staan in de map ```img```

## Publiceren

Publiceren is zo eenvoudig als committen in git. Werk je direct in
gitlab dan gebeurd dit ook zonder verder omkijken anders gebruik je de
commando's

```
git add (bij nieuwe bestanden)
git commit (met evt opties zoals -a en -m)
git push
```