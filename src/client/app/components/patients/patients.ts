import { Component } from 'angular2/core';
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
@Component({ 
  selector: 'patients', 
  providers: [DataService],
  templateUrl: 'app/components/patients/patients.html',
  directives: [CORE_DIRECTIVES, RouterLink, FilterTextboxComponent, SortByDirective, PatientFormComponent, MATERIAL_DIRECTIVES],
  pipes: [CapitalizePipe, TrimPipe]
})


export class PatientsComponent {

  title: string;
  filterText: string;
  listDisplayModeEnabled: boolean;
  showPatientForm: boolean;
  patients: any[] = [];
  filteredPatients: any[] = [];
  sorter: Sorter;
  patient : Patient;
  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    this.title = 'Patients';
    this.filterText = 'Filter Patients:';
    this.listDisplayModeEnabled = false;
    this.showPatientForm = false;
    this.dataService.getPatients()  
        .subscribe((patients:any[]) => {
          console.log("getPatients", patients);
          this.patients = this.filteredPatients = patients;
        });
    this.dataService.getPatients()
        .subscribe((patients:Patient[]) => {
          this.patient = patients[0];
          console.log("data service init get pacient from json  ", this.patient);   
    })       
         
    this.sorter = new Sorter();
  }
    
  changeDisplayMode(mode: string) {
      this.listDisplayModeEnabled = (mode === 'List');
  }

  filterChanged(data: string) {
    if (data && this.patients) {
        data = data.toUpperCase();
        let props = ['firstname', 'middlename', 'lastname', 'address', 'place'];
        let filtered = this.patients.filter(item => {
            let match = false;
            for (let prop of props) {
                if (item[prop]!= null && item[prop].toString().toUpperCase().indexOf(data) > -1) {
                  match = true;
                  break;
                }
            };
            return match;
        });
        this.filteredPatients = filtered;
    }
    else {
      this.filteredPatients = this.patients;
    }
  }
  openPatientForm () {
      this.showPatientForm = true;
  }
    addPatient () {   
        this.dataService.addPatient(this.patient).subscribe((res:any) => {         
           console.log("make service call for rest post pacient  "+res);         
    });
  }
  
  deletePatient(id: number) {
    console.log("make service call for rest delete with id::: ", id);
  }

  sort(prop: string) {
      //Check for complex type such as 'state.name'
      if (prop && prop.indexOf('.')) {
        
      }
      this.sorter.sort(this.filteredPatients, prop);
  }

}

export interface IPatient {
    id: number; 
    firstname: string;
    lastname: string;
    middlename: string,
    gender: string,
    address: string;
    place: string;    
    birthdate: string;
    email : string;
    phone: string;
    mobilephone: string;
}

export class Patient implements IPatient {
    constructor (public id: number, public firstname: string, public lastname: string, public middlename: string,
                public gender: string, public address: string, public place: string,  public birthdate: string, public email : string,
                public phone: string,  public mobilephone: string) {
    }
    
    
//    id: number; 
//    firstName: string;
//    lastName: string;
//    middleName: string;
//    gender: string;
//    address: string;
//    place: string;    
//    birthDate: string;
//    email : string;
//    phone: number;
//    mobilePhone: number;

////        this.id = id; 
//        this.firstName = firstName;
//        this.lastName = lastName;
//        this.middleName = middleName,
//        this.gender = gender,
//        this.address = address;
//        this.place = place;    
//        this.birthDate = birthDate;
//        this.email = email;
//        this.phone = phone;
//        this.mobilePhone = mobilePhone;
//    }
}