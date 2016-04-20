import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
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
  directives: [CORE_DIRECTIVES, MATERIAL_DIRECTIVES, TreatmentListComponent, TreatmentFormComponent]
})
export class TreatmentsComponent {
	
   
    
    constructor() {}   
    
    ngOnInit() {
        console.log("ngOnInit TreatmentsComponent");
     
    }
}