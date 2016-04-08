import {Component, EventEmitter, Input, Output} from "angular2/core";
import {Contact} from "../model/contact";
import {UpperCaseTRPipe} from "../pipes/uppercasetr.pipe.ts";
import {ReversePipe} from "../pipes/reverse.pipe.ts";


@Component({
    selector: 'contact-table',
    templateUrl: '../templates/contacttable.tpl.html',
    pipes: [UpperCaseTRPipe, ReversePipe]
})
export class ContactTableComponent{
    @Input() contacts: Array<Contact> ;
    @Output() selectContact = new EventEmitter<Contact>();

    onSelect(item){
        console.log('==>' + JSON.stringify(item));
        this.selectContact.emit(item);
    }
}