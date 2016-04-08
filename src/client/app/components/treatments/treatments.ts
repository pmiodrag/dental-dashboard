import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink, RouteParams } from 'angular2/router';
import { TreatmentService } from '../../services/treatmentService';
import { PatientService } from '../../services/patientService';
import { Sorter } from '../../shared/sorter';
import { SortByDirective } from '../../shared/directives/sortby.directive';
import {MATERIAL_DIRECTIVES, ITableSelectionChange} from "ng2-material/all";
//import {DataTableSelectableUsage} from "./selectable_usage"
@Component({ 
  selector: 'treatments',
  providers: [TreatmentService, PatientService],
  templateUrl: 'app/components/treatments/treatments.html',
  styleUrls : ['styles/selectable_usage.css'],
  directives: [CORE_DIRECTIVES, RouterLink, MATERIAL_DIRECTIVES ]
})
export class TreatmentsComponent {
	
    title: string = 'Treatments';
    treatments : Treatment[] = [];
    filteredTreatments: Treatment[] = [];
    selection: string ;
    count: number;
    
    constructor(private treatmentService: TreatmentService, private patientService: PatientService, private _routeParams: RouteParams) {}   
    
    ngOnInit() {
        console.log("ngOnInit");
       let patientId = parseInt(this._routeParams.get('id'), 10);
       let firstname = this._routeParams.get('firstname');
       let lastname = this._routeParams.get('lastname');
       this.patientService.getPatientTreatments(patientId,  firstname, lastname).subscribe((treatments: any[]) => {
          
        this.filteredTreatments = treatments.filter(treatment => treatment.patientId === patientId);
      });
    }
    
   change(data: ITableSelectionChange) {
    let treatments = [];
    console.log("data", data);
    this.filteredTreatments.forEach((treatment: Treatment) => {
        console.log("treatment", treatment);
      if (data.values.indexOf(treatment.id) !== -1) {
        treatments.push(treatment.id);
      }
    });
    this.selection = treatments.join(', ');
    this.count = treatments.length;
  }
  
  getTreatments(){
    this.treatmentService.getTreatments()  
        .subscribe((treatments:any[]) => {
          this.treatments = this.filteredTreatments = treatments;
        });
  }
  
}

export interface ITreatment {
    id: number; 
    patientId : number; 
    date: string;
    therapy: string;
    diagnose: string;
    price: string;
}

export class Treatment implements ITreatment {
    constructor (public id: number, public patientId : number, public date: string, public therapy: string, 
        public diagnose: string, public price: string) {
    }
}
