import { Component, Input, EventEmitter } from '@angular/core';
import { FORM_DIRECTIVES, Validators, FormBuilder, ControlGroup, CORE_DIRECTIVES } from '@angular/common';
import { RouterLink} from '@angular/router-deprecated';
import { DiagnoseService, Diagnose } from '../../services/diagnoseService';
import { NotificationService } from '../../services/notificationService';
import { ControlMessages} from '../handlers/control-messages';
import { ValidationService} from '../../shared/services/validation.service';
import { UiStateStore } from '../state/UiStateStore';
import { DiagnoseStore } from '../state/DiagnoseStore';
import {MdPatternValidator,
  MdMinValueValidator,
  MdNumberRequiredValidator,
  MdMaxValueValidator, MATERIAL_DIRECTIVES} from "ng2-material/index";
import {TimepickerComponent, DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {MdToolbar} from '@angular2-material/toolbar';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
@Component({ 
  selector: 'diagnose-form', 
  templateUrl: 'app/components/diagnose/diagnose-form.html',
  providers: [DiagnoseService],
  host: {'[hidden]': 'hidden'},
  directives: [TimepickerComponent, DATEPICKER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES, MATERIAL_DIRECTIVES, MdToolbar, MD_INPUT_DIRECTIVES, RouterLink, ControlMessages]
})


export class DiagnoseFormComponent {
    diagnoseForm: ControlGroup;
    diagnose: Diagnose;
    @Input () diagnoselist: any;  
    @Input() hidden:boolean = true;
    formTitle: string;
    subscription: any;
    submitted = false;
    submitAction: string;    
    
    constructor(fb: FormBuilder, private diagnoseStore: DiagnoseStore, private diagnoseService: DiagnoseService, private notificationService: NotificationService, private uiStateStore: UiStateStore ) {
    
        this.diagnoseForm = fb.group({
          'description': ['',  Validators.compose([            
            Validators.minLength(3),
            Validators.maxLength(300)])],
          'name': ['', Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(300)
          ])]         
        });
    }
  

//    public toggleMode():void {
//      this.ismeridian = !this.ismeridian;
//    };
//
//    public changed():void {
//      console.log('Time time changed to: ' + this.time);
//    };

//    public clear():void {
//      this.time = void 0;
//    };
  
   ngOnInit() {
        this.diagnose = new Diagnose(0, '', '')
        this.subscription = this.notificationService.getFormActionChangeEmitter()
          .subscribe(diagnose => this.onFormActionChange(diagnose)); 
          
    }
    onFormActionChange(diagnose: Diagnose) {
        console.log("onFormActionChange diagnose", diagnose);
        this.diagnose = diagnose;
        if (diagnose.id == -1) {          
          this.formTitle = "Add Diagnose";
           this.submitAction = 'add';
        } else {
            this.formTitle = "Edit Diagnose";
            this.submitAction = 'edit';
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    
    goBack() {     
        this.hidden = true;
        this.diagnoselist.hidden = false;
    }
    onSubmit(diagnose) { 

        console.log("Submit diagnose", diagnose);
           
        if (this.submitAction == 'add') {             
           this.addDiagnose(diagnose); 
        } else {
           this.updateDiagnose(diagnose); 
        }             
        this.submitted = true; 
        this.goBack();
        this.submitted = true; 
    }
    // method to call Store action to create new diagnose
    
    addDiagnose(diagnose) {
       
      //  this.uiStateStore.startBackendAction('Saving Todo...');

        this.diagnoseStore.addDiagnose(diagnose)
            .subscribe(
                res => {},
                err => {
                    this.uiStateStore.endBackendAction();
                }
            );
            this.goBack();
    }
    
     updateDiagnose(diagnose) {
        this.diagnoseStore.updateDiagnose(diagnose)
            .subscribe(
                res => {},
                err => {
                    this.uiStateStore.endBackendAction();
                }
            );
            this.goBack();
    }
    
}