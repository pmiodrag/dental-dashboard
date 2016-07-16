import { RouterConfig }          from '@angular/router';
import { GalleryComponent }   from './gallery';
import { GalleryPreview }     from './gallery-preview';
import { GalleryUpload }   from './gallery-upload';
export const galleryRoutes: RouterConfig = [
   
    { 
        path: 'patients/patient/gallery/:id',  
        component: GalleryComponent,  
        children: [
            //{ path: '',  component: GalleryPreview },
            { path: '', redirectTo: 'preview', pathMatch: 'full' },
            { path: 'preview',  component: GalleryPreview },
            { path: 'upload',  component: GalleryUpload }
        ]
    }
];