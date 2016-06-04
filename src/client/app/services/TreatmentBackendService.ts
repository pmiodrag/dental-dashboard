import {Injectable,Inject} from '@angular/core';
import  {Http,Headers, URLSearchParams, RequestOptions, Response} from '@angular/http';
import {List} from 'immutable';
import {Observable} from "rxjs/Observable";
export interface ITreatment {
    id: number; 
    patientid : number; 
    treatmentdate: Date;
    therapy: string;
    diagnose: string;
    price: string;
}

export class Treatment implements ITreatment {
    constructor (public id: number, public patientid : number, public treatmentdate: Date, public therapy: string, 
        public diagnose: string, public price: string) {
    }
}

@Injectable()
export class TreatmentBackendService {

    http:Http;
    baseUrl: string;
    constructor(http:Http)  {
        this.http = http;
        this.baseUrl = '/'
    }

    getAllTreatments() {        
        return this.http.get(this.baseUrl + 'treatments');
    }

    saveTreatment(newTreatment: Treatment) : Observable<Response> {
        let body = JSON.stringify( newTreatment )
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post((this.baseUrl + 'treatment'), body, options);
    }
    
    updateTreatment (treatment: ITreatment) : Observable<Response>  {
//
        let body = JSON.stringify( treatment )
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put((this.baseUrl + 'treatment/' + treatment.id), body, options)
                         .share()
    }   
//   

    deleteTreatment(deleteTreatment: Treatment) : Observable<Response> {
        return this.http.delete('/treatment/' + deleteTreatment.id).share();
    }    
   
    handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    

}