import { Component, Input } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { RouteParams , RouterLink} from '@angular/router-deprecated';
import { TreatmentService, Treatment } from '../../services/treatmentService';
import { PatientBackendService } from '../../services/PatientBackendService';
import { NotificationService  } from '../../services/notificationService';
import { Sorter } from '../../shared/sorter';
import { SortByDirective } from '../../shared/directives/sortby.directive';
import {MATERIAL_DIRECTIVES, ITableSelectionChange} from "ng2-material/all";
//import {DataTableSelectableUsage} from "./selectable_usage"
@Component({ 
  selector: 'treatment-list',
  providers: [TreatmentService],
  templateUrl: 'app/components/treatments/treatment-list.html',
  host: {'[hidden]': 'hidden'},
  styleUrls : ['styles/selectable_usage.css'],
  directives: [CORE_DIRECTIVES, RouterLink, MATERIAL_DIRECTIVES ]
})
export class TreatmentListComponent {
	
    title: string = 'Treatments';
    treatment: Treatment;
    treatments : Treatment[] = [];
    filteredTreatments: Treatment[] = [];
    selection: string ;
    count: number;
    @Input() hidden:boolean = false;
    @Input () treatmentform: any;  
    patientID: number;
    constructor(private notificationService: NotificationService, private treatmentService: TreatmentService, private patientService: PatientBackendService, private _routeParams: RouteParams) {}   
    
    ngOnInit() {
       console.log("ngOnInit");
       this.patientID = parseInt(this._routeParams.get('id'), 10);
       let firstname = this._routeParams.get('firstname');
       let lastname = this._routeParams.get('lastname');
//       this.patientService.getPatientTreatmentList(this.patientID).subscribe((treatments: any[]) => {   
//          
//        this.filteredTreatments = treatments.filter(treatment => treatment.patientid === this.patientID);
//      });
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
   // open treatment form to add new treatment.
    addTreatment () {
        this.hidden = true;
        this.treatmentform.hidden = false;
        this.treatment = new Treatment(0, this.patientID, new Date(), '', '', '')
        this.formAction(this.treatment);
    }
    
    
    editTreatment(treatment: Treatment) {
        this.hidden = true;
        this.treatmentform.hidden = false;
        this.formAction(treatment);
    }
     formAction(treatment: Treatment) {
        console.log('TreatmentListComponent formAction treatment', treatment);
        this.notificationService.emitFormActionChangeEvent(treatment);
    }
  
}
