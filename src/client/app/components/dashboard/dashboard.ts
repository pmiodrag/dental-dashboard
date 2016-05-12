import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import { RouterLink} from '@angular/router-deprecated';
import {Alerts} from '../alerts/alerts';
import {RdLoading} from '../rd-loading/rd-loading';
import {RdWidget} from '../rd-widget/rd-widget';
import {RdWidgetHeader} from '../rd-widget-header/rd-widget-header';
import {RdWidgetBody} from '../rd-widget-body/rd-widget-body';
import {RdWidgetFooter} from '../rd-widget-footer/rd-widget-footer';

@Component({
  selector: 'dashboard',
  templateUrl: 'app/components/dashboard/dashboard.html',
  styleUrls: ['app/components/dashboard/dashboard.css'],
  directives: [Alerts, RouterLink, RdWidget, RdWidgetHeader, RdWidgetBody, RdWidgetFooter, RdLoading]
})
export class Dashboard {
  constructor() {}
}
