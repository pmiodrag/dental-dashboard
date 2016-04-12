import { Component, Input } from 'angular2/core';
import { FORM_DIRECTIVES, Validators, FormBuilder, ControlGroup, CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink } from 'angular2/router';
import { Patient, PatientService } from '../../services/patientService';
import { Treatment, TreatmentService } from '../../services/treatmentService';
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
    treatmentForm: ControlGroup;
    formTitle: string;
    @Input() treatment: Treatment;
    @Input() hidden:boolean = true;
    @Input () treatmentheader: any;
    @Input () treatmentlist: any;
    submitted = false;
    
  constructor(fb: FormBuilder, private treatmentService: TreatmentService) {
     
    this.treatmentForm = fb.group({
      'diagnose': ['',  Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)])],
      'therapy': ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(300)
      ])]
    });
  }
  
   
  ngOnInit() {
      if (this.treatment == null) {
          this.treatment = new Treatment(0, 1, '', '', '', '');
          this.formTitle = "Add Treatment";
      } else {
          this.formTitle = "Edit Treatment";
      }
  
  }
   
    addTreatment (treatment) {   
        console.log("Add treatment", treatment);
        this.treatmentService.addTreatment(treatment).subscribe((res:any) => {         
           console.log("make service call for rest post treatment  "+res);         
        });
    }
    goBack() {     
        this.hidden = true;
        this.treatmentheader.hidden = false;
        this.treatmentlist.hidden = false;
    }
    onSubmit(treatment) { 
        this.addTreatment (treatment);
        this.submitted = true; 
    }
    
}