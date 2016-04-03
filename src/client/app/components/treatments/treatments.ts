import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink, RouteParams } from 'angular2/router';
import { DataService } from '../../shared/services/data.service';
import {Tables} from '../tables/tables';
import {MATERIAL_DIRECTIVES, ITableSelectionChange} from "ng2-material/all";
import {DataTableSelectableUsage} from "./selectable_usage"
@Component({ 
  selector: 'treatments',
  providers: [DataService],
  templateUrl: 'app/components/treatments/treatments.html',
  directives: [CORE_DIRECTIVES, RouterLink, Tables, DataTableSelectableUsage]
})
export class TreatmentsComponent {
	
    title: string = 'Pacients';
    filteredTreatments: any[] = [];
//    selection: string;
//    count: number;
    constructor(private dataService: DataService, private _routeParams: RouteParams) {
      
    }
    
    ngOnInit() {
      let patientId = parseInt(this._routeParams.get('id'), 10);
      this.dataService.getPatientTreatments(patientId).subscribe((treatments: any[]) => {
          
        this.filteredTreatments = treatments.filter(treatment => treatment.patientId === patientId);
      });
    }
    
    selection: string;
  count: number;
  materials: Array<any> = [
    {'id': 1, 'name': 'Acrylic (Transparent)', 'quantity': '25', 'price': '$2.90'},
    {'id': 2, 'name': 'Plywood (Birch)', 'quantity': '50', 'price': '$1.25'},
    {'id': 3, 'name': 'Laminate (Gold on Blue)', 'quantity': '10', 'price': '$2.35'}
  ];
  change(data: ITableSelectionChange) {
    let names = [];
    this.materials.forEach((mat: any) => {
      if (data.values.indexOf(mat.id) !== -1) {
        names.push(mat.name);
      }
    });
    this.selection = names.join(', ');
    this.count = names.length;
  }
}
