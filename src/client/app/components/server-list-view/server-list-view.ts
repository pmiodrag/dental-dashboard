import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'server-list-view',
  properties: ['model'],
  templateUrl: 'app/components/server-list-view/server-list-view.html',
  directives: [CORE_DIRECTIVES]
})
export class ServerListView {

  model:any[];

  constructor() {
    this.model = [];
  }
}
