# BagubitsAngularBulmaLibrary

* A simple angular `directive` to be used with Angular and Bulma.

https://medium.com/@nikolasleblanc/building-an-angular-4-component-library-with-the-angular-cli-and-ng-packagr-53b2ade0701e

https://stackoverflow.com/questions/58155525/browserslisterror-unknown-version-67-of-android

https://medium.com/@esanjiv/complete-beginner-guide-to-publish-an-angular-library-to-npm-d42343801660

ng generate module modules/NAME
ng generate component modules/NAME

work :)

public_api.ts -> export * from './src/app/modules/NAME/NAME.module';

change/update package.json version

npm run packagr

cd /dist/

npm pack

cd .. (root of the project)

npm publish dist

----



npm install bulma --save
npm install bagubits-angular-bulma-library --save

index.html -> <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>

style.scss -> @import '../node_modules/bulma/bulma.sass';

app.module.ts -> 
    - import { InputModule } from 'bagubits-angular-bulma-library';
    - imports: [ InputModule ],

<bab-input type="text" iconleft="envelope" placeholder="test" size="small" [disabled]="false" [loading]="false"
    [(ngModel)]="test1" name="test1"></bab-input>


