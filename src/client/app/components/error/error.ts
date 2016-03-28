//import { Component } from 'angular2/core';
//import { CORE_DIRECTIVES } from 'angular2/common';
//import { RouterLink } from 'angular2/router';
//import { Observable } from 'rxjs/Observable';
//import { DataService } from '../../shared/services/data.service';
//import { Sorter } from '../../shared/sorter';
//import { FilterTextboxComponent } from './filterTextbox.component';
//import { SortByDirective } from '../../shared/directives/sortby.directive';
//import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';
//import { TrimPipe } from '../../shared/pipes/trim.pipe';
//import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";
//import { PacientFormComponent } from './pacient-form'
//@Component({
//  selector: 'show-error', 
//  inputs: ['controlPath: control', 'errorTypes: errors'],
//  template: `
//    <div class="alert alert-danger" *ng-if="errorMessage !== null">{{errorMessage}}</div>
//  `,
//  directives: [NgIf]
//})
////This class requires NgFormModel to be injected versus NgForm (as in show-error.component.ts)
//export class ShowError {
//  ngForm: NgFormModel;
//  controlPath: string;
//  errorTypes: string[];
//  errors: any = {'required': 'This field is required'};
//
//  constructor(@Host() ngForm: NgFormModel) { this.ngForm = ngForm; }
//
//  get errorMessage(): string {
//    var control: AbstractControl = this.ngForm.form.find(this.controlPath);
//    if (control !== undefined && control !== null && control.touched) {
//      for (let errorType of this.errorTypes) {
//        if (control.hasError(errorType)) {
//          return this._errorMessage(errorType);
//        }
//      }
//    }
//    return null;
//  }
//
//  private _errorMessage(errorType: string): string {
//    return this.errors[errorType];
//  }
//}
