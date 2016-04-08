import {PipeTransform, Pipe} from "angular2/core";
import {$PIPE} from "angular2/src/compiler/chars";

@Pipe({
    name: 'myReverse'
})
export class ReversePipe implements PipeTransform{
    transform(value: string, args: any[]){
        const length = value.length;
        let resultString = '';
        
        for( let i = 0; i< length; i++){
            resultString = value[i] + resultString;
        }
        return resultString;
    }
}