import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
@Component({
  selector: 'user-list-view',
  properties: ['model'],
  templateUrl: 'app/components/user-list-view/user-list-view.html',
  directives: [CORE_DIRECTIVES]
})
export class UserListView {

  model:any[];

  constructor() {
    this.model = [];
  }
}
