import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
@Component({
  selector: 'alerts',
  templateUrl: 'app/components/alerts/alerts.html',
  directives: [CORE_DIRECTIVES]
})
export class Alerts {

  alerts:any[] = [{
    type: 'success',
    msg: 'Thanks for visiting! Feel free to create pull requests to improve the dashboard!'
  }, {
    type: 'danger',
    msg: 'Found a bug? Create an issue with as many details as you can.'
  }];

  addAlert() {
    this.alerts.push({
      msg: 'Another alert!'
    });
  }

  closeAlert(index) {
    this.alerts.splice(index, 1);
  }
}
