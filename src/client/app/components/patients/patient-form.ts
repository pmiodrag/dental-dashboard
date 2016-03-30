import { Component } from 'angular2/core';
import { FORM_DIRECTIVES, Validators, FormBuilder, ControlGroup, CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink } from 'angular2/router';
import { Patient } from './patients';
import {MdPatternValidator,
  MdMinValueValidator,
  MdNumberRequiredValidator,
  MdMaxValueValidator, MATERIAL_DIRECTIVES} from "ng2-material/all";
//import {DatePicker} from 'ng2-datepicker';
@Component({ 
  selector: 'patient-form', 
  templateUrl: 'app/components/patients/patient-form.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES,RouterLink, MATERIAL_DIRECTIVES]
})


export class PatientFormComponent {
    patientForm: ControlGroup;
    patient = new Patient(0, 'test', 'test', '', '', '', '', 'test@gmail.com', 'test', '', '');
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
  constructor(fb: FormBuilder) {
    this.patientForm = fb.group({
      'firstname': ['', Validators.required],
      'lastname': ['', Validators.compose([
        Validators.required,
        Validators.maxLength(30)
      ])],
      'email': ['', Validators.compose([
        MdPatternValidator.inline('^.+@.+\..+$'),
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(100)
      ])]
    });
  }
  
  onSubmit() { this.submitted = true; }
  
}