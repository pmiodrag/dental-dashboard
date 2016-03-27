import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink } from 'angular2/router';
import { Pacient } from './pacients';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";
@Component({ 
  selector: 'pacient-form', 
  templateUrl: 'app/components/pacients/pacient-form.html',
  directives: [CORE_DIRECTIVES, RouterLink]
})


export class PacientFormComponent {

  pacient : Pacient;
  submitted = false;
  onSubmit() { this.submitted = true; }
  
}