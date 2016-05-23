import {RouteDefinition} from '@angular/router-deprecated';
import { PatientsComponent } from './components/patients/patients';
import { TreatmentsComponent } from './components/treatments/treatments';
import { AuthComponent } from './components/auth/auth.component';
import {Dashboard} from './components/dashboard/dashboard';

export var APP_ROUTES: RouteDefinition[] = [
    { path: '/patients', name: 'Patients', component: PatientsComponent },
    { path: '/patient/:id/:firstname/:lastname/treatments', name: 'Treatments', component: TreatmentsComponent },
    { path: '/patient/:id/treatments', name: 'TreatmentList', component: TreatmentsComponent },
    { path: '/login', name: 'Auth', component: AuthComponent },
     {path: '/dashboard',  component: Dashboard, name: 'Dashboard', useAsDefault: true }
];
