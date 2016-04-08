import { Component, Input } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';

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
  addPatient () {
      this.hidden = true;
        this.patientlist.hidden = true;
        this.patientform.hidden = false;
  }
}
