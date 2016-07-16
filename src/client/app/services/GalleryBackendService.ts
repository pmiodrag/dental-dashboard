import {Injectable,Inject} from '@angular/core';
import  {Http,Headers, URLSearchParams, RequestOptions, Response} from '@angular/http';
import {List} from 'immutable';
import {Observable} from "rxjs/Observable";
export interface IGallery {
    id: number; 
    patientid : number;   
    source: string;
    treatmentid: number;
}

export class Gallery implements IGallery {
    constructor (public id: number, public patientid : number, public source: string, public treatmentid: number) {
    }
}

@Injectable()
export class GalleryBackendService {

    http:Http;
    baseUrl: string;
    constructor(http:Http)  {
        this.http = http;
        this.baseUrl = '/'
    }

    getAllImages() {        
        return this.http.get(this.baseUrl + 'gallery');
    }

    saveImage(newImage: Gallery) : Observable<Response> {
        let body = JSON.stringify( newImage )
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post((this.baseUrl + 'gallery'), body, options);
    }

    deleteImage(deleteImage: Gallery) : Observable<Response> {
        return this.http.delete('/gallery/' + deleteImage.id).share();
    }    
   
    handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    

}