import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {Agenda, AgendaBackendService} from "../../services/AgendaBackendService";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {List} from 'immutable';
import {asObservable} from "./asObservable";
import {BehaviorSubject} from "rxjs/Rx";

@Injectable()
export class AgendaStore {
    private _events: BehaviorSubject<List<Agenda>> = new BehaviorSubject(List([]));

    constructor(private agendaBackendService: AgendaBackendService) {
       // this.loadInitialData();
    }

    get events() {
        return asObservable(this._events);
    }
    
    loadInitialData() {
        this.agendaBackendService.getAllEvents()
            .subscribe(
            res => {
                let events = (<Agenda[]>res.json()).map((event: any) =>
                    new Agenda(
                        event.id,
                        event.title,
                        event.start,
                        event.end
                    ))
                console.log("Retrieving agenda events res.json() ", res.json())
                this._events.next(res.json());
            },
            err => console.log("Error retrieving agenda events")
            );

    }
    
    findEventIndexById(id: number) {
        this.agendaBackendService.getAllEvents()
            .subscribe(
            res => {
                 let events = (<Agenda[]>res.json()).map((event: any) =>
                    new Agenda(
                        event.id,
                        event.title,
                        event.start,
                        event.end
                    ))    
                    .filter((event) => event.id == id)
                return event
            },
            err => console.log("Error retrieving Patients")
            );
    }
   
    saveEvent(event: Agenda) {

        this.agendaBackendService.saveEvent(event)
            .subscribe(
                res => {
                    let newEvent = res.json(); 
                    let events = this._events.getValue();
                    console.log("events before push", events)
                    events.push(newEvent);
                    console.log("events after push", events)
                   // this._events.next(this._events.getValue().push(newEvent));
                },
                err => console.log("Error saving event")
        );
    }

    updateEvent(updatedEvent: Agenda): Observable<Response> {

        let obs = this.agendaBackendService.updateEvent(updatedEvent);

        obs.subscribe(
            res => {
                let events: List<Agenda> = this._events.getValue();
                let index = events.findIndex((event) => event.id === updatedEvent.id);
                events[index] = updatedEvent;
                //this._patients.next(patients);
            });

        return obs;
    }


    deleteEvent(deleted: Agenda): Observable<Response> {
        let obs = this.agendaBackendService.deleteEvent(deleted);

        obs.subscribe(
            res => {
                let events: List<Agenda> = this._events.getValue();
                let index = events.findIndex((event) => event.id === deleted.id);
                events.splice(index, 1);
               // this._events.next(events.delete(index));
            }
        );
//
        return obs;
    }


}
