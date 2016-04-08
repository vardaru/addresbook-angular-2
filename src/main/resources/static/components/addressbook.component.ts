import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";
import {ContactService} from "../services/contact.service";
import {HTTP_PROVIDERS} from "angular2/http";
import {ContactTableComponent} from "./contacttable.component";
import {ContactFormComponent} from "./contactform.component";
import {Contact} from "../model/contact";
import {TrUpperCasePipe} from "../pipes/uppercasetr.pipe";

@Component({
    selector: 'address-book',
    template: `
        <contact-form [selectedContact]="contactService.contact" (selectContact)="editContact($event)"></contact-form>
        <contact-table [contacts]="contactService.contacts" (selectContact)="editContact($event)"></contact-table>
    `,
    directives:[ ContactTableComponent, ContactFormComponent],
    providers:[HTTP_PROVIDERS, ContactService]
})
export class AddressBookComponent {
    constructor(public contactService: ContactService){
        this.contactService.loadContacts();
    };
    editContact(contact: Contact){
        console.log('+++++++++' + JSON.stringify(contact));
        this.contactService.editContact(contact);
    }

}

bootstrap(AddressBookComponent, [HTTP_PROVIDERS, ContactService]);