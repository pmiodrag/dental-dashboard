import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { ROUTER_DIRECTIVES} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Doctor, DoctorBackendService } from '../../services/DoctorBackendService';
import { NotificationService  } from '../../services/notificationService';
import { Sorter } from '../../shared/sorter';
import { FilterTextboxComponent } from './filterTextbox.component';
import { SortByDirective } from '../../shared/directives/sortby.directive';
import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';
import { TrimPipe } from '../../shared/pipes/trim.pipe';
import { ValuesPipe } from '../../shared/pipes/values.pipe';
import {MATERIAL_DIRECTIVES, ITableSelectionChange} from "ng2-material/index";
import { DoctorFormComponent } from './doctor-form'
import {TimerWrapper} from "@angular/common/src/facade/async";
import { DoctorStore } from '../state/DoctorStore';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon/icon';
import {List} from 'immutable';
import {asObservable} from "../state/asObservable";
import * as Rx from "rxjs/Rx";
import {ICON_CLASS} from '../../shared/constants/app.constants';
import {DOCTOR_OWNER} from '../../shared/constants/app.constants';
@Component({
    selector: 'doctor-list', 
    // providers: [DoctorService],
    templateUrl: 'app/components/doctors/doctor-list.html',
    host: { '[hidden]': 'hidden' },
    providers: [MdIconRegistry],
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, MATERIAL_DIRECTIVES, MdToolbar, FilterTextboxComponent, SortByDirective, MdIcon],
    pipes: [CapitalizePipe, TrimPipe, ValuesPipe]
})


export class DoctorList {
    /**
    * True to show the source code for the example
    */
    public showSource: boolean = false;
    private showTabs: boolean = false;
    iconClass: string = ICON_CLASS;
    owner: string = DOCTOR_OWNER;
    title: string;
    toggleID: number;
    filterText: string;
    @Input() listDisplayModeEnabled: boolean;
    filteredDoctors: Doctor[] = [];
    sorter: Sorter;
    doctor: Doctor;
    @Input() hidden: boolean = false;
    @Input() doctors: Doctor[];
    @Input() selected: Doctor;
    @Input() doctorheader: any;
    @Input() doctorform: any;
    @Output() selectedChange: EventEmitter<any> = new EventEmitter();
    selection: string;
    count: number;
    private _doctors: Rx.BehaviorSubject<List<Doctor>> = new Rx.BehaviorSubject(List([]));
    constructor(private doctorService: DoctorBackendService, mdIconRegistry: MdIconRegistry, private notificationService: NotificationService, private doctorStore: DoctorStore) {
        mdIconRegistry.addSvgIcon('F', 'assets/images/svg/human-female.svg');
        mdIconRegistry.addSvgIcon('M', 'assets/images/svg/human-male.svg');
    }

    ngOnInit() {
        this.title = 'Doctors';
        this.filterText = 'Filter Doctors:';
        this.listDisplayModeEnabled = false;
        this.sorter = new Sorter();
    }
    hideElements() {
        this.hidden = true;
        this.doctorheader.hidden = true;
        this.doctorform.hidden = false;
    }
    deleteDoctor(doctor: Doctor) {
        this.doctorStore.deleteDoctor(doctor);
    }
    addDoctor() {
        this.hideElements();
        this.doctor = new Doctor(-1, '', '', '', 2016, '', 'M', '', '', new Date(), '', '', '');
        this.formAction(this.doctor);
    }
    editDoctor(doctor: Doctor) {
        this.selectedChange.next(doctor);
        this.hideElements();
        this.formAction(doctor);
    }
    formAction(doctor: Doctor) {
        // console.log('formAction ' + action);
        this.notificationService.emitFormActionChangeEvent(doctor);
    }
    
    showCardView(show: boolean) {
        this.doctorStore.changeView(show);
    }

    sort(prop: string) {
        //Check for complex type such as 'state.name'
        if (prop && prop.indexOf('.')) {

        }
        this.sorter.sort(this.filteredDoctors, prop);
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

    change(data: ITableSelectionChange) {
        let doctorsSelected = [];
        // let p = this.doctorStore.doctors.map(doctor => console.log("doctor", doctor));
        this.doctorStore.doctors.forEach((doctors: List<Doctor>) => {
            console.log("doctors", doctors, data);
            doctors.forEach((doctor: Doctor) => {
                console.log("doctor", doctor);
                if (data.values.indexOf(doctor.id) !== -1) {
                    doctorsSelected.push(doctor.id);
                    console.log("doctorsSelected", doctorsSelected);
                }
            })
            //     
        });
        this.selection = doctorsSelected.join(', ');
        this.count = doctorsSelected.length;
    }
}
