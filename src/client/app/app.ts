import { Component } from '@angular/core';
import { CORE_DIRECTIVES} from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { PatientsComponent } from './components/patients/patients';
import { TreatmentsComponent } from './components/treatments/treatments';
import { DiagnoseComponent } from './components/diagnose/diagnose';
import {DoctorsComponent} from './components/doctors/doctors';
import {DocumentsComponent} from './components/documents/documents';
import {AgendaComponent} from './components/agenda/agenda';
import { AuthComponent } from './components/auth/auth.component';
import {Dashboard} from './components/dashboard/dashboard';
import { GalleryComponent } from './components/gallery/gallery';
import {MATERIAL_DIRECTIVES} from "ng2-material/index";
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
@Component({ 
    selector: 'app-container',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, AuthComponent, PatientsComponent, Dashboard],
    templateUrl: 'app/app.html' 
})

//@Routes([
//    { path: '/patients',  component: PatientsComponent },
//    { path: '/patient/:id/gallery',  component: GalleryComponent },
//    { path: '/patient/:owner/:id/treatments', component: TreatmentsComponent },
//    { path: '/doctor/:owner/:id/treatments', component: TreatmentsComponent },
//    { path: '/diagnoses',  component: DiagnoseComponent },
//    { path: '/doctors',  component: DoctorsComponent },
//    { path: '/documents',  component: DocumentsComponent },
//    { path: '/agenda',  component: AgendaComponent },
//    { path: '/login',  component: AuthComponent },
//    { path: '/dashboard',  component: Dashboard },
//    { path: '/*', component: Dashboard },
//    { path: '/', component: Dashboard },
//])
export class AppComponent {
  mobileView:number = 992;
  toggle:boolean = false;
  profile: string;
  pacientDisplayModeEnabled: boolean;
  id:string;
  firstname:string;
  lastname:string;
  constructor() {
    this.attachEvents();
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
