import { Component, Input, EventEmitter } from '@angular/core';
import { FORM_DIRECTIVES, Validators, FormBuilder, ControlGroup, CORE_DIRECTIVES } from '@angular/common';
import { RouterLink} from '@angular/router-deprecated';
import { TreatmentService, Treatment } from '../../services/treatmentService';
import { NotificationService } from '../../services/notificationService';
import { ControlMessages} from '../handlers/control-messages';
import { ValidationService} from '../../shared/services/validation.service';
import { UiStateStore } from '../state/UiStateStore';
import { TreatmentStore } from '../state/TreatmentStore';
import {MdPatternValidator,
  MdMinValueValidator,
  MdNumberRequiredValidator,
  MdMaxValueValidator, MATERIAL_DIRECTIVES} from "ng2-material/index";
import {TimepickerComponent, DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {MdToolbar} from '@angular2-material/toolbar';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
@Component({ 
  selector: 'treatment-form', 
  templateUrl: 'app/components/treatments/treatment-form.html',
  providers: [TreatmentService],
  host: {'[hidden]': 'hidden'},
  directives: [TimepickerComponent, DATEPICKER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES, MATERIAL_DIRECTIVES, MdToolbar, MD_INPUT_DIRECTIVES, RouterLink, ControlMessages]
})


export class TreatmentFormComponent {
    treatmentForm: ControlGroup;
    treatment: Treatment;
    @Input () treatmentlist: any;  
    @Input() hidden:boolean = true;
    formTitle: string;
    subscription: any;
    submitted = false;
    submitAction: string;
    // Date and time propertiesTimepicker
    date: Date = new Date();
    public hstep:number = 1;
    public mstep:number = 15;
    public ismeridian:boolean = true;
    public time:Date = new Date();
    public options:any = {
        hstep: [1, 2, 3],
        mstep: [1, 5, 10, 15, 25, 30]
    };
    
    constructor(fb: FormBuilder, private treatmentStore: TreatmentStore, private treatmentService: TreatmentService, private notificationService: NotificationService, private uiStateStore: UiStateStore ) {
    
        this.treatmentForm = fb.group({
          'therapy': ['',  Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(300)])],
          'diagnose': ['', Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(300)
          ])],
          'price': ['', Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(10)
          ])]
        });
    }
  

    public toggleMode():void {
      this.ismeridian = !this.ismeridian;
    };

    public changed():void {
      console.log('Time time changed to: ' + this.time);
    };

    public clear():void {
      this.time = void 0;
    };
  
   ngOnInit() {
        this.treatment = new Treatment(0, 1, new Date(), '', '', '')
        this.subscription = this.notificationService.getFormActionChangeEmitter()
          .subscribe(treatment => this.onFormActionChange(treatment)); 
          
    }
    onFormActionChange(treatment: Treatment) {
        console.log("onFormActionChange treatment", treatment);
        this.treatment = treatment;
        if (treatment.id == -1) {          
          this.formTitle = "Add Treatment";
           this.submitAction = 'add';
        } else {
            this.formTitle = "Edit Treatment";
            this.submitAction = 'edit';
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    
    goBack() {     
        this.hidden = true;
        this.treatmentlist.hidden = false;
    }
    onSubmit(treatment) { 
//        treatment.treatmentdate = this.date;
//        treatment.treatmentdate.setHours(this.time.getHours());
//        treatment.treatmentdate.setMinutes(this.time.getMinutes());
//        console.log("Submit treatment datetime() ", treatment.treatmentdate);
//        console.log("Submit treatment date() ", this.date );
//        console.log("Submit treatment time() ", this.time, "this.time.getMinutes()", this.time.getMinutes() )   
        console.log("Submit treatment", treatment);
           
        if (this.submitAction == 'add') {             
           this.addTreatment(treatment); 
        } else {
           this.updateTreatment(treatment); 
        }             
        this.submitted = true; 
        this.goBack();
        this.submitted = true; 
    }
    // method to call Store action to create new treatment
    
    addTreatment(treatment) {
        this.treatmentStore.addTreatment(treatment)           
        this.goBack();
    }
    
     updateTreatment(treatment) {
        this.treatmentStore.updateTreatment(treatment)
            .subscribe(
                res => {},
                err => {
                    this.uiStateStore.endBackendAction();
                }
            );
            this.goBack();
    }
    
}