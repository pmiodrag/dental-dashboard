import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import {ROUTER_DIRECTIVES} from '@angular/router';
//import { RouterLink, RouteParams } from 'angular2/router';
//import { TreatmentService, Treatment } from '../../services/treatmentService';
//import { PatientService } from '../../services/patientService';
//import { Sorter } from '../../shared/sorter';
//import { SortByDirective } from '../../shared/directives/sortby.directive';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";
import {TreatmentListComponent} from "./treatment-list"
import {TreatmentFormComponent} from "./treatment-form"
@Component({ 
  selector: 'treatments',
  templateUrl: 'app/components/treatments/treatments.html',
  styleUrls : ['styles/selectable_usage.css'],
  directives: [CORE_DIRECTIVES, MATERIAL_DIRECTIVES, TreatmentListComponent, TreatmentFormComponent, ROUTER_DIRECTIVES]
})
export class TreatmentsComponent {
	
   
    
    constructor() {}   
    
    ngOnInit() {
        console.log("ngOnInit TreatmentsComponent");
     
    }
}