import {Injectable,Inject} from '@angular/core';
import  {Http,Headers, URLSearchParams, RequestOptions, Response} from '@angular/http';
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
        return this.http.post((this.baseUrl + 'patient'), body, options).share();
    }
    
    updatePatient (patient: IPatient) : Observable<Response>  {
//
        let body = JSON.stringify( patient )
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put((this.baseUrl + 'patient/' + patient.id), body, options)
                         .share()
    }   
//   

    deletePatient(deletePatient: Patient) : Observable<Response> {
        return this.http.delete('/patient/' + deletePatient.id).share();
    }
    
//    getPatientTreatmentList(patientId:number){        
//        return this.http.get(this.baseUrl + 'patient/'+ patientId + '/treatments');                  
//    }
    
     handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    

}