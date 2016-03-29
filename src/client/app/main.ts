/// <reference path="../../../node_modules/angular2/typings/browser.d.ts" />
import { bootstrap } from 'angular2/platform/browser';
import { bind, provide } from 'angular2/core';
import { FORM_PROVIDERS } from "angular2/common";
import {APP_BASE_HREF, ROUTER_PROVIDERS, ROUTER_BINDINGS, LocationStrategy, PathLocationStrategy } from 'angular2/router';
import { HTTP_PROVIDERS, Http } from 'angular2/http';
import {ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/common_dom';
import {AuthHttp, AuthConfig} from 'angular2-jwt/angular2-jwt';
import { AppComponent } from './app';
import {MATERIAL_PROVIDERS} from "ng2-material/all";

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    ROUTER_BINDINGS,
    FORM_PROVIDERS,
    HTTP_PROVIDERS,
    ELEMENT_PROBE_PROVIDERS,
    MATERIAL_PROVIDERS,
    provide(AuthHttp, {
      useFactory: (http) => {
        return new AuthHttp(new AuthConfig(), http);
      },
      deps: [Http]
    }),
     provide(APP_BASE_HREF, {useValue : '/' }),
    bind(LocationStrategy).toClass(PathLocationStrategy)
]).then(
    success => console.log('AppComponent bootstrapped!'),
    error => console.log('AppComponent NOT bootstrapped!', error)
);
