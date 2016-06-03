import { Component } from '@angular/core';
import { CORE_DIRECTIVES} from '@angular/common';
import { ROUTER_DIRECTIVES, Routes, RouteSegment} from '@angular/router';
//import { RouteConfig, RouteDefinition} from '@angular/router-deprecated';
import {APP_ROUTES} from './app.routes';
import { PatientsComponent } from './components/patients/patients';
import { TreatmentsComponent } from './components/treatments/treatments';
import { DiagnoseComponent } from './components/diagnose/diagnose';
import { AuthComponent } from './components/auth/auth.component';
import {Dashboard} from './components/dashboard/dashboard';
import {MATERIAL_DIRECTIVES} from "ng2-material/index";
@Component({ 
    selector: 'app-container',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, AuthComponent, PatientsComponent, Dashboard],
    templateUrl: 'app/app.html' 
})

//@RouteConfig(APP_ROUTES)
@Routes([
//    // these are our two routes
//    { path: '/', component: HomeComponent }, // , useAsDefault: true}, // coming soon
//    { path: '/about', component: AboutComponent }
     { path: '/patients',  component: PatientsComponent },
//    { path: '/patient/:id/:firstname/:lastname/treatments', component: TreatmentsComponent },
     { path: '/patient/:id/treatments', component: TreatmentsComponent },
     { path: '/diagnoses',  component: DiagnoseComponent },
//    { path: '/patient/:id/treatments', component: TreatmentsComponent },
//     { path: '/treatments', component: TreatmentsComponent },
    { path: '/login',  component: AuthComponent },
     {path: '/dashboard',  component: Dashboard },
      {path: '/*',           component: Dashboard },
       {path: '/',            component: Dashboard },
])
export class AppComponent {
//  public appRoutes: RouteDefinition[];
  mobileView:number = 992;
  toggle:boolean = false;
  profile: string;
  pacientDisplayModeEnabled: boolean;
  id:string;
  firstname:string;
  lastname:string;
  constructor() {
    this.attachEvents();
//    this.appRoutes = APP_ROUTES;
  }

  ngOnInit() {   
    this.pacientDisplayModeEnabled = true;  
    console.log('ngOnInit app');
  }
  
//  routerOnActivate(curr: RouteSegment) {
//    this.id = curr.getParam('id');
//    this.firstname = curr.getParam('firstname');
//    this.lastname = curr.getParam('lastname');
//    console.log("routerOnActivate", this.firstname);
//  }

  
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
