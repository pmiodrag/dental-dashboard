/// <reference path="../../../node_modules/angular2/typings/browser.d.ts" />

import {bootstrap}    from '@angular/platform-browser-dynamic';
import { bind, provide } from '@angular/core';
import { FORM_PROVIDERS, APP_BASE_HREF, LocationStrategy, HashLocationStrategy, PathLocationStrategy } from "@angular/common";
import { ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS, Http } from '@angular/http';
import {ELEMENT_PROBE_PROVIDERS} from '@angular/platform-browser';
import {AuthHttp, AuthConfig} from 'angular2-jwt/angular2-jwt';
import { AppComponent } from './app';
import {MATERIAL_PROVIDERS} from "ng2-material/index";
import { NotificationService  } from './services/notificationService';
//import { PatientService } from './services/patientService';
import { PatientBackendService } from './services/PatientBackendService';
import { PatientStore } from './components/state/PatientStore';
import { DoctorBackendService } from './services/DoctorBackendService';
import { DoctorStore } from './components/state/DoctorStore';
import { TreatmentBackendService } from './services/TreatmentBackendService';
import { DiagnoseBackendService } from './services/DiagnoseBackendService';
import { TreatmentStore } from './components/state/TreatmentStore';
import { DiagnoseStore } from './components/state/DiagnoseStore';
import { UiStateStore } from './components/state/UiStateStore';
bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
//    ROUTER_BINDINGS,
    PatientStore,
    DoctorStore,
    TreatmentStore,
    DiagnoseStore,
    UiStateStore,
    FORM_PROVIDERS,
    HTTP_PROVIDERS,
    ELEMENT_PROBE_PROVIDERS,
    MATERIAL_PROVIDERS,
    NotificationService,
//    PatientService,
    PatientBackendService,
    DoctorBackendService,
    TreatmentBackendService,
    DiagnoseBackendService,
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
