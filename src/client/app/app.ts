import { Component } from 'angular2/core';
import { CORE_DIRECTIVES} from 'angular2/common';
import { ROUTER_DIRECTIVES, RouteConfig , RouterLink} from 'angular2/router';
import { PatientsComponent } from './components/patients/patients';
import { TreatmentsComponent } from './components/treatments/treatments';
import { AuthComponent } from './components/auth/auth.component';
import {Dashboard} from './components/dashboard/dashboard';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";
@Component({ 
    selector: 'app-container',
    directives: [ROUTER_DIRECTIVES, RouterLink, CORE_DIRECTIVES, AuthComponent, PatientsComponent, Dashboard],
    templateUrl: 'app/app.html' 
})
@RouteConfig([
 { path: '/patients', name: 'Patients', component: PatientsComponent },
 { path: '/patient/:id/:firstname/:lastname/treatments', name: 'Treatments', component: TreatmentsComponent },
 { path: '/patient/:id/treatments', name: 'TreatmentList', component: TreatmentsComponent },
    { path: '/login', name: 'Auth', component: AuthComponent },
     {path: '/dashboard',  component: Dashboard, name: 'Dashboard', useAsDefault: true }
])
export class AppComponent {
  
  mobileView:number = 992;
  toggle:boolean = false;
  profile: string;
  pacientDisplayModeEnabled: boolean;
  constructor() {
    this.attachEvents();
  }

  ngOnInit() {   
    this.pacientDisplayModeEnabled = true;  
  }
  
  attachEvents() {
    window.onresize = ()=> {
      if (this.getWidth() >= this.mobileView) {
        if (localStorage.getItem('toggle')) {
          this.toggle = !localStorage.getItem('toggle') ? false : true;
        } else {
          this.toggle = true;
        }
      } else {
        this.toggle = false;
      }
    }
  }

  getWidth() {
    return window.innerWidth;
  }

  toggleSidebar() {
    this.toggle = !this.toggle;
    localStorage.setItem('toggle', this.toggle.toString());
  }
  
}
