import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { NotificationService  } from '../../services/notificationService';
import { Patient } from '../../services/PatientBackendService';
import {MdToolbar} from '@angular2-material/toolbar';
import {MATERIAL_DIRECTIVES} from "ng2-material/index";
@Component({
  selector: 'patient-header',
  templateUrl: 'app/components/patients/patient-header.html',
  host: {'[hidden]': 'hidden'},
  directives: [CORE_DIRECTIVES, MATERIAL_DIRECTIVES, MdToolbar],
})
export class PatientHeaderComponent {
    @Input() hidden:boolean = false;
    @Input () patientform: any;
    @Input () patientlist: any;  
    patient: Patient;
    
    constructor( private notificationService: NotificationService) {}

    

    addPatient () {
        this.hidden = true;
        this.patientlist.hidden = true;
        this.patientform.hidden = false;
        this.patient = new Patient(-1, '', '', '', 'M', '', '', new Date(), '', '', '');
        this.formAction(this.patient);
    }
    formAction(patient: Patient) {
        console.log('PatientHeaderComponent formAction patient', patient);
        this.notificationService.emitFormActionChangeEvent(patient);
    }
}
