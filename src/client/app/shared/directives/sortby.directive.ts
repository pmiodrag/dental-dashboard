import { Directive, Output, ElementRef, EventEmitter } from '@angular/core';

@Directive({
  selector: '[sort-by]'
})
export class SortByDirective {
	
    sortProperty: string;
  
  @Output()
	sorted: EventEmitter<any> = new EventEmitter();
	
    constructor(el: ElementRef) {
      this.sortProperty = el.nativeElement.getAttribute('sort-by');
      el.nativeElement.addEventListener('click', (event: any) => this.elementClicked(event));
      this.sorted = new EventEmitter();
    }

    elementClicked(event: any) {
        event.preventDefault();
        this.sorted.next(this.sortProperty); //Raise clicked event
    }

}