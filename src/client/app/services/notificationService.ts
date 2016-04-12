import { EventEmitter} from 'angular2/core';

export class NotificationService {
  formActionChange$: EventEmitter<number> = new EventEmitter();
  constructor() {}
  emitFormActionChangeEvent(action) {
     console.log("FormActionChange", action);
     this.formActionChange$.emit(action);
  }
  getFormActionChangeEmitter() {
    return this.formActionChange$;
  }
}