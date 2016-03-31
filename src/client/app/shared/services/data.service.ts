import { Injectable } from 'angular2/core';
import { Http, Response, Headers, RequestOptions } from 'angular2/http';
//import {RESTClient, GET, PUT, POST, DELETE, BaseUrl, Headers, DefaultHeaders, Path, Body, Query} from 'angular2-rest';
//Grab everything with import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
import {IPatient} from '../../components/patients/patients'

@Injectable()
//@BaseUrl("http://localhost:3000/")
//@DefaultHeaders({
//    'Accept': 'application/json',
//    'Content-Type': 'application/json'
//})
export class DataService {
    baseUrl: string = '/';
    constructor(private http: Http) { }
//    protected requestInterceptor(req: Request) {
//        if (SessionFactory.getInstance().isAuthenticated) {
//            req.headers.append('jwt', SessionFactory.getInstance().credentials.jwt);
//        }
//    }
//
//    protected requestInterceptor(req: Response) {
//        // do sg with responses
//    }

//    @POST("addPacient")
//    public postTodo( @Body todo: Todo): Observable { return null; };
  
   
    
    getPatients() {       
    
        return this.http.get(this.baseUrl + 'patients')
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
    
    getTreatments(){
      return this.http.get(this.baseUrl + 'selectTreatments')
                      .map((res: Response) => res.json())
                      .catch(this.handleError);               
    }
    getPacient(id: number) {
        return this.http.get(this.baseUrl + 'patient/' + id)
                        .map((res: Response) => res.json())
                        .catch(this.handleError);
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
