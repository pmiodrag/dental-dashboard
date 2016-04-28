import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { NotificationService  } from '../../services/notificationService';
import { Patient } from '../../services/patientService';
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
    patient: Patient;
    
    constructor( private notificationService: NotificationService) {}

    addPatient () {
        this.hidden = true;
        this.patientlist.hidden = true;
        this.patientform.hidden = false;
        this.patient = new Patient(4, '', '', '', 'M', '', '', new Date(), '', '', '');
        this.formAction(this.patient);
    }
    formAction(patient: Patient) {
        console.log('PatientHeaderComponent formAction patient', patient);
        this.notificationService.emitFormActionChangeEvent(patient);
    }
}
