import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import {ROUTER_DIRECTIVES, RouteSegment} from '@angular/router';
import {MATERIAL_DIRECTIVES} from "ng2-material/index";
import {DiagnoseListComponent} from "./diagnose-list"
import {ICON_CLASS} from '../../shared/constants/app.constants';

@Component({ 
  selector: 'diagnoses',
  templateUrl: 'app/components/diagnose/diagnose.html',
  styleUrls : ['styles/diagnose.css'],
  directives: [CORE_DIRECTIVES, MATERIAL_DIRECTIVES, DiagnoseListComponent, ROUTER_DIRECTIVES]
})
export class DiagnoseComponent {
    id:string;
    name:string;
    description:string;
    iconClass: string = ICON_CLASS;
    
    constructor(routeSegment: RouteSegment) {
        
    }   
    
    ngOnInit() {
        console.log("ngOnInit DiagnosesComponent");
     
    }
}