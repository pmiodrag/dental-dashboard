import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { ROUTER_DIRECTIVES} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Patient, PatientBackendService } from '../../services/PatientBackendService';
import { NotificationService  } from '../../services/notificationService';
import { Sorter } from '../../shared/sorter';
import { FilterTextboxComponent } from './filterTextbox.component';
import { SortByDirective } from '../../shared/directives/sortby.directive';
import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';
import { TrimPipe } from '../../shared/pipes/trim.pipe';
import { ValuesPipe } from '../../shared/pipes/values.pipe';
import {MATERIAL_DIRECTIVES, ITableSelectionChange} from "ng2-material/index";
import { PatientFormComponent } from './patient-form'
import {TimerWrapper} from "@angular/common/src/facade/async";
import { PatientStore } from '../state/PatientStore';
import {MdToolbar} from '@angular2-material/toolbar';
//import {MD_ICON_DIRECTIVES} from '@angular2-material/icon';
import {List} from 'immutable';
import {asObservable} from "../state/asObservable";
import * as Rx from "rxjs/Rx";
@Component({ 
  selector: 'patient-list', 
 // providers: [PatientService],
  templateUrl: 'app/components/patients/patient-list.html',
  host: {'[hidden]': 'hidden'},
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, MATERIAL_DIRECTIVES, MdToolbar, FilterTextboxComponent, SortByDirective],
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
  @Output() selectedChange: EventEmitter<any> = new EventEmitter();
  
  private _patients: Rx.BehaviorSubject<List<Patient>> = new Rx.BehaviorSubject(List([]));
  constructor(private patientService: PatientBackendService, private notificationService: NotificationService, private patientStore: PatientStore) { }
  
  ngOnInit() {
    this.title = 'Patients';
    this.filterText = 'Filter Patients:';
    this.listDisplayModeEnabled = false;     
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
    if (data) {
        data = data.toUpperCase();
        this.patientStore.filterData(data);        
    }
  }
 
  
  deletePatient(patient: Patient) {
    this.patientStore.deletePatient(patient);
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
  
//   change(data: ITableSelectionChange) {
//    let patients = [];
//    console.log("data", data);
//    this.filteredPatients.forEach((treatment: Treatment) => {
//        console.log("treatment", treatment);
//      if (data.values.indexOf(treatment.id) !== -1) {
//        treatments.push(treatment.id);
//      }
//    });
//    this.selection = treatments.join(', ');
//    this.count = patients.length;
//  }

}//    }
