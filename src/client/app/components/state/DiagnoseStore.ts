import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {Diagnose, DiagnoseBackendService} from "../../services/DiagnoseBackendService";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {List} from 'immutable';
import {asObservable} from "./asObservable";
import {BehaviorSubject} from "rxjs/Rx";

@Injectable()
export class DiagnoseStore {

    private _diagnoses: BehaviorSubject<List<Diagnose>> = new BehaviorSubject(List([]));

    constructor(private diagnoseBackendService: DiagnoseBackendService) {
        this.loadInitialData();
    }

    get diagnoses() {
        return asObservable(this._diagnoses);
    }

    loadInitialData() {
        this.diagnoseBackendService.getAllDiagnoses()
            .subscribe(
            res => {
                let diagnoses = (<Diagnose[]>res.json()).map((diagnose: any) =>
                    new Diagnose(
                        diagnose.id,
                        diagnose.name,
                        diagnose.description
                      
                    ))
                this._diagnoses.next(List(diagnoses));
            },
            err => console.log("Error retrieving Diagnoses")
            );

    }
    filterData(data) {
        this.diagnoseBackendService.getAllDiagnoses()
            .subscribe(
            res => {
               let diagnoses = (<Diagnose[]>res.json()).map((diagnose: any) =>
                    new Diagnose(
                        diagnose.id,
                        diagnose.name,
                        diagnose.description
                    ))                  
                    .filter(item => {
                        let props = ['name', 'description'];
                        let match = false;
                        for (let prop of props) {
                            if (item[prop] != null && item[prop].toString().toUpperCase().indexOf(data) > -1) {
                                match = true;
                                break;
                            }
                        };
                        return match;
                    })
                this._diagnoses.next(List(diagnoses));
            },
            err => console.log("Error retrieving Diagnoses")
            );
    }
    addDiagnose(newDiagnose: Diagnose): Observable<Response> {

        let obs = this.diagnoseBackendService.saveDiagnose(newDiagnose);
        // to recognize form action we set id = -1 for new diagnose.
        // After form submiting list of observable items is updated and latest one item is not containing id from database for newly created diagnose
        // for that reason we are changing here to 0, to prevent on edit to recognize action as add.
        // After refresh list is fully updated from database.
        newDiagnose.id = 0;
        obs.subscribe(
            res => {
                this._diagnoses.next(this._diagnoses.getValue().push(newDiagnose));
            });

        return obs;
    }

    updateDiagnose(updatedDiagnose: Diagnose): Observable<Response> {

        let obs = this.diagnoseBackendService.updateDiagnose(updatedDiagnose);

        obs.subscribe(
            res => {
                let diagnoses: List<Diagnose> = this._diagnoses.getValue();
                let index = diagnoses.findIndex((diagnose) => diagnose.id === updatedDiagnose.id);
                diagnoses[index] = updatedDiagnose;
                this._diagnoses.next(diagnoses);
            });

        return obs;
    }


    deleteDiagnose(deleted: Diagnose): Observable<Response> {
        let obs = this.diagnoseBackendService.deleteDiagnose(deleted);

        obs.subscribe(
            res => {
                let diagnoses: List<Diagnose> = this._diagnoses.getValue();
                let index = diagnoses.findIndex((diagnose) => diagnose.id === deleted.id);
                this._diagnoses.next(diagnoses.delete(index));

            }
        );

        return obs;
    }


}
