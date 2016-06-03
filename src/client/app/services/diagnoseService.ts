import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//Grab everything with import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';


export interface IDiagnose {
    id: number;    
    name: string;
    description: string;
}

export class Diagnose implements IDiagnose {
    constructor (public id: number,public name: string, 
        public description: string) {
    }
}


@Injectable()
export class DiagnoseService {
    baseUrl: string = '/';
    constructor(private http: Http) { }
    
    
    getDiagnoses(){
        return this.http.get(this.baseUrl + '/diagnoses')
                      .map((res: Response) => res.json())
                      .catch(this.handleError);               
    }
    
    
     addDiagnose (diagnose: IDiagnose) : Observable<IDiagnose>  {

        let body = JSON.stringify( diagnose )
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.baseUrl + 'diagnose', body, options)
           // .map((res: Response) => res.json())
                        .catch(this.handleError)
    }
    
    handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
