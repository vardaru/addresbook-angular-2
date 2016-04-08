import {Pipe, PipeTransform} from "angular2/core";

@Pipe({name: 'uppercasetr'})
export class UpperCaseTRPipe implements PipeTransform {
    transform(value: string, args: any[]) {
        return value.toLocaleUpperCase();
    }
}