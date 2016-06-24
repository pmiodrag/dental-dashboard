import {Injectable,Inject} from '@angular/core';
import {Http} from '@angular/http';
import {AuthHttp, tokenNotExpired, JwtHelper} from 'angular2-jwt/angular2-jwt';
import {AUTH0_CLIENT_ID, AUTH0_DOMAIN} from '../shared/constants/app.constants';

declare var Auth0Lock: any;

 
@Injectable()
export class AuthService {
    jsonObj: JSON;
    picture: string;
    lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN);
    jwtHelper: JwtHelper = new JwtHelper();
    profile: string;
    name: string;

    constructor(public http: Http, public authHttp: AuthHttp) {
        this.profile = localStorage.getItem('profile');
        this.setProfileObject();
    }

    public login() {
        this.lock.show((err: string, profile: string, id_token: string) => {
            if (err) {
                throw new Error(err);
            }
            localStorage.setItem('profile', JSON.stringify(profile));
            localStorage.setItem('id_token', id_token);
            this.setProfileObject();
        });
    }
    public setProfileObject() {
        this.profile = localStorage.getItem('profile');
        this.jsonObj = JSON.parse(this.profile);
        if (this.jsonObj != null) {
            this.picture = this.jsonObj['picture'];
            this.name = this.jsonObj['name'];
        } else {
            this.picture = "assets/img/avatar.jpg"
            this.name = "";
        }
    }
    public logout() {
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');
        this.picture = "assets/img/avatar.jpg";
        this.name = "";
    }

    public loggedIn() {
        return tokenNotExpired();
    }

    public tokenSubscription() {
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
    public isAdmin() {
        if (this.loggedIn() && this.jsonObj['roles'].indexOf("admin") > -1) {
            return true;
        } else {
            return false;
        }
    }
    
    public getPicture() {
        return this.picture;
    }
}


