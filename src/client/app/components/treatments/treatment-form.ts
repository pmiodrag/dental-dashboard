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
import {Timepicker, DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
@Component({ 
  selector: 'treatment-form', 
  templateUrl: 'app/components/treatments/treatment-form.html',
  providers: [TreatmentService],
  host: {'[hidden]': 'hidden'},
  directives: [Timepicker, DATEPICKER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES, RouterLink, MATERIAL_DIRECTIVES, ControlMessages]
})


export class TreatmentFormComponent {
    treatmentForm: ControlGroup;
    treatment: Treatment;
    @Input () treatmentlist: any;  
    @Input() hidden:boolean = true;
    formTitle: string;
    subscription: any;
    submitted = false;
    date: Date = new Date();
    public hstep:number = 1;
    public mstep:number = 15;
    public ismeridian:boolean = true;

    public time:Date = new Date();
//   public datetime:Date = new Date();
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
    
    goBack() {     
        this.hidden = true;
        this.treatmentlist.hidden = false;
    }
    onSubmit(treatment) { 
        treatment.datetime = this.date;
        treatment.datetime.setHours(this.time.getHours());
        treatment.datetime.setMinutes(this.time.getMinutes());
        console.log("Submit treatment datetime() ", treatment.datetime);
        console.log("Submit treatment date() ", this.date );
        console.log("Submit treatment time() ", this.time, "this.time.getMinutes()", this.time.getMinutes() )   
        this.addTreatment(treatment);    
        this.submitted = true; 
    }
    
    addTreatment(treatment) {        
        this.treatmentService.addPatient(treatment).subscribe((res:any) => {         
           console.log("make service call for rest post pacient  "+res);         
        });
    }
    ;
    
}