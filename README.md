# Papirfly FrontEnd Assignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Local server

This app needs Local server (json-server) running for all features. Run `npm run server` for server start. Local server runs on `http://localhost:3000/`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Assignment

https://app.zeplin.io/project/5abcb99f6ae5e3121e2eec13/screen/601bf9f8a886787d02d3fffe

### Hlavní požadavky

- Nakódovat komponentu dle designu 1:1, ted dlaždice, které jsou jako linky a
  nastavení, které je skryto a otevírá se jako dialogové okno (modal)
- [Check] Použít jakýkoliv preprocesor pro kompilaci stylů z SASS/SCSS do CSS
- [Check] Responsivní chování dlaždic (ne nastavení – modal) v rozmezí 320px až 1920px
  šířky obrazovky
- Po kliknutí na „Update“ v nastavení odeslat aktuálně nastavená data pomocí POST
  requestu (může být i na neexistující adresu, není potřeba response).

### Volitelný úkol

- [Check] Při načtení stránky dynamicky načíst dlaždice např. dle JSONu a GET requestu na
  něj
- Reflektovat aspoň některá nastavení ve view ( v dlaždicích ), jako třeba text, link,
  title, subtitle, barvu pozadí, atd…
- Responsivní chování modalu nastavení
- Jednoduché animace (reveal, on hover, text, atd..)
- Drag and drop přesouvání pozice dlaždic v nastavení
