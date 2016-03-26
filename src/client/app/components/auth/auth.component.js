System.register(['angular2/core', 'angular2/router', 'angular2/http', 'angular2-jwt/angular2-jwt'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, http_1, angular2_jwt_1;
    var AuthComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            }],
        execute: function() {
            AuthComponent = (function () {
                function AuthComponent(http, authHttp) {
                    this.http = http;
                    this.authHttp = authHttp;
                    this.lock = new Auth0Lock('9NdeCaZbpddcqM34xZ8BKcZcwMfPqFNl', 'twinsoft.eu.auth0.com');
                    //lock = new Auth0Lock('AUTH0_CLIENT_ID', 'AUTH0_DOMAIN');
                    this.jwtHelper = new angular2_jwt_1.JwtHelper();
                    this.profile = localStorage.getItem('profile');
                    this.setProfileObject();
                }
                AuthComponent.prototype.login = function () {
                    var _this = this;
                    this.lock.show(function (err, profile, id_token) {
                        if (err) {
                            throw new Error(err);
                        }
                        localStorage.setItem('profile', JSON.stringify(profile));
                        localStorage.setItem('id_token', id_token);
                        _this.setProfileObject();
                    });
                };
                AuthComponent.prototype.setProfileObject = function () {
                    this.profile = localStorage.getItem('profile');
                    this.jsonObj = JSON.parse(this.profile);
                    console.log(" this.jsonObj == ", this.jsonObj);
                    if (this.jsonObj != null) {
                        this.picture = this.jsonObj['picture'];
                        this.name = this.jsonObj['name'];
                    }
                    else {
                        this.picture = "img/avatar.jpg";
                        this.name = "";
                    }
                };
                AuthComponent.prototype.logout = function () {
                    localStorage.removeItem('profile');
                    localStorage.removeItem('id_token');
                    this.picture = "img/avatar.jpg";
                    this.name = "";
                };
                AuthComponent.prototype.loggedIn = function () {
                    return angular2_jwt_1.tokenNotExpired();
                };
                AuthComponent.prototype.tokenSubscription = function () {
                    this.authHttp.tokenStream.subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('Complete'); });
                };
                AuthComponent.prototype.useJwtHelper = function () {
                    var token = localStorage.getItem('id_token');
                    console.log(this.jwtHelper.decodeToken(token), this.jwtHelper.getTokenExpirationDate(token), this.jwtHelper.isTokenExpired(token));
                };
                AuthComponent = __decorate([
                    core_1.Component({
                        directives: [router_1.ROUTER_DIRECTIVES],
                        selector: 'auth-component',
                        templateUrl: 'app/auth/auth.component.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, angular2_jwt_1.AuthHttp])
                ], AuthComponent);
                return AuthComponent;
            }());
            exports_1("AuthComponent", AuthComponent);
        }
    }
});
//# sourceMappingURL=auth.component.js.map