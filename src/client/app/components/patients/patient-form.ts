import { Component, Input, EventEmitter } from '@angular/core';
import { FORM_DIRECTIVES, Validators, FormBuilder, ControlGroup, CORE_DIRECTIVES } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Patient, PatientBackendService } from '../../services/PatientBackendService';
import { NotificationService  } from '../../services/notificationService';
import {ControlMessages} from '../handlers/control-messages';
import {ValidationService} from '../../shared/services/validation.service';
import {DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {FILE_UPLOAD_DIRECTIVES, FileUploader} from 'ng2-file-upload/ng2-file-upload';
import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';
import { PatientStore } from '../state/PatientStore';
import { UiStateStore } from '../state/UiStateStore';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MdRadioGroup, MdRadioButton} from '@angular2-material/radio';
import {MdRadioDispatcher} from '@angular2-material/radio/radio_dispatcher';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdProgressBar} from '@angular2-material/progress-bar';
import {MdPatternValidator,
MdMinValueValidator,
MdNumberRequiredValidator,
MdMaxValueValidator, MATERIAL_DIRECTIVES} from "ng2-material/index";
import {ICON_CLASS} from '../../shared/constants/app.constants';
import {OVERLAY_PROVIDERS} from '@angular2-material/core/overlay/overlay';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon/icon';
//import * as moment from 'moment';
@Component({
    selector: 'patient-form',
    templateUrl: 'app/components/patients/patient-form.html',
    providers: [MdRadioDispatcher, MdIconRegistry, OVERLAY_PROVIDERS],
    host: { '[hidden]': 'hidden' },
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, DATEPICKER_DIRECTIVES, FORM_DIRECTIVES, MD_INPUT_DIRECTIVES,
        MdRadioGroup, MdRadioButton, MdIcon, MdToolbar, ControlMessages, MATERIAL_DIRECTIVES, FILE_UPLOAD_DIRECTIVES, MdProgressBar],
    pipes: [CapitalizePipe]
})


export class PatientFormComponent {
    iconClass: string = ICON_CLASS;

    public uploader: FileUploader = new FileUploader({ url: '/patient/upload' });

    patientForm: ControlGroup;
    @Input() patient: Patient;
    @Input() hidden: boolean = true;
    @Input() patientheader: any;
    @Input() patientlist: any;
    formTitle: string;
    submitAction: string;
    subscription: any;
    submitted = false;

    avatarData: any[] = [{
        id: 'M',
        title: 'M',
        value: 'M',
        color: 'md-primary'
    }, {
            id: 'F',
            title: 'F',
            value: 'F',
            color: 'md-warn'
        }];

    constructor(fb: FormBuilder, mdIconRegistry: MdIconRegistry, private patientStore: PatientStore, private uiStateStore: UiStateStore, private patientService: PatientBackendService, private notificationService: NotificationService) {
        //   console.log("uploader", this.uploader);
        mdIconRegistry.addSvgIcon('F', 'assets/images/svg/human-female.svg');
        mdIconRegistry.addSvgIcon('M', 'assets/images/svg/human-male.svg');
        this.patientForm = fb.group({
            'firstname': ['', Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(30)])],
            'lastname': ['', Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(30)
            ])],
            'email': ['', ValidationService.emailValidator]
        });

    }


    ngOnInit() {
        this.patient = new Patient(0, '', '', '', 'M', '', '', new Date(), '', '', '', '', '', '');
        this.subscription = this.notificationService.getFormActionChangeEmitter()
            .subscribe(patient => this.onFormActionChange(patient));
    }
    onFormActionChange(patient: Patient) {
        this.patient = patient;
        if (patient.id == -1) {
            this.formTitle = "Add Patient";
            this.submitAction = 'add';
        } else {
            this.formTitle = "Edit Patient";
            this.submitAction = 'edit';
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    addPatient(patient) {
        if(this.uploader.queue && this.uploader.queue.length > 0) {
           console.log("Upload photo url", this.uploader.queue[0].file.name); 
           patient.photo = this.uploader.queue[0].file.name;
        } else {
           patient.photo = "";
        }
        
        
        this.patientStore.addPatient(patient)
        this.goBack();
    }

    updatePatient(patient) {
        if(this.uploader.queue && this.uploader.queue.length > 0) {
           console.log("Upload photo url", this.uploader.queue[0].file.name); 
           patient.photo = this.uploader.queue[0].file.name;
        } else {
           patient.photo = "";
        }
        
        this.patientStore.updatePatient(patient)
            .subscribe(
            res => { },
            err => {
                this.uiStateStore.endBackendAction();
            }
            );
        this.goBack();
    }

    goBack() {
        this.hidden = true;
        this.patientheader.hidden = false;
        this.patientlist.hidden = false;
    }

    onSubmit(patient) { 
        // patient.birthdate.setHours(12);
        if (this.submitAction == 'add') {
            this.addPatient(patient);
        } else {
            this.updatePatient(patient);
        }
        this.submitted = true;
        this.goBack();
    }


}