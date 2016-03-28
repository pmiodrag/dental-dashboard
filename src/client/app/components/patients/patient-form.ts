import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink } from 'angular2/router';
import { IPatient } from './patients';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";
@Component({ 
  selector: 'patient-form', 
  templateUrl: 'app/components/patients/patient-form.html',
  directives: [CORE_DIRECTIVES, RouterLink]
})


export class PatientFormComponent {

  patient : IPatient;
  submitted = false;
  onSubmit() { this.submitted = true; }
  
}