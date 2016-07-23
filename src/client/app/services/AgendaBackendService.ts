import {Injectable,Inject} from '@angular/core';
import {Http, Headers, URLSearchParams, RequestOptions, Response} from '@angular/http';
import {Observable} from "rxjs/Observable";

export interface IAgenda {
    id: number; 
    title: string;
    start: string;
    end: string;
}

export class Agenda implements IAgenda {
    constructor (public id: number, public title: string, public start: string, public end: string) {}
}
@Injectable()
export class AgendaBackendService {
    http:Http;
    baseUrl: string;
    
    constructor(http: Http) {
         this.http = http;
         this.baseUrl = '/'
    }

    getAllEvents() {
        return this.http.get(this.baseUrl + 'events');
    }
    
    saveEvent(newEvent: Agenda) : Observable<Response> {
        let body = JSON.stringify( newEvent )
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post((this.baseUrl + 'events'), body, options);
    }
    
    
    updateEvent (event: Agenda) : Observable<Response>  {

        let body = JSON.stringify( event )
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put((this.baseUrl + 'events/' + event.id), body, options)
                         .share()
    }   
    
    deleteEvent(deleteEvent: Agenda) : Observable<Response> {
        return this.http.delete('/events/' + deleteEvent.id).share();
    }
    
}


