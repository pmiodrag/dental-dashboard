import { Component, Input, EventEmitter } from '@angular/core';
import { FORM_DIRECTIVES, Validators, FormBuilder, ControlGroup, CORE_DIRECTIVES } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Patient, PatientBackendService } from '../../services/PatientBackendService';
import { NotificationService  } from '../../services/notificationService';
import {ControlMessages} from '../handlers/control-messages';
import {ValidationService} from '../../shared/services/validation.service';
import {DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';
import { PatientStore } from '../state/PatientStore';
import { UiStateStore } from '../state/UiStateStore';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MdRadioGroup, MdRadioButton} from '@angular2-material/radio';
import {MdRadioDispatcher} from '@angular2-material/radio/radio_dispatcher';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdPatternValidator,
  MdMinValueValidator,
  MdNumberRequiredValidator,
  MdMaxValueValidator, MATERIAL_DIRECTIVES} from "ng2-material/index";
//import {DatePicker} from 'ng2-datepicker';
@Component({ 
  selector: 'patient-form', 
  templateUrl: 'app/components/patients/patient-form.html',
//  providers: [PatientBackendService],
  providers: [MdRadioDispatcher],
  host: {'[hidden]': 'hidden'},
  directives: [CORE_DIRECTIVES, DATEPICKER_DIRECTIVES, FORM_DIRECTIVES,ROUTER_DIRECTIVES, MD_INPUT_DIRECTIVES, MdRadioGroup, MdRadioButton, ControlMessages, MATERIAL_DIRECTIVES],
  pipes: [CapitalizePipe]
})


export class PatientFormComponent {
    patientForm: ControlGroup;
    @Input() patient: Patient;
    @Input() hidden:boolean = true;
    @Input () patientheader: any;
    @Input () patientlist: any;
     // Date and time properties
 //   birthdate: Date = new Date();
    formTitle: string;
    submitAction: string;
    subscription: any;
    submitted = false;
    
    data: any = {
        group1: 'Banana',
        group2: '2',
        group3: 'avatar-1'
      };
    avatarData: any[] = [{
        id: 'assets/images/m.png',
        title: 'Male',
        value: 'M',
        color:'md-primary'
    }, {
        id: 'assets/images/f.png',
        title: 'Female',
        value: 'F',
         color:'md-warn'
    }];
  constructor(fb: FormBuilder, private patientStore: PatientStore, private uiStateStore: UiStateStore, private patientService: PatientBackendService, private notificationService: NotificationService ) {
    
    this.patientForm = fb.group({
      'firstname': ['',  Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)])],
      'lastname': ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ])],
      'email': ['', ValidationService.emailValidator]
    });
  }
  
   
    ngOnInit() {
        this.patient = new Patient(0, '', '', '', 'M', '', '', new Date(), '', '', '');
        this.subscription = this.notificationService.getFormActionChangeEmitter()
          .subscribe(patient => this.onFormActionChange(patient));           
    }
    onFormActionChange(patient: Patient) {
        console.log("onFormActionChange patient", patient);
        this.patient = patient;
        if (patient.id == -1) {          
          this.formTitle = "Add Patient";
          this.submitAction = 'add';
        } else {
            this.formTitle = "Edit Patient";
            this.submitAction = 'edit';
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    
    addPatient(patient) {
       
        this.uiStateStore.startBackendAction('Saving Todo...');

        this.patientStore.addPatient(patient)
            .subscribe(
                res => {},
                err => {
                    this.uiStateStore.endBackendAction();
                }
            );
            this.goBack();
    }
    
    updatePatient(patient) {
        this.patientStore.updatePatient(patient)
            .subscribe(
                res => {},
                err => {
                    this.uiStateStore.endBackendAction();
                }
            );
            this.goBack();
    }
      
    goBack() {     
        this.hidden = true;
        this.patientheader.hidden = false;
        this.patientlist.hidden = false;
    }
    
    onSubmit(patient) { 
        console.log("patient.birthdate", patient.birthdate);
       // patient.birthdate.setHours(12);
        if (this.submitAction == 'add') {             
            this.addPatient (patient);
        } else {
            this.updatePatient(patient);
        }             
        this.submitted = true; 
        this.goBack();
    }
    
}