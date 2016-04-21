import { Component, Input, EventEmitter } from 'angular2/core';
import { FORM_DIRECTIVES, Validators, FormBuilder, ControlGroup, CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink } from 'angular2/router';
import { TreatmentService, Treatment } from '../../services/treatmentService';
import { NotificationService  } from '../../services/notificationService';
import {ControlMessages} from '../handlers/control-messages';
import {ValidationService} from '../../shared/services/validation.service';
import {MdPatternValidator,
  MdMinValueValidator,
  MdNumberRequiredValidator,
  MdMaxValueValidator, MATERIAL_DIRECTIVES} from "ng2-material/all";
import {Timepicker} from 'ng2-bootstrap/ng2-bootstrap';
//import {DatePicker} from 'ng2-datepicker';
@Component({ 
  selector: 'treatment-form', 
  templateUrl: 'app/components/treatments/treatment-form.html',
  providers: [TreatmentService],
  host: {'[hidden]': 'hidden'},
  directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES, RouterLink, MATERIAL_DIRECTIVES, ControlMessages]
})


export class TreatmentFormComponent {
    treatmentForm: ControlGroup;
    treatment: Treatment;
    @Input () treatmentlist: any;  
    @Input() hidden:boolean = true;
    formTitle: string;
    subscription: any;
    submitted = false;
     public hstep:number = 1;
  public mstep:number = 15;
  public ismeridian:boolean = true;

  public mytime:Date = new Date();
  public options:any = {
    hstep: [1, 2, 3],
    mstep: [1, 5, 10, 15, 25, 30]
  };
    
  constructor(fb: FormBuilder, private treatmentService: TreatmentService, private notificationService: NotificationService ) {
    
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

  public update():void {
    let d = new Date();
    d.setHours(14);
    d.setMinutes(0);
    this.mytime = d;
  };

  public changed():void {
    console.log('Time changed to: ' + this.mytime);
  };

  public clear():void {
    this.mytime = void 0;
  };
   ngOnInit() {
        this.treatment = new Treatment(0, 0, '2016-04-14', '', '', '')
        this.subscription = this.notificationService.getFormActionChangeEmitter()
          .subscribe(treatment => this.onFormActionChange(treatment));           
    }
    onFormActionChange(treatment: Treatment) {
        console.log("onFormActionChange patient", treatment);
        this.treatment = treatment;
        if (treatment.id == 0) {          
          this.formTitle = "Add Treatment";
        } else {
            this.formTitle = "Edit Treatment";
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
//  
//    addPatient (patient) {  
//       
//        this.patientService.addPatient(patient).subscribe((res:any) => {         
//           console.log("make service call for rest post pacient  "+res);         
//        });
//    }
    
    
  
    goBack() {     
        this.hidden = true;
        this.treatmentlist.hidden = false;
    }
//    onSubmit(patient) { 
//        this.addPatient (patient);
//        this.submitted = true; 
//        //showPatientForm = true;
//    }
    
}