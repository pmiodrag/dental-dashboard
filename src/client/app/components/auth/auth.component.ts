import {Component} from '@angular/core';
import { Router, ROUTER_DIRECTIVES} from '@angular/router';
import {Http} from '@angular/http';
import {AuthHttp, tokenNotExpired, JwtHelper} from 'angular2-jwt/angular2-jwt';
import {MdToolbar} from '@angular2-material/toolbar';
import {MATERIAL_DIRECTIVES} from "ng2-material/index";
import {ICON_CLASS} from '../../shared/constants/app.constants';
import { AuthService } from '../../services/AuthService';

@Component({
    directives: [ROUTER_DIRECTIVES, MATERIAL_DIRECTIVES, MdToolbar],
    selector: 'auth-component',
    templateUrl: 'app/components/auth/auth.component.html'
})

export class AuthComponent {
    iconClass: string = ICON_CLASS; 

    constructor(public http: Http, public authService: AuthService) {        
       // authService.setProfileObject();
    }
}
