import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {Treatment, TreatmentBackendService} from "../../services/TreatmentBackendService";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {List} from 'immutable';
import {asObservable} from "./asObservable";
import {BehaviorSubject} from "rxjs/Rx";

@Injectable()
export class TreatmentStore {

    private _treatments: BehaviorSubject<List<Treatment>> = new BehaviorSubject(List([]));

    constructor(private treatmentBackendService: TreatmentBackendService) {
       // this.loadInitialData();
    }

    get treatments() {
        return asObservable(this._treatments);
    }

    loadInitialData(patientId) {
        this.treatmentBackendService.getAllTreatments()
            .subscribe(
            res => {
                let treatments = (<Treatment[]>res.json()).map((treatment: any) =>
                    new Treatment(
                        treatment.id,
                        treatment.patientid,
                        treatment.treatmentdate,
                        treatment.therapy,
                        treatment.diagnose,
                        treatment.price
                    )).filter(treatment => treatment.patientid == patientId)
                this._treatments.next(List(treatments));
            },
            err => console.log("Error retrieving Treatments")
            );

    }
    filterData(data) {
        this.treatmentBackendService.getAllTreatments()
            .subscribe(
            res => {
               let treatments = (<Treatment[]>res.json()).map((treatment: any) =>
                    new Treatment(
                        treatment.id,
                        treatment.patientid,
                        treatment.treatmentdate,
                        treatment.therapy,
                        treatment.diagnose,
                        treatment.price
                    ))                  
                    .filter(item => {
                        let props = ['treatmentdate', 'therapy', 'diagnose', 'price'];
                        let match = false;
                        for (let prop of props) {
                            if (item[prop] != null && item[prop].toString().toUpperCase().indexOf(data) > -1) {
                                match = true;
                                break;
                            }
                        };
                        return match;
                    })
                this._treatments.next(List(treatments));
            },
            err => console.log("Error retrieving Treatments")
            );
    }
    addTreatment(newTreatment: Treatment): Observable<Response> {

        let obs = this.treatmentBackendService.saveTreatment(newTreatment);
        // to recognize form action we set id = -1 for new treatment.
        // After form submiting list of observable items is updated and latest one item is not containing id from database for newly created treatment
        // for that reason we are changing here to 0, to prevent on edit to recognize action as add.
        // After refresh list is fully updated from database.
        newTreatment.id = 0;
        obs.subscribe(
            res => {
                this._treatments.next(this._treatments.getValue().push(newTreatment));
            });

        return obs;
    }

    updateTreatment(updatedTreatment: Treatment): Observable<Response> {

        let obs = this.treatmentBackendService.updateTreatment(updatedTreatment);

        obs.subscribe(
            res => {
                let treatments: List<Treatment> = this._treatments.getValue();
                let index = treatments.findIndex((treatment) => treatment.id === updatedTreatment.id);
                treatments[index] = updatedTreatment;
                this._treatments.next(treatments);
            });

        return obs;
    }


    deleteTreatment(deleted: Treatment): Observable<Response> {
        let obs = this.treatmentBackendService.deleteTreatment(deleted);

        obs.subscribe(
            res => {
                let treatments: List<Treatment> = this._treatments.getValue();
                let index = treatments.findIndex((treatment) => treatment.id === deleted.id);
                this._treatments.next(treatments.delete(index));

            }
        );

        return obs;
    }


}
