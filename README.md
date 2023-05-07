# BodyWatch

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Anforderung

Realisieren Sie ein MiniProjekt: BodyWatch, d.h.
erweitern Sie das Konzept des BMICalculators mit folgenden Anforderungen:

    Person:  lastname, firstname
    Messurement: person, heartrate,bloodpressure,temperature, date

wird eine neue Messung erstellt, soll automatisiert je nach Messwerten eine entsprechende Warnung generiert werden,

    Warning: Measurement, Art, duration

## Projekt Hinweise:

### Projektschritte beachten:

    Analyse // Anforderungen beschreiben  , USE-Case Diagramm
    Modellierung // Klassendiagramm
    Realisierung // PAP 
    QM: Testen //
    Reflexion // Vorgehensweise, Erweiterungen
    Testen bzw. QM Abnahme bzgl. der Anforderungen durch eine Partnerin bzw. Partner

    Bewertung 2Pkt / Schritt

## Abgabe

Dokumentation als pdf

# Meine Implementierung

## Konzept

- Angular frontend
  - dexie local db
  - reactive subscriptions
  - perparation for REST API
- Spring backend
  - RESTful service
  - following endpoints:
    - POST `api/user` register user
    - PUT `api/user` update user
    - PUT `api/measurements` new measurement
    - GET  `api/user` get user
    - GET `api/measurements?user={user}` 
    - GET `api/measurments?fromdate={date}`
    - GET `api/warnings?user={userid}&fromdate={date}`

# Angular's default text

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you
change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also
use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
 
## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a
package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out
the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
