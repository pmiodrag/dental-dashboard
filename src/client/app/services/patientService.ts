import { Injectable } from 'angular2/core';
import { Http, Response, Headers, RequestOptions } from 'angular2/http';
//Grab everything with import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

export interface IPatient {
    id: number; 
    firstname: string;
    lastname: string;
    middlename: string,
    gender: string,
    address: string;
    place: string;    
    birthdate: string;
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
                public gender: string, public address: string, public place: string,  public birthdate: string, public email : string,
                public phone: string,  public mobilephone: string) {
    }
}

@Injectable()
export class PatientService {
    baseUrl: string = '/';
    constructor(private http: Http) { }
    
    getPacient(id: number) {
        return this.http.get(this.baseUrl + 'patient/' + id)
                        .map((res: Response) => res.json())
                        .catch(this.handleError);
    }
    getPatients() { 
        return this.http.get(this.baseUrl + 'patient')
                       .map((res: Response) => res.json())
                        .catch(this.handleError);
    }
    getPatientTreatments(patientId:number, firstname: string, lastname: string){        
        return this.http.get(this.baseUrl + 'patient/'+ patientId + '/'+ firstname + '/'+ lastname +  '/treatments')
                    .map((res: Response) => res.json())
                    .catch(this.handleError);    
    }
    
    
    addPatient (patient: IPatient) : Observable<IPatient>  {

        let body = JSON.stringify( patient )
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.baseUrl + 'patient', body, options)
           // .map((res: Response) => res.json())
                        .catch(this.handleError)
    }
    
    updatePatient (patient: IPatient) : Observable<IPatient>  {

        let body = JSON.stringify( patient )
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put((this.baseUrl + 'patient' + patient.id), body, options)
                         .catch(this.handleError)
    }   
   
    
    deletePatient(id:number){
        return this.http.delete(this.baseUrl + 'patient/' + id)
                       // .map((res: Response) => res.json())
                        .catch(this.handleError);
    }
    handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}