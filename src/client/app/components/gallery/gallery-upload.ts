import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import {ROUTER_DIRECTIVES, Router, ActivatedRoute} from '@angular/router';
import {MATERIAL_DIRECTIVES} from "ng2-material/index";
import {MdToolbar} from '@angular2-material/toolbar';
import { AuthService } from '../../services/AuthService';
import {Gallery} from "../../services/GalleryBackendService";
import {GalleryStore} from '../state/GalleryStore';
import {FILE_UPLOAD_DIRECTIVES, FileUploader} from 'ng2-file-upload/ng2-file-upload';
@Component({ 
    selector: 'gallery-upload',
    templateUrl: 'app/components/gallery/gallery-upload.html',
    styleUrls: ['styles/gallery.css'],
    directives: [CORE_DIRECTIVES, MATERIAL_DIRECTIVES, ROUTER_DIRECTIVES, FILE_UPLOAD_DIRECTIVES]
})
export class GalleryUpload {  
    sub: any;
    patientID: string;
    public uploader: FileUploader;
    
    constructor(public authService: AuthService, private router: Router, private route: ActivatedRoute, public galleryStore: GalleryStore) {}   
    
    ngOnInit() {
        this.sub = this.router.routerState.parent(this.route).params.subscribe(params => {
            this.patientID = params["id"];
            this.uploader= new FileUploader({ url: '/patient/' + this.patientID + '/upload/gallery' });
        });     
    }
}