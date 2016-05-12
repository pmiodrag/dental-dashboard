//import { Injectable, EventEmitter } from '@angular/core';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
////Grab everything with import 'rxjs/Rx';
//import {Observable} from 'rxjs/Observable';
//import {Observer} from 'rxjs/Observer';
//import 'rxjs/add/operator/map'; 
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/share';
//
//export interface IPatient {
//    id: number; 
//    firstname: string;
//    lastname: string;
//    middlename: string,
//    gender: string,
//    address: string;
//    place: string;    
//    birthdate: Date;
//    email : string;
//    phone: string;
//    mobilephone: string;
//}
//
//export class Patient implements IPatient {
////    static create(data){
////        return new Patient(data);
////    }
////    
//    constructor (public id: number, public firstname: string, public lastname: string, public middlename: string,
//                public gender: string, public address: string, public place: string,  public birthdate: Date, public email : string,
//                public phone: string,  public mobilephone: string) {
//    }
//}
//
//@Injectable()
//export class PatientService {
//    baseUrl: string = '/';
//    formAction$: EventEmitter<string>  = new EventEmitter();
//    patients$: Observable<Patient[]>;
//    private _patientsObserver: Observer<Patient[]>;
//    private _dataStore: {
//        patients: Patient[]
//    };
//    constructor(private _http: Http) { 
//        this._dataStore = { patients: [] };
//        // Create Observable Stream to output our data
//        this.patients$ = new Observable(observer =>  this._patientsObserver = observer).share();
//        console.log("constructor this._patientsObserver", this._patientsObserver);
//    }
//   
//    getFormActionEmitter() {
//        return this.formAction$;
//    }
//    action(agreed: string): void {
//        console.log("action in service", agreed);
//        this.formAction$.emit(agreed);
//        this.formAction$.next(agreed);
//    }
//    
//    
//    loadAll() {
//        this._http.get(`${this.baseUrl}patient`).map(response => response.json()).subscribe(data => {
//            this._dataStore.patients = data;
//            console.log("loadTodos this._patientsObserver", this._patientsObserver);
//            this._patientsObserver.next(this._dataStore.patients);
//        }, error => console.log('Could not load todos.'));
//    }
//    getPacient(id: number) {
//        return this._http.get(this.baseUrl + 'patient/' + id)
//                        .map((res: Response) => res.json())
//                        .catch(this.handleError);
//    }
//    getPatients() { 
//        return this._http.get(this.baseUrl + 'patient')
//                       .map((res: Response) => res.json())
//                        .catch(this.handleError);
//    }
//    getPatientTreatments(patientid:number, firstname: string, lastname: string){        
//        return this._http.get(this.baseUrl + 'patient/'+ patientid + '/'+ firstname + '/'+ lastname +  '/treatments')
//                    .map((res: Response) => res.json())
//                    .catch(this.handleError);    
//    }
//    getPatientTreatmentList(patientId:number){        
//        return this._http.get(this.baseUrl + 'patient/'+ patientId + '/treatments')
//                    .map((res: Response) => res.json())
//                    .catch(this.handleError);    
//    }
//   
//    addPatient (patient: IPatient) : Observable<IPatient>  {
//  
//        let body = JSON.stringify( patient )
//        let headers = new Headers({ 'Content-Type': 'application/json' });
//        let options = new RequestOptions({ headers: headers });
//
//        return this._http.post(this.baseUrl + 'patient', body, options)
//         .map(response => <IPatient> response.json()).subscribe(data => {
//            this._dataStore.patients.push(data);   
//            this._patientsObserver.next(this._dataStore.patients);
//        }, error => console.log('Could not create patient.'));
//           // .map((res: Response) => res.json())
////                        .catch(this.handleError)
//    }
//    
//    updatePatient (patient: IPatient) : Observable<IPatient>  {
//
//        let body = JSON.stringify( patient )
//        let headers = new Headers({ 'Content-Type': 'application/json' });
//        let options = new RequestOptions({ headers: headers });
//
//        return this._http.put((this.baseUrl + 'patient/' + patient.id), body, options)
//                         .catch(this.handleError)
//    }   
//   
//    
//    deletePatient(id:number){
//        return this._http.delete(this.baseUrl + 'patient/' + id)
//                       // .map((res: Response) => res.json())
//                        .catch(this.handleError);
//    }
//    handleError(error: any) {
//        console.error(error);
//        return Observable.throw(error.json().error || 'Server error');
//    }
//
//}
