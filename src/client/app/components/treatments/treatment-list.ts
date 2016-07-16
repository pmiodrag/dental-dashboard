import { Component, Input } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { Treatment, TreatmentBackendService } from '../../services/TreatmentBackendService';
import { TreatmentStore } from '../state/TreatmentStore';
import { NotificationService  } from '../../services/notificationService';
import { Sorter } from '../../shared/sorter';
import { SortByDirective } from '../../shared/directives/sortby.directive';
import {MdToolbar} from '@angular2-material/toolbar';
import {MATERIAL_DIRECTIVES, ITableSelectionChange} from "ng2-material/index";
import {ICON_CLASS} from '../../shared/constants/app.constants';
import {DOCTOR_OWNER} from '../../shared/constants/app.constants';
import {PATIENT_OWNER} from '../../shared/constants/app.constants';
import * as Rx from "rxjs/Rx";
import {List} from 'immutable';
import {asObservable} from "../state/asObservable";
@Component({ 
  selector: 'treatment-list',
  providers: [TreatmentBackendService],
  templateUrl: 'app/components/treatments/treatment-list.html',
  host: {'[hidden]': 'hidden'},
  styleUrls : ['styles/selectable_usage.css'],
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES,MATERIAL_DIRECTIVES, MdToolbar ]
})
export class TreatmentListComponent {
    iconClass: string = ICON_CLASS;
    title: string = 'Treatments';
    treatment: Treatment;
    treatments : Treatment[] = [];
    filteredTreatments: Treatment[] = [];
    selection: string ;
    count: number;
    owner: string;
    doctorID: number;
    patientID: number;
    @Input() hidden:boolean = false;
    @Input () treatmentform: any;  
    @Input () userID: number;
    //@Input () doctorID: number;
    private _treatments: Rx.BehaviorSubject<List<Treatment>> = new Rx.BehaviorSubject(List([]));
    constructor(private notificationService: NotificationService, private route: ActivatedRoute, private treatmentService: TreatmentBackendService, private treatmentStore: TreatmentStore) {
       
    }   
    
    ngOnInit() {
       console.log("TreatmentListComponent ngOnInit patientID", this.userID);
        this.route.params.subscribe(params => {
            this.owner = params['owner']; // (+) converts string 'id' to a number
            console.log("ngOnInit GalleryComponent patientID", this.owner );
            if (this.owner == DOCTOR_OWNER){
                this.doctorID = this.userID;
                this.treatmentStore.loadTreatmentsByDoctorId(this.userID);      
           } else {
                this.patientID = this.userID;
                this.treatmentStore.loadInitialData(this.userID);
           }
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
  
   // open treatment form to add new treatment.
    addTreatment () {
        this.hidden = true;
        this.treatmentform.hidden = false;
        this.treatment = new Treatment(-1, this.patientID,  this.doctorID, new Date(), '', '', '')
        this.formAction(this.treatment);
    }
    
    deleteTreatment(treatment: Treatment) {
        this.treatmentStore.deleteTreatment(treatment);
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
