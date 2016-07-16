import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import {ROUTER_DIRECTIVES, ActivatedRoute, Router} from '@angular/router';
import {MATERIAL_DIRECTIVES} from "ng2-material/index";
import {MdToolbar} from '@angular2-material/toolbar';
import { AuthService } from '../../services/AuthService';
import {Galleria, Lightbox} from 'primeng/primeng';
import {GalleryStore} from '../state/GalleryStore';
import {Gallery} from "../../services/GalleryBackendService";
import {FILE_UPLOAD_DIRECTIVES, FileUploader} from 'ng2-file-upload/ng2-file-upload';
@Component({ 
    selector: 'gallery',
    templateUrl: 'app/components/gallery/gallery.html',
    styleUrls: ['styles/gallery.css'],
    directives: [CORE_DIRECTIVES, MATERIAL_DIRECTIVES, ROUTER_DIRECTIVES, MdToolbar]
})
export class GalleryComponent {
    images : any = [];
    patientID: string;
    sub: any;
    public uploader: FileUploader;
    constructor(public authService: AuthService) {}     
}