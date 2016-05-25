import { Component, Output, EventEmitter } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
@Component({
  selector: 'filter-textbox',
  template: `
    <form>
         <input type="text" 
                [(ngModel)]="model.filter" 
                (keyup)="filterChanged($event)"  />
    </form>
  `,
  directives: [FORM_DIRECTIVES, MD_INPUT_DIRECTIVES]
})
export class FilterTextboxComponent {

  
    model: { filter: string } = { filter: null };
    
    @Output()
    changed: EventEmitter<any> = new EventEmitter();

    filterChanged(event: any) {
        event.preventDefault();
        this.changed.emit(this.model.filter); //Raise changed event
    }
}
