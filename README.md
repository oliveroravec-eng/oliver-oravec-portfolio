# Oliver Oravec · Portfólio

Online portfólio na predmet Marketing (Lýceum C. S. Lewisa, 2026/27). Statická stránka v HTML, CSS a JavaScripte, spúšťaná cez Vite.

## Spustenie

```sh
npm install
npm run dev
```

Zostavenie do priečinka `dist`:

```sh
npm run build
```

## Štruktúra

- `index.html`: celá stránka vrátane detailov projektov.
- `public/styles.css`: dizajn.
- `public/app.js`: texty v slovenčine a angličtine, zoznam projektov a správanie stránky.
- `public/assets/`: obrázky a videá projektov.

Texty sa upravujú v objekte `PORTFOLIO` v `public/app.js`. LinkedIn sa zobrazí, keď sa do `PORTFOLIO.linkedin` doplní adresa profilu.
