import { Component, Input, EventEmitter } from '@angular/core';
import { FORM_DIRECTIVES, Validators, FormBuilder, ControlGroup, CORE_DIRECTIVES } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Doctor, DoctorBackendService } from '../../services/DoctorBackendService';
import { NotificationService  } from '../../services/notificationService';
import {ControlMessages} from '../handlers/control-messages';
import {ValidationService} from '../../shared/services/validation.service';
import {DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {FILE_UPLOAD_DIRECTIVES, FileUploader} from 'ng2-file-upload/ng2-file-upload';
import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';
import { DoctorStore } from '../state/DoctorStore';
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

@Component({ 
  selector: 'doctor-form', 
  templateUrl: 'app/components/doctors/doctor-form.html',
  providers: [MdRadioDispatcher],
  host: {'[hidden]': 'hidden'},
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, DATEPICKER_DIRECTIVES, FORM_DIRECTIVES, MD_INPUT_DIRECTIVES,
            MdRadioGroup, MdRadioButton, MdToolbar, ControlMessages, MATERIAL_DIRECTIVES, FILE_UPLOAD_DIRECTIVES, MdProgressBar],
  pipes: [CapitalizePipe]
})


export class DoctorFormComponent {
    iconClass: string = ICON_CLASS;
    
    public uploader:FileUploader = new FileUploader({url: '/doctor/upload'});
    doctorForm: ControlGroup;
    @Input() doctor: Doctor;
    @Input() hidden:boolean = true;
    @Input () doctorheader: any;
    @Input () doctorlist: any;
    formTitle: string;
    submitAction: string;
    subscription: any;
    submitted = false;
    
    data: any = {
        group1: 'Banana',
        group2: '2',
        group3: 'avatar-1'
      };
    avatarData: any[] = [{
        id: 'assets/images/m.png',
        title: 'Male',
        value: 'M',
        color:'md-primary'
    }, {
        id: 'assets/images/f.png',
        title: 'Female',
        value: 'F',
         color:'md-warn'
    }];
   
  constructor(fb: FormBuilder, private doctorStore: DoctorStore, private uiStateStore: UiStateStore, private doctorService: DoctorBackendService, private notificationService: NotificationService ) {
  
    this.doctorForm = fb.group({
      'firstname': ['',  Validators.compose([
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
        this.doctor = new Doctor(0, '', '', '', 2016, '', 'M', '', '', new Date(), '', '', '');
        this.subscription = this.notificationService.getFormActionChangeEmitter()
          .subscribe(doctor => this.onFormActionChange(doctor));           
    }
    onFormActionChange(doctor: Doctor) {
        console.log("onFormActionChange doctor", doctor);
        this.doctor = doctor;
        if (doctor.id == -1) {          
          this.formTitle = "Add Doctor";
          this.submitAction = 'add';
        } else {
            this.formTitle = "Edit Doctor";
            this.submitAction = 'edit';
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    
    addDoctor(doctor) {       
        this.doctorStore.addDoctor(doctor)
        this.goBack();
    }
    
    updateDoctor(doctor) {
        this.doctorStore.updateDoctor(doctor)
            .subscribe(
                res => {},
                err => {
                    this.uiStateStore.endBackendAction();
                }
            );
            this.goBack();
    }
      
    goBack() {     
        this.hidden = true;
        this.doctorheader.hidden = false;
        this.doctorlist.hidden = false;
    }
    
    onSubmit(doctor) { 
       // doctor.birthdate.setHours(12);
        if (this.submitAction == 'add') {             
            this.addDoctor (doctor);
        } else {
            this.updateDoctor(doctor);
        }             
        this.submitted = true; 
        this.goBack();
    }
 
 
    
}