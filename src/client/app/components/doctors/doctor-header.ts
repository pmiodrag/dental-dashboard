import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { NotificationService  } from '../../services/notificationService';
import { Doctor } from '../../services/DoctorBackendService';
import {MdToolbar} from '@angular2-material/toolbar';
import {MATERIAL_DIRECTIVES} from "ng2-material/index";
import {ICON_CLASS} from '../../shared/constants/app.constants';
import { DoctorStore } from '../state/DoctorStore';
import { FilterTextboxComponent } from './filterTextbox.component';
@Component({
    selector: 'doctor-header',
    templateUrl: 'app/components/doctors/doctor-header.html',
    host: { '[hidden]': 'hidden' },
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, MATERIAL_DIRECTIVES, MdToolbar, FilterTextboxComponent],
})
export class DoctorHeaderComponent {

    iconClass: string = ICON_CLASS;
    @Input() hidden: boolean = false;
    @Input() doctorform: any;
    @Input() doctorlist: any;
    doctor: Doctor;
    listDisplayModeEnabled: boolean;

    constructor(private notificationService: NotificationService, private doctorStore: DoctorStore) { }

    addDoctor() {
        this.hidden = true;
        this.doctorlist.hidden = true;
        this.doctorform.hidden = false;
        this.doctor = new Doctor(-1, '', '', '', 2016, '', 'M', '', '', new Date(), '', '', '');
        this.formAction(this.doctor);
    }
    formAction(doctor: Doctor) {
        this.notificationService.emitFormActionChangeEvent(doctor);
    }
    showCardView(show: boolean) {
        this.doctorStore.changeView(show);
    }

    filterChanged(data: string) {
        if (data) {
            data = data.toUpperCase();
            this.doctorStore.filterData(data);
        }
    }
}
