import { Injectable } from 'angular2/core';
import { Http, Response, Headers, RequestOptions } from 'angular2/http';
//Grab everything with import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';


export interface ITreatment {
    id: number; 
    patientid : number; 
    datetime: Date;
    therapy: string;
    diagnose: string;
    price: string;
}

export class Treatment implements ITreatment {
    constructor (public id: number, public patientid : number, public datetime: Date, public therapy: string, 
        public diagnose: string, public price: string) {
    }
}


@Injectable()
export class TreatmentService {
    baseUrl: string = '/';
    constructor(private http: Http) { }
    
    
    getTreatments(){
        return this.http.get(this.baseUrl + '/treatments')
                      .map((res: Response) => res.json())
                      .catch(this.handleError);               
    }
    
    
     addPatient (treatment: ITreatment) : Observable<ITreatment>  {

        let body = JSON.stringify( treatment )
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.baseUrl + 'treatment', body, options)
           // .map((res: Response) => res.json())
                        .catch(this.handleError)
    }
    
    handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
