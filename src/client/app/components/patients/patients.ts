import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { RouterLink} from '@angular/router-deprecated';
import { Observable } from 'rxjs/Observable';
import { TreatmentService } from '../../services/treatmentService';
import { Sorter } from '../../shared/sorter';
import { FilterTextboxComponent } from './filterTextbox.component';
import { SortByDirective } from '../../shared/directives/sortby.directive';
import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';
import { TrimPipe } from '../../shared/pipes/trim.pipe';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";
import { PatientFormComponent } from './patient-form'
import { PatientList } from './patient-list'
import { PatientHeaderComponent } from './patient-header'
import { Patient,PatientBackendService} from '../../services/PatientBackendService';
import { NotificationService  } from '../../services/notificationService';
@Component({ 
  selector: 'patients', 
  templateUrl: 'app/components/patients/patients.html',
  host: {'[hidden]': 'hidden'},
  directives: [CORE_DIRECTIVES, RouterLink, FilterTextboxComponent, SortByDirective, PatientList, PatientHeaderComponent, PatientFormComponent, MATERIAL_DIRECTIVES],
  pipes: [CapitalizePipe, TrimPipe]
})


export class PatientsComponent {
    selectedPatient: Patient;
    subscription: any;
    @Input() patients: Patient[];
    
    
   // @Output() openForm = new EventEmitter<string>();
   // formAction : string;
    constructor( private notificationService: NotificationService ) { }
//    ngOnInit() {
//        this.subscription = this.notificationService.getFormActionChangeEmitter()
//          .subscribe(formAction => this.onFormActionChange(formAction));
//    }
//    onFormActionChange(item: string) {
//        console.log("selectedNavItem patient component item = ", item, "selectedPatient", this.selectedPatient);
//    }
//    ngOnDestroy() {
//        this.subscription.unsubscribe();
//    }
}

