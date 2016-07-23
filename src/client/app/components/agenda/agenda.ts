import {Component, ChangeDetectorRef} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {MdToolbar} from '@angular2-material/toolbar';
import {MATERIAL_DIRECTIVES} from "ng2-material/index";
import {Schedule, Dialog, Calendar, Button, ToggleButton} from 'primeng/primeng';
import {AgendaBackendService} from  '../../services/AgendaBackendService';
import {AgendaStore} from '../state/AgendaStore';

    
export class MyEvent {
    id: number;
    title: string;
    start: string;
    end: string;
    allDay: boolean = true;
}
@Component({
  selector: 'agenda',
  templateUrl: 'app/components/agenda/agenda.html',
  directives: [ROUTER_DIRECTIVES, MATERIAL_DIRECTIVES, MdToolbar, Schedule, Dialog, Calendar, Button, ToggleButton]
})
export class AgendaComponent {
    events: any[] = [];
    header: any;
    event: MyEvent;
    
    dialogVisible: boolean = false;
    
    idGen: number;
    constructor(public agendaStore : AgendaStore,  private cd: ChangeDetectorRef) {
    } 

    ngOnInit() {
        this.agendaStore.loadInitialData();
        this.header = {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
        };
    }
    
    handleDayClick(event) {
        this.event = new MyEvent();
        this.event.start = event.date.format();
        this.dialogVisible = true;
        
        //trigger detection manually as somehow only moving the mouse quickly after click triggers the automatic detection
        this.cd.detectChanges();
    }
    
    handleEventClick(e) {
        this.event = new MyEvent();
        this.event.title = e.calEvent.title;
        
        let start = e.calEvent.start;
        let end = e.calEvent.end;
        if(e.view.name === 'month') {
            start.stripTime();
        }
        
        if(end) {
            end.stripTime();
            this.event.end = end.format();
        }

        this.event.id = e.calEvent.id;
        this.event.start = start.format();
        this.event.allDay = e.calEvent.allDay;
        this.dialogVisible = true;
    }
    
    saveEvent() {
        //update
        if(this.event.id) {
            this.agendaStore.updateEvent(this.event);
//            let index: number = this.findEventIndexById(this.event.id).id;
//            if(index >= 0) {
//                this.events[index] = this.event;
//            }
        }
        //new
        else {
            console.log("Save event ", event)
            this.agendaStore.saveEvent(this.event);
            this.event = null;
        }
        
        this.dialogVisible = false;
    }
    
    deleteEvent() {
        this.agendaStore.deleteEvent(this.event);
        this.dialogVisible = false;
    }
    
//    findEventIndexById(id: number) {
//        
//        return this.agendaStore.findEventIndexById(id);
//    }
}
