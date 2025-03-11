# AdminDashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

# Summary 

Everything was split with components for ease of work and integration with future development.

Worked with AI to make up for boilerplace code, and boring css styling. No major challenges encountered.

Error handling: we are going to display an error instead of the table in case we have an error on the API, and only display the table on success. Export function will give you an error if you try to export before the data loads.

# Versions

This project uses angular v15.2<br/>
This project uses node v22.9.0<br/><br/>

Angular CLI: 15.2.11<br/>
Node: 22.9.0 (Unsupported)<br/>
Package Manager: npm 10.8.3<br/>
OS: darwin arm64<br/><br/>

Angular: 15.2.10<br/>
... animations, common, compiler, compiler-cli, core, forms<br/>
... platform-browser, platform-browser-dynamic, router<br/><br/>


@angular-devkit/architect       0.1502.11<br/>
@angular-devkit/build-angular   15.2.11<br/>
@angular-devkit/core            15.2.11<br/>
@angular-devkit/schematics      15.2.11<br/>
@angular/cli                    15.2.11<br/>
@schematics/angular             15.2.11<br/>
rxjs                            7.8.2<br/>
typescript                      4.9.5<br/>



# Libraries used
 
-font awesome for some icons<br/>
-bootstrap for css<br/>
-file saver for export csv<br/>
-angular default router<br/>

# Implemented extras aside from the functionality

-implemented sorting<br/>
-implemented export via csv of the data<br/>
-implemented data retrieval as a service<br/>

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
