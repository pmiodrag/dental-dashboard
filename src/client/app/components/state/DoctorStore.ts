import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {Doctor, DoctorBackendService} from "../../services/DoctorBackendService";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {List} from 'immutable';
import {asObservable} from "./asObservable";
import {BehaviorSubject} from "rxjs/Rx";

export enum DoctorFormPage { Details, Photo, Contact, Education, Summary}

@Injectable()
export class DoctorStore {

    private _doctors: BehaviorSubject<List<Doctor>> = new BehaviorSubject(List([]));
    private _doctorFormPage: BehaviorSubject<any> = new BehaviorSubject(DoctorFormPage.Details);
    private _showCardView: BehaviorSubject<boolean> = new BehaviorSubject(true);
    // this method should be supported in RXJS 2
    //    public doctors: Observable<List<Doctor>> =  this._doctors.asObservable();

    constructor(private doctorBackendService: DoctorBackendService) {
        this.loadInitialData();
    }
    
    get showCardView() {
        return  asObservable(this._showCardView);
    }
    
    get doctorFormPage() {
        return  asObservable(this._doctorFormPage);
    }
    
    setDoctorFormPage(page: DoctorFormPage){
        this._doctorFormPage.next(page);
    }
    
    changeView(show: boolean){
        console.log("changeView _showCardView", show);
        this._showCardView.next(show);
    }
    get doctors() {
        return asObservable(this._doctors);
    }
    set doctors(doctors: any) {
        this._doctors.next(doctors);
    }


    loadInitialData() {
        this.doctorBackendService.getAllDoctors()
            .subscribe(
            res => {
                let doctors = (<Doctor[]>res.json()).map((doctor: any) =>
                    new Doctor(
                        doctor.id,
                        doctor.firstname,
                        doctor.lastname,
                        doctor.title,
                        doctor.degreeyear,
                        doctor.degreeplace,
                        doctor.gender,
                        doctor.address,
                        doctor.place,
                        doctor.birthdate,
                        doctor.email,
                        doctor.phone,
                        doctor.mobilephone
                    )) //.filter((person) => person.firstname == "Miodrag")
       

                this._doctors.next(List(doctors));
            },
            err => console.log("Error retrieving Doctors")
            );

    }
    filterData(data) {
        this.doctorBackendService.getAllDoctors()
            .subscribe(
            res => {
                let doctors = (<Doctor[]>res.json()).map((doctor: any) =>
                    new Doctor(
                        doctor.id,
                        doctor.firstname,
                        doctor.lastname,
                        doctor.title,
                        doctor.degreeyear,
                        doctor.degreeplace,
                        doctor.gender,
                        doctor.address,
                        doctor.place,
                        doctor.birthdate,
                        doctor.email,
                        doctor.phone,
                        doctor.mobilephone
                    ))                    
                    .filter(item => {
                        let props = ['firstname', 'title', 'lastname', 'address', 'place'];
                        let match = false;
                        for (let prop of props) {
                            if (item[prop] != null && item[prop].toString().toUpperCase().indexOf(data) > -1) {
                                match = true;
                                break;
                            }
                        };
                        return match;
                    })
                this._doctors.next(List(doctors));
            },
            err => console.log("Error retrieving Doctors")
            );
    }
    addDoctor(newDoctor: Doctor) {

        this.doctorBackendService.saveDoctor(newDoctor).subscribe(
            res => {
                let newDoctor = (<Doctor>res.json()); 
                this._doctors.next(this._doctors.getValue().push(newDoctor));
            },
            err => console.log("Error saving Doctors")
        );
    }

    updateDoctor(updatedDoctor: Doctor): Observable<Response> {

        let obs = this.doctorBackendService.updateDoctor(updatedDoctor);

        obs.subscribe(
            res => {
                let doctors: List<Doctor> = this._doctors.getValue();
                let index = doctors.findIndex((doctor) => doctor.id === updatedDoctor.id);
                doctors[index] = updatedDoctor;
                this._doctors.next(doctors);
            });

        return obs;
    }


    deleteDoctor(deleted: Doctor): Observable<Response> {
        let obs = this.doctorBackendService.deleteDoctor(deleted);

        obs.subscribe(
            res => {
                let doctors: List<Doctor> = this._doctors.getValue();
                let index = doctors.findIndex((doctor) => doctor.id === deleted.id);
                this._doctors.next(doctors.delete(index));

            }
        );

        return obs;
    }


}
