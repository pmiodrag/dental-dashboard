import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import {ROUTER_DIRECTIVES, RouteSegment} from '@angular/router';
//import { RouterLink, RouteParams } from 'angular2/router';
//import { DiagnoseService, Diagnose } from '../../services/diagnoseService';
//import { PatientService } from '../../services/patientService';
//import { Sorter } from '../../shared/sorter';
//import { SortByDirective } from '../../shared/directives/sortby.directive';
import {MATERIAL_DIRECTIVES} from "ng2-material/index";
import {DiagnoseListComponent} from "./diagnose-list"
import {DiagnoseFormComponent} from "./diagnose-form"
@Component({ 
  selector: 'diagnoses',
  templateUrl: 'app/components/diagnose/diagnose.html',
  styleUrls : ['styles/selectable_usage.css'],
  directives: [CORE_DIRECTIVES, MATERIAL_DIRECTIVES, DiagnoseListComponent, DiagnoseFormComponent, ROUTER_DIRECTIVES]
})
export class DiagnoseComponent {
  id:string;
  name:string;
  description:string;
   
    
    constructor(routeSegment: RouteSegment) {
        this.id = routeSegment.getParam('id');
        console.log("DiagnosesComponent routerOnActivate id", this.id);
    }   
    
    ngOnInit() {
        console.log("ngOnInit DiagnosesComponent");
     
    }
}