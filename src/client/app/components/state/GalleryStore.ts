import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {Gallery, GalleryBackendService} from "../../services/GalleryBackendService";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {List} from 'immutable';
import {asObservable} from "./asObservable";
import {BehaviorSubject} from "rxjs/Rx";

@Injectable()
export class GalleryStore {
    private _images: BehaviorSubject<List<Gallery>> = new BehaviorSubject(List([]));

    constructor(private galleryBackendService: GalleryBackendService) {
       // this.loadInitialData();
    }

    get images() {
        return asObservable(this._images);
    }
    
    loadInitialData(patientId) {
        this.galleryBackendService.getAllImages()
            .subscribe(
            res => {
                let images = (<Gallery[]>res.json()).map((image: any) =>
                    new Gallery(
                        image.id,
                        image.patientid,
                        image.source,
                        image.treatmentid
                    )).filter(image => image.patientid == patientId)
                this._images.next(List(images));
            },
            err => console.log("Error retrieving patient gallery")
            );

    }
    
    loadGalleryByTreatmentId(treatmentId) {
        this.galleryBackendService.getAllImages()
            .subscribe(
            res => {
                let images = (<Gallery[]>res.json()).map((image: any) =>
                   new Gallery(
                        image.id,
                        image.patientid,
                        image.source,
                        image.treatmentid
                    )).filter(image => image.treatmentid == treatmentId)
                this._images.next(List(images));
            },
            err => console.log("Error retrieving treatment gallery")
            );

    }
    
   
    saveImage(image: Gallery) {

        this.galleryBackendService.saveImage(image)
            .subscribe(
                res => {
                    let newImage = (<Gallery>res.json()); 
                    this._images.next(this._images.getValue().push(newImage));
                },
                err => console.log("Error saving image")
        );
    }



    deleteImage(deleted: Gallery): Observable<Response> {
        let obs = this.galleryBackendService.deleteImage(deleted);

        obs.subscribe(
            res => {
                let images: List<Gallery> = this._images.getValue();
                let index = images.findIndex((image) => image.id === deleted.id);
                this._images.next(images.delete(index));

            }
        );

        return obs;
    }


}
