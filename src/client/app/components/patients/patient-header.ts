import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { NotificationService  } from '../../services/notificationService';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";
@Component({
  selector: 'patient-header',
  templateUrl: 'app/components/patients/patient-header.html',
  host: {'[hidden]': 'hidden'},
  directives: [CORE_DIRECTIVES, MATERIAL_DIRECTIVES],
})
export class PatientHeaderComponent {
    @Input() hidden:boolean = false;
    @Input () patientform: any;
    @Input () patientlist: any;  
    
    constructor( private notificationService: NotificationService) {}

    addPatient () {
        this.hidden = true;
        this.patientlist.hidden = true;
        this.patientform.hidden = false;
        this.formAction('add');
    }
    formAction(action: string) {
        console.log('formAction ' + action);
        this.notificationService.emitFormActionChangeEvent(action);
    }
}
