import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

@Component({
  selector: 'rd-widget-body',
  properties: ['loading', 'classes'],
  templateUrl: 'app/components/rd-widget-body/rd-widget-body.html',
  directives: [CORE_DIRECTIVES]
})
export class RdWidgetBody {
  loading:boolean;
  classes:string;

  constructor() {
    this.loading = false;
    this.classes = '';
  }
}
