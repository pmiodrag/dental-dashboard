import { Injectable } from 'angular2/core';
import { Http, Response, Headers, RequestOptions } from 'angular2/http';
//import {RESTClient, GET, PUT, POST, DELETE, BaseUrl, Headers, DefaultHeaders, Path, Body, Query} from 'angular2-rest';
//Grab everything with import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
import {Pacient} from '../../components/pacients/pacients'

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
  
   
    
    getPacients() {       
    
        return this.http.get(this.baseUrl + 'getPacients')
                       .map((res: Response) => res.json())
                        .catch(this.handleError);
    }
    
//    addPacient(pacient: Pacient) {       
//         console.log("addPacient", pacient);
//         return this.http.post(this.baseUrl + 'addPacient', pacient.firstName)
//           .map((res: Response) => res.json())
//            .catch(this.handleError);
//    }
    addPacient (pacient: Pacient) : Observable<Pacient>  {

    let body = JSON.stringify( pacient );
     console.log("body", body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl + 'addPacient', body, options)
       // .map((res: Response) => res.json())
                  //  .map(res =>  <Hero> res.json().data)
                    .catch(this.handleError)
  }
    getTreatments(){
      return this.http.get(this.baseUrl + 'selectTreatments')
                      .map((res: Response) => res.json())
                      .catch(this.handleError);               
    }
    getPacient() {
        return this.http.get(this.baseUrl + 'getPacientData')
                        .map((res: Response) => res.json())
                        .catch(this.handleError);
    }
    handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
