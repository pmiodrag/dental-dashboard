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
import { CustomSlice } from '../../shared/pipes/slice.pipe';
import {MATERIAL_DIRECTIVES, ITableSelectionChange} from "ng2-material/index";
import { PatientFormComponent } from './patient-form'
import {TimerWrapper} from "@angular/common/src/facade/async";
import { PatientStore } from '../state/PatientStore';
import {MdToolbar} from '@angular2-material/toolbar';
import {List} from 'immutable';
import {asObservable} from "../state/asObservable";
import * as Rx from "rxjs/Rx";
import {ICON_CLASS} from '../../shared/constants/app.constants';
@Component({
    selector: 'patient-list', 
    // providers: [PatientService],
    templateUrl: 'app/components/patients/patient-list.html',
    host: { '[hidden]': 'hidden' },
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, MATERIAL_DIRECTIVES, MdToolbar, FilterTextboxComponent, SortByDirective],
    pipes: [CapitalizePipe, TrimPipe, ValuesPipe, CustomSlice]
})


export class PatientList {
    pagination = {
        currentPage: 1,
        itemsPerPage: 5,
        totalItems: 0
    };
    start: number = 0;
    end: number = 3;
    availableLength: Array<number> = [5, 10, 20];
    /**
    * True to show the source code for the example
    */
    public showSource: boolean = false;
    private showTabs: boolean = false;
    iconClass: string = ICON_CLASS;
    title: string;
    toggleID: number;
    filterText: string;
    @Input() listDisplayModeEnabled: boolean;
    filteredPatients: Patient[] = [];
    sorter: Sorter;
    patient: Patient;
    @Input() hidden: boolean = false;
    @Input() patients: Patient[];
    @Input() selected: Patient;
    @Input() patientheader: any;
    @Input() patientform: any;
    @Output() selectedChange: EventEmitter<any> = new EventEmitter();
    selection: string;
    count: number;
    private _patients: Rx.BehaviorSubject<List<Patient>> = new Rx.BehaviorSubject(List([]));
    constructor(private patientService: PatientBackendService, private notificationService: NotificationService, private patientStore: PatientStore) {
        this.refreshPatients();
    }

    ngOnInit() {
        this.title = 'Patients';
        this.filterText = 'Filter Patients:';
        this.listDisplayModeEnabled = false;
        this.sorter = new Sorter();
        console.log(this.patientStore.patientsSize);
    }

    refreshPatients() {
        this.start = (this.pagination.currentPage - 1) * this.pagination.itemsPerPage;
        this.end = this.start + this.pagination.itemsPerPage;
        this.patientStore.setIndexes(this.start, this.end);
    }
    detectChange(event) {
        if (event !== undefined && event.name === 'pagination_changed' && event.pagination !== undefined) {
            this.pagination = event.pagination;
            this.refreshPatients();
        }
    }

    hideElements() {
        this.hidden = true;
        this.patientheader.hidden = true;
        this.patientform.hidden = false;
    }
    deletePatient(patient: Patient) {
        this.patientStore.deletePatient(patient);
    }
    addPatient() {
        this.hideElements();
        this.patient = new Patient(-1, '', '', '', 'M', '', '', new Date(), '', '', '');
        this.formAction(this.patient);
    }
    editPatient(patient: Patient) {
        this.selectedChange.next(patient);
        this.hideElements();
        this.formAction(patient);
    }
    formAction(patient: Patient) {
        // console.log('formAction ' + action);
        this.notificationService.emitFormActionChangeEvent(patient);
    }

    showCardView(show: boolean) {
        this.patientStore.changeView(show);
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

    change(data: ITableSelectionChange) {
        let patientsSelected = [];
        // let p = this.patientStore.patients.map(patient => console.log("patient", patient));
        this.patientStore.patients.forEach((patients: List<Patient>) => {
            console.log("patients", patients, data);
            patients.forEach((patient: Patient) => {
                console.log("patient", patient);
                if (data.values.indexOf(patient.id) !== -1) {
                    patientsSelected.push(patient.id);
                    console.log("patientsSelected", patientsSelected);
                }
            })
            //     
        });
        this.selection = patientsSelected.join(', ');
        this.count = patientsSelected.length;
    }

}
