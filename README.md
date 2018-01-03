# FirebaseLogin

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Some points to check

1 After installing the above dependencies, install ng-bootstrap via:
npm install --save @ng-bootstrap/ng-bootstrap

Once installed you need to import our main module.

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [NgbModule.forRoot(), ...],
  bootstrap: [AppComponent]
})
export class AppModule {
}

Look details:
https://ng-bootstrap.github.io/#/home


2 File styles.css add
@import 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css';

More details see:
https://v4-alpha.getbootstrap.com/getting-started/introduction/#quick-start


3 Create project and change information id/secrect key about Firebase in this project.
https://console.firebase.google.com/


4 Create project and change id/secrect key about Facebook in your Firebase account.
https://developers.facebook.com/
