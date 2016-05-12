
import {Injectable,Inject} from '@angular/core';
import  {Http,Headers,URLSearchParams, RequestOptions, Response} from '@angular/http';
import {List} from 'immutable';
import {Observable} from "rxjs/Observable";
export interface IPatient {
    id: number; 
    firstname: string;
    lastname: string;
    middlename: string,
    gender: string,
    address: string;
    place: string;    
    birthdate: Date;
    email : string;
    phone: string;
    mobilephone: string;
}

export class Patient implements IPatient {
//    static create(data){
//        return new Patient(data);
//    }
//    
    constructor (public id: number, public firstname: string, public lastname: string, public middlename: string,
                public gender: string, public address: string, public place: string,  public birthdate: Date, public email : string,
                public phone: string,  public mobilephone: string) {
    }
}
@Injectable()
export class PatientBackendService {

    http:Http;
    baseUrl: string;
    constructor(http:Http)  {
        this.http = http;
        this.baseUrl = '/'
    }

    getAllPatients() {
        return this.http.get('/patient');
    }

    savePatient(newPatient: Patient) : Observable<Response> {
        let body = JSON.stringify( newPatient )
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
//
//        let headers = new Headers();
//        headers.append('Content-Type', 'application/json; charset=utf-8');

        return this.http.post((this.baseUrl + 'patient'), body, options).share();
    }

    deletePatient(deletePatient: Patient) {
//        let params = new URLSearchParams();
//        params.append('id', '' + deletePatient.id );
//
//        return this.http.delete('/todo', {search: params}).share();
    }


//    toggleTodo(toggled: Todo) {
//        var headers = new Headers();
//        headers.append('Content-Type', 'application/json; charset=utf-8');
//        return this.http.put('/todo', JSON.stringify(toggled.toJS()),{headers}).share();
//    }

}