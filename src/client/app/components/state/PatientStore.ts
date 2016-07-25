import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {Patient, PatientBackendService} from "../../services/PatientBackendService";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {List} from 'immutable';
import {asObservable} from "./asObservable";
import {BehaviorSubject} from "rxjs/Rx";


export enum PatientFormPage { Details, Photo, Contact}
@Injectable()
export class PatientStore {

    private _patients: BehaviorSubject<List<Patient>> = new BehaviorSubject(List([]));
    private _patientFormPage: BehaviorSubject<any> = new BehaviorSubject(PatientFormPage.Details);
    private _showCardView: BehaviorSubject<boolean> = new BehaviorSubject(true);
    private _startIndex: BehaviorSubject<number> = new BehaviorSubject(0);
    private _endIndex: BehaviorSubject<number> = new BehaviorSubject(3);
    private _patientsSize: BehaviorSubject<number> = new BehaviorSubject(0);
    // this method should be supported in RXJS 2
    //    public patients: Observable<List<Patient>> =  this._patients.asObservable();

    constructor(private patientBackendService: PatientBackendService) {
        this.loadInitialData();
    }
    
    get showCardView() {
        return  asObservable(this._showCardView);
    }
    get patientFormPage() {
        return  asObservable(this._patientFormPage);
    }
    //Pagination properties getter and setter
    get startIndex() {
        return  asObservable(this._startIndex);
    }    
    get endIndex() {
        return  asObservable(this._endIndex);
    }    
    setIndexes(start: number, end: number) {
        this._startIndex.next(start);
        this._endIndex.next(end);
    }
    
    changeView(show: boolean){
        this._showCardView.next(show);
    }
    setPatientFormPage(page: PatientFormPage){
        this._patientFormPage.next(page);
    }
    get patients() {
        return asObservable(this._patients);
    }
    get patientsSize(){
        return asObservable(this._patientsSize);
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
                        patient.mobilephone,
                        patient.photo,
                        patient.allergies,
                        patient.notes
                    )) //.filter((person) => person.firstname == "Miodrag")
                this._patientsSize.next(patients.length);
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
                        patient.mobilephone,
                        patient.photo,
                        patient.allergies,
                        patient.notes
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
    addPatient(newPatient: Patient) {

        this.patientBackendService.savePatient(newPatient).subscribe(
            res => {
                let newPatient = (<Patient>res.json()); 
                this._patients.next(this._patients.getValue().push(newPatient));
            },
            err => console.log("Error saving Patients")
        );
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
