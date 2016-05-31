import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import {ROUTER_DIRECTIVES, RouteSegment} from '@angular/router';
//import { RouterLink, RouteParams } from 'angular2/router';
//import { TreatmentService, Treatment } from '../../services/treatmentService';
//import { PatientService } from '../../services/patientService';
//import { Sorter } from '../../shared/sorter';
//import { SortByDirective } from '../../shared/directives/sortby.directive';
import {MATERIAL_DIRECTIVES} from "ng2-material/index";
import {TreatmentListComponent} from "./treatment-list"
import {TreatmentFormComponent} from "./treatment-form"
@Component({ 
  selector: 'treatments',
  templateUrl: 'app/components/treatments/treatments.html',
  styleUrls : ['styles/selectable_usage.css'],
  directives: [CORE_DIRECTIVES, MATERIAL_DIRECTIVES, TreatmentListComponent, TreatmentFormComponent, ROUTER_DIRECTIVES]
})
export class TreatmentsComponent {
	 id:string;
  firstname:string;
  lastname:string;
   
    
    constructor(routeSegment: RouteSegment) {
        this.id = routeSegment.getParam('id');
//        this.firstname = routeSegment.getParam('firstname');
//        this.lastname = routeSegment.getParam('lastname');
        console.log("TreatmentsComponent routerOnActivate id", this.id);
    }   
    
    ngOnInit() {
        console.log("ngOnInit TreatmentsComponent");
     
    }
}