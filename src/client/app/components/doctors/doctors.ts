import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {MdToolbar} from '@angular2-material/toolbar';
import {MATERIAL_DIRECTIVES} from "ng2-material/index";
@Component({
  selector: 'dashboard',
  templateUrl: 'app/components/doctors/doctors.html',
  directives: [ROUTER_DIRECTIVES, MATERIAL_DIRECTIVES, MdToolbar ]
})
export class DoctorsComponent {
    
  constructor() {
  }
  
  addDoctor () {
      console.log("Add doctor");
  }

}
