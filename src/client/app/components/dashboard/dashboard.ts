import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import { RouterLink} from 'angular2/router';
import {Alerts} from '../alerts/alerts';


import {RdLoading} from '../rd-loading/rd-loading';
import {RdWidget} from '../rd-widget/rd-widget';

import {RdWidgetHeader} from '../rd-widget-header/rd-widget-header';
import {RdWidgetBody} from '../rd-widget-body/rd-widget-body';
import {RdWidgetFooter} from '../rd-widget-footer/rd-widget-footer';

import {ServerListView} from '../server-list-view/server-list-view';
import {ServerListService} from '../../services/server_list';

import {UserListView} from '../user-list-view/user-list-view';
import {UserListService} from '../../services/user_list';


@Component({
  selector: 'dashboard',
  providers: [ServerListService],
  templateUrl: 'app/components/dashboard/dashboard.html',
  styleUrls: ['app/components/dashboard/dashboard.css'],
  directives: [Alerts, RouterLink, RdWidget, RdWidgetHeader, RdWidgetBody, RdWidgetFooter, RdLoading, ServerListView, UserListView]
})
export class Dashboard {

  servers:any[];
  users:any[];

  serverListService:ServerListService;
  userListService:UserListService;

  constructor() {
    this.serverListService = new ServerListService();
    /*TODO: Inject*/
    this.servers = this.serverListService.all();

    this.userListService = new UserListService();
    /*TODO: Inject*/
    this.users = this.userListService.all();
  }
}
