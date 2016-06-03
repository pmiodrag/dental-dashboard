import { Component, Input } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { ROUTER_DIRECTIVES, RouteSegment } from '@angular/router';
import { Diagnose, DiagnoseBackendService } from '../../services/DiagnoseBackendService';
import { DiagnoseStore } from '../state/DiagnoseStore';
import { NotificationService  } from '../../services/notificationService';
import { Sorter } from '../../shared/sorter';
import { SortByDirective } from '../../shared/directives/sortby.directive';
import {MdToolbar} from '@angular2-material/toolbar';
import {MATERIAL_DIRECTIVES, ITableSelectionChange} from "ng2-material/index";
import * as Rx from "rxjs/Rx";
import {List} from 'immutable';
import {asObservable} from "../state/asObservable";
@Component({ 
  selector: 'diagnose-list',
  providers: [DiagnoseBackendService],
  templateUrl: 'app/components/diagnoses/diagnose-list.html',
  host: {'[hidden]': 'hidden'},
  styleUrls : ['styles/selectable_usage.css'],
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES,MATERIAL_DIRECTIVES, MdToolbar ]
})
export class DiagnoseListComponent {
	
    title: string = 'Diagnoses';
    diagnose: Diagnose;
    diagnoses : Diagnose[] = [];
    filteredDiagnoses: Diagnose[] = [];
    selection: string ;
    count: number;
    @Input() hidden:boolean = false;
    @Input () diagnoseform: any;  
    private _diagnoses: Rx.BehaviorSubject<List<Diagnose>> = new Rx.BehaviorSubject(List([]));
    constructor(private notificationService: NotificationService, private diagnoseService: DiagnoseBackendService, private diagnoseStore: DiagnoseStore) {}   
    
    ngOnInit() {
       console.log("DiagnoseListComponent ngOnInit");
       this.diagnoseStore.loadInitialData();
    }
    
   change(data: ITableSelectionChange) {
    let diagnoses = [];
    console.log("data", data);
    this.filteredDiagnoses.forEach((diagnose: Diagnose) => {
        console.log("diagnose", diagnose);
      if (data.values.indexOf(diagnose.id) !== -1) {
        diagnoses.push(diagnose.id);
      }
    });
    this.selection = diagnoses.join(', ');
    this.count = diagnoses.length;
  }
  
   // open diagnose form to add new diagnose.
    addDiagnose () {
        this.hidden = true;
        this.diagnoseform.hidden = false;
        this.diagnose = new Diagnose(-1, '', '')
        this.formAction(this.diagnose);
    }
    
    deleteDiagnose(diagnose: Diagnose) {
        this.diagnoseStore.deleteDiagnose(diagnose);
    }
    editDiagnose(diagnose: Diagnose) {
        this.hidden = true;
        this.diagnoseform.hidden = false;
        this.formAction(diagnose);
    }
     formAction(diagnose: Diagnose) {
        console.log('DiagnoseListComponent formAction diagnose', diagnose);
        this.notificationService.emitFormActionChangeEvent(diagnose);
    }
  
}
