import { Component, Input } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Diagnose, DiagnoseBackendService } from '../../services/DiagnoseBackendService';
import { DiagnoseStore } from '../state/DiagnoseStore';
import { NotificationService  } from '../../services/notificationService';
import { Sorter } from '../../shared/sorter';
import { SortByDirective } from '../../shared/directives/sortby.directive';
import {MdToolbar} from '@angular2-material/toolbar';
import {MATERIAL_DIRECTIVES} from "ng2-material/index";
import {MdCheckbox} from '@angular2-material/checkbox';
import * as Rx from "rxjs/Rx";
import {List} from 'immutable';
import {asObservable} from "../state/asObservable";
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {ICON_CLASS} from '../../shared/constants/app.constants';
import { AuthService } from '../../services/AuthService';
@Component({ 
  selector: 'diagnose-list',
  providers: [DiagnoseBackendService],
  templateUrl: 'app/components/diagnose/diagnose-list.html',
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES,MATERIAL_DIRECTIVES, MD_INPUT_DIRECTIVES, MdCheckbox, MdToolbar ]
})
export class DiagnoseListComponent {
    name: string;
    description: string;
    title: string = 'Diagnoses';
    diagnose: Diagnose;
    diagnoses : Diagnose[] = [];
    filteredDiagnoses: Diagnose[] = [];
    selection: string ;
    count: number;
    iconClass: string = ICON_CLASS;
    private _diagnoses: Rx.BehaviorSubject<List<Diagnose>> = new Rx.BehaviorSubject(List([]));
    constructor(public authService: AuthService, private notificationService: NotificationService, private diagnoseService: DiagnoseBackendService, private diagnoseStore: DiagnoseStore) {}   
    
    ngOnInit() {
       console.log("DiagnoseListComponent ngOnInit");
       this.diagnoseStore.loadInitialData();
    }
   
    addDiagnose() {     
        let newDiagnose = new Diagnose(0, this.name, this.description);  
        this.diagnoseStore.addDiagnose(newDiagnose)
    }
    deleteDiagnose(diagnose: Diagnose) {
        this.diagnoseStore.deleteDiagnose(diagnose);
    }
  
}
