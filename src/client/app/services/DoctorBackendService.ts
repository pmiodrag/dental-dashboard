import {Injectable,Inject} from '@angular/core';
import  {Http,Headers, URLSearchParams, RequestOptions, Response} from '@angular/http';
import {List} from 'immutable';
import {Observable} from "rxjs/Observable";
export interface IDoctor {
    id: number; 
    firstname: string;
    lastname: string;
    title: string,
    degreeyear: number,
    degreeplace: string,
    gender: string,
    address: string;
    place: string;    
    birthdate: Date;
    email : string;
    phone: string;
    mobilephone: string;
}

export class Doctor implements IDoctor {
//    
    constructor (public id: number, public firstname: string, public lastname: string, public title: string, public degreeyear: number, public degreeplace: string, 
                public gender: string, public address: string, public place: string,  public birthdate: Date, public email : string,
                public phone: string,  public mobilephone: string) {
    }
}
@Injectable()
export class DoctorBackendService {

    http:Http;
    baseUrl: string;
    constructor(http:Http)  {
        this.http = http;
        this.baseUrl = '/'
    }

    getAllDoctors() {        
        return this.http.get('/doctor');
    }
    
    getLatestDoctor() {
        return this.http.get('/doctor/latest');
    }

    saveDoctor(newDoctor: Doctor) : Observable<Response> {
        let body = JSON.stringify( newDoctor )
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post((this.baseUrl + 'doctor'), body, options)//.share();
    }
    
    updateDoctor (doctor: IDoctor) : Observable<Response>  {

        let body = JSON.stringify( doctor )
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put((this.baseUrl + 'doctor/' + doctor.id), body, options)
                         .share()
    }   
    
    deleteDoctor(deleteDoctor: Doctor) : Observable<Response> {
        return this.http.delete('/doctor/' + deleteDoctor.id).share();
    }
    
    
     handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    

}