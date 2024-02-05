# Papirfly FrontEnd Assignment

Simple adaptive Angular app for Papirfly FrontEnd Assignment.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.

## Setup

0. [Node.JS and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) must be installed. Version 8.5.0 or later.
1. Run `npm run start` for a local DB and dev server.
2. App will automaticly open in new broswer window.

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

- [Check] Nakódovat komponentu dle designu 1:1, ted dlaždice, které jsou jako linky a
  nastavení, které je skryto a otevírá se jako dialogové okno (modal)
- [Check] Použít jakýkoliv preprocesor pro kompilaci stylů z SASS/SCSS do CSS
- [Check] Responsivní chování dlaždic (ne nastavení – modal) v rozmezí 320px až 1920px
  šířky obrazovky
- [Check] Po kliknutí na „Update“ v nastavení odeslat aktuálně nastavená data pomocí POST
  requestu (může být i na neexistující adresu, není potřeba response).

### Volitelný úkol

- [Check] Při načtení stránky dynamicky načíst dlaždice např. dle JSONu a GET requestu na
  něj
- [Check] Reflektovat aspoň některá nastavení ve view ( v dlaždicích ), jako třeba text, link,
  title, subtitle, barvu pozadí, atd…
- [Check] Responsivní chování modalu nastavení
- [Check] Jednoduché animace (reveal, on hover, text, atd..)
- [Check] Drag and drop přesouvání pozice dlaždic v nastavení

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
