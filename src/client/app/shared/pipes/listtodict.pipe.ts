import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'listtodict',  pure: false})
export class ListToDict implements PipeTransform {
     transform(list: any[]): any[] {
          console.log("Slice list", list);
        let dict : Array<any> = new Array<any>()
        // create instance vars to store keys and final output
        list.forEach(key => {
                dict.push({ 'name': key.name });

            });
        console.log("Slice dict", dict);
        // return the resulting array
        return dict;
    }
}