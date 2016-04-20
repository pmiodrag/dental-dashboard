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
//import {DatePicker} from 'ng2-datepicker';
@Component({ 
  selector: 'treatment-form', 
  templateUrl: 'app/components/treatments/treatment-form.html',
  providers: [TreatmentService],
  host: {'[hidden]': 'hidden'},
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES,RouterLink, MATERIAL_DIRECTIVES, ControlMessages]
})


export class TreatmentFormComponent {
    @Input () treatmentlist: any;  
     @Input() hidden:boolean = true;
//  constructor(fb: FormBuilder, private patientService: PatientService, private notificationService: NotificationService ) {
//    
//    this.patientForm = fb.group({
//      'firstname': ['',  Validators.compose([
//        Validators.required,
//        Validators.minLength(3),
//        Validators.maxLength(30)])],
//      'lastname': ['', Validators.compose([
//        Validators.required,
//        Validators.minLength(3),
//        Validators.maxLength(30)
//      ])],
//      'email': ['', ValidationService.emailValidator]
//    });
//  }
  
   
    ngOnInit() {
              
    }
    onFormActionChange(treatment: Treatment) {
        console.log("onFormActionChange patient", treatment);
//        this.patient = patient;
//        if (patient.id == 0) {          
//          this.formTitle = "Add Patient";
//        } else {
//            this.formTitle = "Edit Patient";
//        }
    }
//    ngOnDestroy() {
//        this.subscription.unsubscribe();
//    }
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