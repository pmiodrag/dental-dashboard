import { EventEmitter} from 'angular2/core';

export class NotificationService {
  formActionChange$: EventEmitter<any> = new EventEmitter();
  constructor() {}
  emitFormActionChangeEvent(event) {
     console.log("emitFormActionChangeEvent", event);
     this.formActionChange$.emit(event);
  }
  getFormActionChangeEmitter() {
    return this.formActionChange$;
  }
}