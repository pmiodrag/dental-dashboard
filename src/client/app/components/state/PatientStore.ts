import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {Patient, PatientBackendService} from "../../services/PatientBackendService";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {List} from 'immutable';
import {asObservable} from "./asObservable";
import {BehaviorSubject} from "rxjs/Rx";

@Injectable()
export class PatientStore {

    private _patients: BehaviorSubject<List<Patient>> = new BehaviorSubject(List([]));
    // this method should be supported in RXJS 2
    //    public patients: Observable<List<Patient>> =  this._patients.asObservable();

    constructor(private patientBackendService: PatientBackendService) {
        this.loadInitialData();
    }

    get patients() {
        return asObservable(this._patients);
    }
    set patients(patients: any) {
        this._patients.next(patients);
    }


    loadInitialData() {
        this.patientBackendService.getAllPatients()
            .subscribe(
            res => {
                let patients = (<Patient[]>res.json()).map((patient: any) =>
                    new Patient(
                        patient.id,
                        patient.firstname,
                        patient.lastname,
                        patient.middlename,
                        patient.gender,
                        patient.address,
                        patient.place,
                        patient.birthdate,
                        patient.email,
                        patient.phone,
                        patient.mobilephone
                    )) //.filter((person) => person.firstname == "Miodrag")
       

                this._patients.next(List(patients));
            },
            err => console.log("Error retrieving Patients")
            );

    }
    filterData(data) {
        this.patientBackendService.getAllPatients()
            .subscribe(
            res => {
                let patients = (<Patient[]>res.json()).map((patient: any) =>
                    new Patient(
                        patient.id,
                        patient.firstname,
                        patient.lastname,
                        patient.middlename,
                        patient.gender,
                        patient.address,
                        patient.place,
                        patient.birthdate,
                        patient.email,
                        patient.phone,
                        patient.mobilephone
                    ))                    
                    .filter(item => {
                        let props = ['firstname', 'middlename', 'lastname', 'address', 'place'];
                        let match = false;
                        for (let prop of props) {
                            if (item[prop] != null && item[prop].toString().toUpperCase().indexOf(data) > -1) {
                                match = true;
                                break;
                            }
                        };
                        return match;
                    })
                this._patients.next(List(patients));
            },
            err => console.log("Error retrieving Patients")
            );
    }
    addPatient(newPatient: Patient): Observable<Response> {

        let obs = this.patientBackendService.savePatient(newPatient);
        // to recognize form action we set id = -1 for new patient.
        // After form submiting list of observable items is updated and latest one item is not containing id from database for newly created patient
        // for that reason we are changing here to 0, to prevent on edit to recognize action as add.
        // After refresh list is fully updated from database.
        newPatient.id = 0;
        obs.subscribe(
            res => {
                this._patients.next(this._patients.getValue().push(newPatient));
            });

        return obs;
    }

    updatePatient(updatedPatient: Patient): Observable<Response> {

        let obs = this.patientBackendService.updatePatient(updatedPatient);

        obs.subscribe(
            res => {
                let patients: List<Patient> = this._patients.getValue();
                let index = patients.findIndex((patient) => patient.id === updatedPatient.id);
                patients[index] = updatedPatient;
                this._patients.next(patients);
            });

        return obs;
    }


    deletePatient(deleted: Patient): Observable<Response> {
        let obs = this.patientBackendService.deletePatient(deleted);

        obs.subscribe(
            res => {
                let patients: List<Patient> = this._patients.getValue();
                let index = patients.findIndex((patient) => patient.id === deleted.id);
                this._patients.next(patients.delete(index));

            }
        );

        return obs;
    }


}
