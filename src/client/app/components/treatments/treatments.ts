import { Component, Input } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink } from 'angular2/router';
import { Observable } from 'rxjs/Observable';
import { Sorter } from '../../shared/sorter';
import { FilterTextboxComponent } from './filterTextbox.component';
import { SortByDirective } from '../../shared/directives/sortby.directive';
import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';
import { TrimPipe } from '../../shared/pipes/trim.pipe';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";
import { TreatmentFormComponent } from './treatment-form'
import { TreatmentList } from './treatment-list'
import { Treatment, TreatmentService } from '../../services/treatmentService';
@Component({ 
  selector: 'treatments', 
  templateUrl: 'app/components/treatments/treatments.html',
   host: {'[hidden]': 'hidden'},
   providers: [TreatmentService],
  directives: [CORE_DIRECTIVES, RouterLink, FilterTextboxComponent, SortByDirective, TreatmentList, MATERIAL_DIRECTIVES],
  pipes: [CapitalizePipe, TrimPipe]
})


export class TreatmentsComponent {
  selectedTreatment: Treatment;
  @Input() treatments: Treatment[];
  showTreatmentForm: boolean;
   
   ngOnInit() {
       console.log("this.showTreatmentForm before", this.showTreatmentForm);
       this.showTreatmentForm = false;
   }
   openTreatmentForm () {
      this.showTreatmentForm = true;
  }
  
}

