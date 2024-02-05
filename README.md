# Papirfly FrontEnd Assignment

Simple adaptive Angular app for Papirfly FrontEnd Assignment.

<br/>

<picture>
<source media="(prefers-color-scheme: light)" srcset="https://brand.papirfly.com/fr/gallery/34433/images/lowres/24ced107-4a60-45ef-8be5-c14cfe133908.png">
<source media="(prefers-color-scheme: dark)" srcset="https://brand.papirfly.com/fr/gallery/34433/images/lowres/00a0679f-ece6-41a0-8039-be5ec0fe6700.png">
<img alt="Shows the papirfly logo" src="https://brand.papirfly.com/fr/gallery/34433/images/lowres/24ced107-4a60-45ef-8be5-c14cfe133908.png" height=100>
</picture>

<br/>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.

## Setup

0. [Node.JS and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) must be installed. Version 18.13 or later.
1. Run `npm i -D concurrently` for Concurrently package devDependecies.
2. Run `npm run start` for a local DB and dev server.
3. App will automaticly open in new browser window.

### Local DB server

This app needs Local DB server (json-server) running for all features. Local server runs on `http://localhost:3000/`. Server can be run separately using `npm run server`.

### Development server

Dev server can be run separately using `ng serve`. Navigate to `http://localhost:4200/`.

## Features

- Responsive Tiles grid view and modal Settings panel.
- Tiles & Settings connected to the local database.
- Tiles build with custom HTML/SCSS.
- Settings build with Angular Material library.
- Custom color theme for better reusability of components.
- Simple partial user input form validation.

## Assignment

### UI design

https://app.zeplin.io/project/5abcb99f6ae5e3121e2eec13/screen/601bf9f8a886787d02d3fffe

### Hlavní požadavky

- [<span style="color:limegreen">Check</span>] Nakódovat komponentu dle designu 1:1, ted dlaždice, které jsou jako linky a
  nastavení, které je skryto a otevírá se jako dialogové okno (modal)
- [<span style="color:limegreen">Check</span>] Použít jakýkoliv preprocesor pro kompilaci stylů z SASS/SCSS do CSS
- [<span style="color:limegreen">Check</span>] Responsivní chování dlaždic (ne nastavení – modal) v rozmezí 320px až 1920px
  šířky obrazovky
- [<span style="color:limegreen">Check</span>] Po kliknutí na „Update“ v nastavení odeslat aktuálně nastavená data pomocí POST
  requestu (může být i na neexistující adresu, není potřeba response).

### Volitelný úkol

- [<span style="color:limegreen">Check</span>] Při načtení stránky dynamicky načíst dlaždice např. dle JSONu a GET requestu na
  něj
- [<span style="color:limegreen">Check</span>] Reflektovat aspoň některá nastavení ve view ( v dlaždicích ), jako třeba text, link,
  title, subtitle, barvu pozadí, atd…
- [<span style="color:limegreen">Check</span>] Responsivní chování modalu nastavení
- [<span style="color:limegreen">Check</span>] Jednoduché animace (reveal, on hover, text, atd..)
- [<span style="color:limegreen">Check</span>] Drag and drop přesouvání pozice dlaždic v nastavení

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
