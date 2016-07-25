///<reference path="../typings/index.d.ts"/>
import {bootstrap}    from '@angular/platform-browser-dynamic'
import {AppComponent} from './app.component'
import {APP_ROUTER_PROVIDERS} from './app.routes';
import { Location, LocationStrategy, HashLocationStrategy} from '@angular/common';
import {disableDeprecatedForms, provideForms} from '@angular/forms';


bootstrap(AppComponent, 
    [APP_ROUTER_PROVIDERS, 
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    disableDeprecatedForms(),
    provideForms()]);