import { Component, Input } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink } from 'angular2/router';
import { Observable } from 'rxjs/Observable';
import { TreatmentService } from '../../services/treatmentService';
import { Sorter } from '../../shared/sorter';
import { FilterTextboxComponent } from './filterTextbox.component';
import { SortByDirective } from '../../shared/directives/sortby.directive';
import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';
import { TrimPipe } from '../../shared/pipes/trim.pipe';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";
import { PatientFormComponent } from './patient-form'
import { PatientList } from './patient-list'
import { Patient } from '../../services/patientService';
@Component({ 
  selector: 'patients', 
  templateUrl: 'app/components/patients/patients.html',
  directives: [CORE_DIRECTIVES, RouterLink, FilterTextboxComponent, SortByDirective, PatientList, PatientFormComponent, MATERIAL_DIRECTIVES],
  pipes: [CapitalizePipe, TrimPipe]
})


export class PatientsComponent {
    sharedList = ['one','two'];
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