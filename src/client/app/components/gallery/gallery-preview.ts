import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import {ROUTER_DIRECTIVES, Router, ActivatedRoute} from '@angular/router';
import {MATERIAL_DIRECTIVES} from "ng2-material/index";
import { AuthService } from '../../services/AuthService';
import {GalleryStore} from '../state/GalleryStore';
import {Galleria, Lightbox} from 'primeng/primeng';
@Component({ 
    selector: 'gallery-preview',
    templateUrl: 'app/components/gallery/gallery-preview.html',
    styleUrls: ['styles/gallery.css'],
    directives: [CORE_DIRECTIVES, MATERIAL_DIRECTIVES, ROUTER_DIRECTIVES,Galleria]
})
export class GalleryPreview {
    images : any = [];
    patientID: string;
//    patient_images : any = [];
    sub: any;
    constructor(public authService: AuthService,  private router: Router, private route: ActivatedRoute, public galleryStore: GalleryStore) {}   
    
    ngOnInit() {
         this.sub = this.router.routerState.parent(this.route).params.subscribe(params => {
            this.patientID = params["id"];
             console.log("ngOnInit GalleryPreview", this.patientID);
               this.galleryStore.loadInitialData(this.patientID);
        });
    }
    onImageClicked(event){
        console.log("onImageClicked", event);
    }
}