import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {ROUTER_DIRECTIVES} from '@angular/router';
import { DiagnoseStore } from '../state/DiagnoseStore';
import { PatientStore } from '../state/PatientStore';
import {ICON_CLASS} from '../../shared/constants/app.constants';
import { AuthService } from '../../services/AuthService';
@Component({
  selector: 'dashboard',
  templateUrl: 'app/components/dashboard/dashboard.html',
  styleUrls: ['styles/dashboard.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class Dashboard {
    diagnosesSize : number ;
    iconClass: string = ICON_CLASS;
    
    constructor(public authService: AuthService, private diagnoseStore: DiagnoseStore, private patientStore: PatientStore) {
       console.log("authService.isAdmin()", authService.isAdmin());
    }
}
