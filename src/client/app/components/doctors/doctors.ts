import { Component, Input, Output, EventEmitter } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {MdToolbar} from '@angular2-material/toolbar';
import { Sorter } from '../../shared/sorter';
import { FilterTextboxComponent } from './filterTextbox.component';
import { SortByDirective } from '../../shared/directives/sortby.directive';
import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';
import { TrimPipe } from '../../shared/pipes/trim.pipe';
import {MATERIAL_DIRECTIVES} from "ng2-material/index";
import {ICON_CLASS} from '../../shared/constants/app.constants';
import { DoctorFormComponent } from './doctor-form'
import { DoctorList } from './doctor-list'
import { DoctorHeaderComponent } from './doctor-header'
import { Doctor,DoctorBackendService} from '../../services/DoctorBackendService';
import { NotificationService  } from '../../services/notificationService';

@Component({ 
  selector: 'doctors', 
  templateUrl: 'app/components/doctors/doctors.html',
  host: {'[hidden]': 'hidden'},
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, FilterTextboxComponent, SortByDirective, DoctorList, DoctorHeaderComponent, DoctorFormComponent, MATERIAL_DIRECTIVES],
  pipes: [CapitalizePipe, TrimPipe]
})


export class DoctorsComponent {
    selectedDoctor: Doctor;
    subscription: any;
    @Input() doctors: Doctor[];
    
    iconClass: string = ICON_CLASS;
    
    constructor() {
    }

    addDoctor () {
        console.log("Add doctor");
    }

}
