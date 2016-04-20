import { EventEmitter} from 'angular2/core';

export class NotificationService {
  formActionChange$: EventEmitter<any> = new EventEmitter();
  constructor() {}
  emitFormActionChangeEvent(patient) {
     console.log("emitFormActionChangeEvent", patient);
     this.formActionChange$.emit(patient);
  }
  getFormActionChangeEmitter() {
    return this.formActionChange$;
  }
}