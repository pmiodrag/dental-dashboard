import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {ROUTER_DIRECTIVES} from '@angular/router';
import { DiagnoseStore } from '../state/DiagnoseStore';
import {ICON_CLASS} from '../../shared/constants/app.constants';
@Component({
  selector: 'dashboard',
  templateUrl: 'app/components/dashboard/dashboard.html',
  styleUrls: ['styles/dashboard.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class Dashboard {
    diagnosesSize : number ;
    iconClass: string = ICON_CLASS;
    
    constructor(private diagnoseStore: DiagnoseStore) {
       console.log("this._diagnoses", diagnoseStore.diagnosesSubject);
//      let diagnoses = diagnoseStore.diagnosesSubject.getValue();
//      console.log("diagnoses", diagnoses.size)
    }
}
