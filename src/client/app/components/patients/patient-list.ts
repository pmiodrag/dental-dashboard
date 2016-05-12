import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { RouterLink} from '@angular/router-deprecated';
import { Observable } from 'rxjs/Observable';
import { Patient, PatientBackendService } from '../../services/PatientBackendService';
import { NotificationService  } from '../../services/notificationService';
import { Sorter } from '../../shared/sorter';
import { FilterTextboxComponent } from './filterTextbox.component';
import { SortByDirective } from '../../shared/directives/sortby.directive';
import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';
import { TrimPipe } from '../../shared/pipes/trim.pipe';
import { ValuesPipe } from '../../shared/pipes/values.pipe';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";
import { PatientFormComponent } from './patient-form'
import {TimerWrapper} from "@angular/common/src/facade/async";
@Component({ 
  selector: 'patient-list', 
 // providers: [PatientService],
  templateUrl: 'app/components/patients/patient-list.html',
  host: {'[hidden]': 'hidden'},
  directives: [CORE_DIRECTIVES, RouterLink, FilterTextboxComponent, SortByDirective, MATERIAL_DIRECTIVES],
  pipes: [CapitalizePipe, TrimPipe, ValuesPipe]
})


export class PatientList {
   /**
   * True to show the source code for the example
   */
  public showSource: boolean = false;
  private showTabs: boolean = false;
  
  title: string;
  toggleID: number;
  filterText: string;
  listDisplayModeEnabled: boolean; 
  filteredPatients: Patient[] = [];
  sorter: Sorter;
  patient : Patient;
  @Input() hidden:boolean = false;
  @Input() patients: Patient[];
  @Input() selected: Patient;
  @Input() patientheader: any;
  @Input() patientform: any;
 // @Input() action: string;
  @Output() selectedChange: EventEmitter<any> = new EventEmitter();
  patientList: Observable<Patient[]>;
  
  constructor(private patientService: PatientBackendService, private notificationService: NotificationService) { }
  
  ngOnInit() {
    this.title = 'Patients';
    this.filterText = 'Filter Patients:';
    this.listDisplayModeEnabled = false;
    console.log("ngOnInit this.patientService", this.patientService)
  //  this.patientList = this.patientService.patients$; // subscribe to entire collection
     console.log("this.patients$", this.patientList);
//    this.singleTodo$ = this._todoService.todos$
//                          .map(todos => todos.find(item => item.id === '1'));  
//                          // subscribe to only one todo 
    // this.patientList.subscribe();
//     this.patients = this.filteredPatients =  this.patientService.loadAll();
   // this.patientService.getAllPatients();    // load all patients
   // this._todoService.load('1');    // load only todo with id of '1'
//    this.patientService.getPatients()  
//        .subscribe((patients:Patient[]) => {
//          console.log("getPatients", patients);
//          this.patients = this.filteredPatients = patients;
//        });
//    this.patientService.getPatients()
//        .subscribe((patients:Patient[]) => {
//          this.patient = patients[0];
//          console.log("data service init get pacient from json  ", this.patient);   
//    })       
         
    this.sorter = new Sorter();
  }
  editPatient (patient: Patient) {
      this.selectedChange.next(patient);
      this.hidden = true;
      this.patientheader.hidden = true;
      this.patientform.hidden = false;
      this.formAction(patient);
  }
  formAction(patient: Patient) {
   // console.log('formAction ' + action);
    this.notificationService.emitFormActionChangeEvent(patient);
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
 
  
  deletePatient(id: number) {
    console.log("make service call for rest delete with id::: ", id);
//    this.patientService.deletePatient(id).subscribe((res:any) => {         
//       console.log("make service call for rest post pacient  "+res);         
//    });
  }

  sort(prop: string) {
      //Check for complex type such as 'state.name'
      if (prop && prop.indexOf('.')) {
        
      }
      this.sorter.sort(this.filteredPatients, prop);
  }
  
   toggleSource(id) {
    this.toggleID = id;
    if (this.showSource) {
      this.showTabs = false;
      TimerWrapper.setTimeout(() => {
        this.showSource = false;
      }, 500);
    }
    else {
      this.showSource = true;
      TimerWrapper.setTimeout(() => {
        this.showTabs = true;
      }, 25);
    }
  }

}//    }
