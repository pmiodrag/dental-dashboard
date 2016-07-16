import { Component } from '@angular/core';
import { CORE_DIRECTIVES} from '@angular/common';
import { provideRouter, RouterConfig }  from '@angular/router';

import { PatientsComponent } from './components/patients/patients';
import { TreatmentsComponent } from './components/treatments/treatments';
import { DiagnoseComponent } from './components/diagnose/diagnose';
import {DoctorsComponent} from './components/doctors/doctors';
import {DocumentsComponent} from './components/documents/documents';
import {AgendaComponent} from './components/agenda/agenda';
import { AuthComponent } from './components/auth/auth.component';
import {Dashboard} from './components/dashboard/dashboard';
import { GalleryComponent } from './components/gallery/gallery';
import { GalleryPreview }     from './components/gallery/gallery-preview';
import { GalleryUpload }   from './components/gallery/gallery-upload';
import { galleryRoutes } from './components/gallery/gallery.routes';
const routes: RouterConfig = [
    ...galleryRoutes,
    { path: 'patients',  component: PatientsComponent },
//   { path: 'patient/:id/gallery',  component: GalleryComponent },
   { path: 'patient/:owner/:id/treatments', component: TreatmentsComponent },
   { path: 'doctor/:owner/:id/treatments', component: TreatmentsComponent },
   { path: 'diagnoses',  component: DiagnoseComponent },
   { path: 'doctors',  component: DoctorsComponent },
   { path: 'documents',  component: DocumentsComponent },
   { path: 'agenda',  component: AgendaComponent },
//   { path: 'login',  component: AuthComponent },
   { path: 'dashboard',  component: Dashboard },
   { path: '*', component: Dashboard },
   { path: '', component: Dashboard }
  
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];

  

