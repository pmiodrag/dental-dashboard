import {Component} from '@angular/core';
import { Router, ROUTER_DIRECTIVES} from '@angular/router';
import { RouteConfig , RouterLink, CanActivate} from '@angular/router-deprecated';
import {Http} from '@angular/http';
import {FORM_PROVIDERS} from '@angular/common';
import {AuthHttp, tokenNotExpired, JwtHelper} from 'angular2-jwt/angular2-jwt';
import {MdButton} from '@angular2-material/button';
import {MdToolbar} from '@angular2-material/toolbar';
//import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";
declare var Auth0Lock;


@Component({
    directives: [ROUTER_DIRECTIVES, MdButton, MdToolbar],
    selector: 'auth-component',
    templateUrl: 'app/components/auth/auth.component.html'
})

export class AuthComponent {
    jsonObj: JSON;
    picture: string;
    lock = new Auth0Lock('9NdeCaZbpddcqM34xZ8BKcZcwMfPqFNl', 'twinsoft.eu.auth0.com');
    //lock = new Auth0Lock('AUTH0_CLIENT_ID', 'AUTH0_DOMAIN');
    jwtHelper: JwtHelper = new JwtHelper();
    profile: string;
    name: string;

    constructor(public http: Http, public authHttp: AuthHttp) {
        this.profile = localStorage.getItem('profile');
        this.setProfileObject();
    }

    login() {
        this.lock.show((err: string, profile: string, id_token: string) => {
            if (err) {
                throw new Error(err);
            }
            localStorage.setItem('profile', JSON.stringify(profile));
            localStorage.setItem('id_token', id_token);
            this.setProfileObject();
        });
    }
    setProfileObject() {
        this.profile = localStorage.getItem('profile');
        this.jsonObj = JSON.parse(this.profile);
        console.log(" this.jsonObj == ", this.jsonObj);
        if (this.jsonObj != null) {
            this.picture = this.jsonObj['picture'];
            this.name = this.jsonObj['name'];
        } else {
            this.picture = "assets/img/avatar.jpg"
            this.name = "";
        }
    }
    logout() {
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');
        this.picture = "assets/img/avatar.jpg";
        this.name = "";
    }

    loggedIn() {
        return tokenNotExpired();
    }

    tokenSubscription() {
        this.authHttp.tokenStream.subscribe(
            data => console.log(data),
            err => console.log(err),
            () => console.log('Complete')
        );
    }
    useJwtHelper() {
        var token = localStorage.getItem('id_token');
        console.log(
            this.jwtHelper.decodeToken(token),
            this.jwtHelper.getTokenExpirationDate(token),
            this.jwtHelper.isTokenExpired(token)
        );
    }

}
