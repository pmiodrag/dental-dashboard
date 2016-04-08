import { Component, Input } from 'angular2/core';
import { FORM_DIRECTIVES, Validators, FormBuilder, ControlGroup, CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink } from 'angular2/router';
import { Patient, PatientService } from '../../services/patientService';
import {ControlMessages} from '../handlers/control-messages';
import {ValidationService} from '../../shared/services/validation.service';
import {MdPatternValidator,
  MdMinValueValidator,
  MdNumberRequiredValidator,
  MdMaxValueValidator, MATERIAL_DIRECTIVES} from "ng2-material/all";
//import {DatePicker} from 'ng2-datepicker';
@Component({ 
  selector: 'patient-form', 
  templateUrl: 'app/components/patients/patient-form.html',
  providers: [PatientService],
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES,RouterLink, MATERIAL_DIRECTIVES, ControlMessages]
})


export class PatientFormComponent {
    patientForm: ControlGroup;
    @Input() patient: Patient;
    @Input() showForm: boolean;
     @Input() aList;
//    @Output() showPatientFormChange: EventEmitter<Patient> = new EventEmitter();
   // patient = new Patient(0, '', '', '', 'M', '', '1980-04-14', '', '', '', '');
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
  constructor(fb: FormBuilder, private patientService: PatientService) {
     
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
  
   updateList() {
    this.aList.push('child');
  }
  ngOnInit() {
      if (this.patient == null) {
          this.patient = new Patient(0, '', '', '', 'M', '', '1980-04-14', '', '', '', '');
      }
       this.aList.push('child1')
      console.log("Patient", this.patient, this.showForm);
  }
   
    addPatient (patient) {   
        console.log("Add patient", patient);
        this.patientService.addPatient(patient).subscribe((res:any) => {         
           console.log("make service call for rest post pacient  "+res);         
        });
    }
    goBack() {
        this.aList.push('child');
         console.log("goBack before",  this.showForm);
        this.showForm = false;
         console.log("goBack after",  this.showForm);
    }
    onSubmit(patient) { 
        this.addPatient (patient);
        this.submitted = true; 
        //showPatientForm = true;
    }
    
}