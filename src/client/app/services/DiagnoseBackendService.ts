import {Injectable,Inject} from '@angular/core';
import  {Http,Headers, URLSearchParams, RequestOptions, Response} from '@angular/http';
import {List} from 'immutable';
import {Observable} from "rxjs/Observable";
export interface IDiagnose {
    id: number; 
    name: string;
    description: string;
}

export class Diagnose implements IDiagnose {
    constructor (public id: number, public name: string, 
        public description: string) {
    }
}

@Injectable()
export class DiagnoseBackendService {

    http:Http;
    baseUrl: string;
    constructor(http:Http)  {
        this.http = http;
        this.baseUrl = '/'
    }

    getAllDiagnoses() {        
        return this.http.get(this.baseUrl + 'diagnoses');
    }

    saveDiagnose(newDiagnose: Diagnose) : Observable<Response> {
        let body = JSON.stringify( newDiagnose )
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post((this.baseUrl + 'diagnose'), body, options).share();
    }
    
    updateDiagnose (diagnose: IDiagnose) : Observable<Response>  {
//
        let body = JSON.stringify( diagnose )
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put((this.baseUrl + 'diagnose/' + diagnose.id), body, options)
                         .share()
    }   
//   

    deleteDiagnose(deleteDiagnose: Diagnose) : Observable<Response> {
        return this.http.delete('/diagnose/' + deleteDiagnose.id).share();
    }    
   
    handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    

}