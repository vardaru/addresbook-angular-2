import {Component, Input, OnInit, EventEmitter, Output} from "angular2/core";
import {Contact} from "../model/contact.ts";
import {ContactService} from "../services/contact.service";

@Component({
    selector: 'contact-form',
    templateUrl: '../templates/contactform.tpl.html',
    providers: [ContactService],

})
export class ContactFormComponent implements OnInit {
    @Input('selectedContact') contact:Contact;
    selectContact = new Contact();
    formCleared = false;

    constructor(public contactService:ContactService) {
    }

    ngOnInit() {
        this.contact = new Contact();
    }

    onSubmit(form) {
        console.log('Form: '+JSON.stringify(form.value));
        this.contactService.addContact(this.contact);
        this.contact=new Contact();
        this.formCleared=true;
    }

    onNew(form) {
        console.log('OnEvent....' + 'Form: '+JSON.stringify(form.value));
        this.contact = new Contact();
        this.formCleared=true;
        
    }


}
