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

    constructor(private patientBackendService: PatientBackendService) {
        this.loadInitialData();
    }

    get patients() {       
        return asObservable(this._patients);
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
                        ));
//                        new Patient({
//                            id: patient.id,
//                            firstname: patient.firstname,
//                            lastname: patient.lastname,
//                            middlename: patient.middlename,
//                            gender: patient.gender,
//                            address: patient.address,
//                            place: patient.place,
//                            birthdate: patient.birthdate,
//                            email: patient.email,
//                            phone: patient.phone,
//                            mobilephone: patient.mobilephone
//                        }));

                    this._patients.next(List(patients));
//                    console.log("Patients", patients)
                },
                err => console.log("Error retrieving Patients")
            );

    }

    addPatient(newPatient:Patient):Observable<Response> {

        let obs = this.patientBackendService.savePatient(newPatient);

        obs.subscribe(
                res => {
                    this._patients.next(this._patients.getValue().push(newPatient));
                });

        return obs;
    }

//    toggleTodo(toggled:Todo): Observable {
//        let obs: Observable = this.todoBackendService.toggleTodo(toggled);
//
//        obs.subscribe(
//            res => {
//                let todos = this._todos.getValue();
//                let index = todos.findIndex((todo: Todo) => todo.id === toggled.id);
//                let todo:Todo = todos.get(index);
//                this._todos.next(todos.set(index, new Todo({id:toggled.id, description:toggled.description, completed:!toggled.completed}) ));
//            }
//        );
//
//        return obs;
//    }


    deletePatient(deleted:Patient): Observable<Response> {
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
