import {Component,EventEmitter} from 'angular2/core';


@Component({
    selector:'diagnose-header'    
})
export class DiagnoseHeaderComponent {

    //@Output() diagnose = new EventEmitter();

    

    addDiagnose(input) {
      //  this.diagnose.emit(input.value);
        input.value = "";
    }

}