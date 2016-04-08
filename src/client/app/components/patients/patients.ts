import { Component, Input } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink } from 'angular2/router';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../../shared/services/data.service';
import { Sorter } from '../../shared/sorter';
import { FilterTextboxComponent } from './filterTextbox.component';
import { SortByDirective } from '../../shared/directives/sortby.directive';
import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';
import { TrimPipe } from '../../shared/pipes/trim.pipe';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";
import { PatientFormComponent } from './patient-form'
import { PatientList } from './patient-list'
import { PatientHeaderComponent } from './patient-header'
import { Patient } from '../../services/patientService';
@Component({ 
  selector: 'patients', 
  templateUrl: 'app/components/patients/patients.html',
   host: {'[hidden]': 'hidden'},
  directives: [CORE_DIRECTIVES, RouterLink, FilterTextboxComponent, SortByDirective, PatientList, PatientHeaderComponent, PatientFormComponent, MATERIAL_DIRECTIVES],
  pipes: [CapitalizePipe, TrimPipe]
})


export class PatientsComponent {
  selectedPatient: Patient;
  @Input() patients: Patient[];
  showPatientForm: boolean;
   
   ngOnInit() {
       console.log("this.showPatientForm before", this.showPatientForm);
       this.showPatientForm = false;
   }
   openPatientForm () {
      this.showPatientForm = true;
  }
  
}

