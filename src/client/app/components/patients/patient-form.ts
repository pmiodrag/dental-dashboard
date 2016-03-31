import { Component } from 'angular2/core';
import { FORM_DIRECTIVES, Validators, FormBuilder, ControlGroup, CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink } from 'angular2/router';
import { Patient } from './patients';
import { DataService } from '../../shared/services/data.service';
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
  providers: [DataService],
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES,RouterLink, MATERIAL_DIRECTIVES, ControlMessages]
})


export class PatientFormComponent {
    patientForm: ControlGroup;
    patient = new Patient(0, '', '', '', 'M', '', '1980-04-14', '', '', '', '');
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
  constructor(fb: FormBuilder, private dataService: DataService) {
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
    addPatient (patient) {   
        console.log("Add patient", patient);
        this.dataService.addPatient(patient).subscribe((res:any) => {         
           console.log("make service call for rest post pacient  "+res);         
        });
    }
    onSubmit(patient) { 
        this.addPatient (patient);
        this.submitted = true; 
        //showPatientForm = true;
    }
    
}