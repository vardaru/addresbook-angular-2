"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("angular2/core");
var contact_service_1 = require("../services/contact.service");
var http_1 = require("angular2/http");
var contacttable_component_1 = require("./contacttable.component");
var contactform_component_1 = require("./contactform.component");
var user_service_1 = require("../services/user.service");
var AddressBookComponent = (function () {
    function AddressBookComponent(contactService) {
        this.contactService = contactService;
        this.contactService.loadContacts();
    }
    ;
    AddressBookComponent.prototype.editContact = function (contact) {
        console.log('+++++++++' + JSON.stringify(contact));
        this.contactService.editContact(contact);
    };
    AddressBookComponent = __decorate([
        core_1.Component({
            selector: 'address-book',
            template: "\n        <contact-form [selectedContact]=\"contactService.contact\" (selectContact)=\"editContact($event)\"></contact-form>\n        <contact-table [contacts]=\"contactService.contacts\" (selectContact)=\"editContact($event)\"></contact-table>\n    ",
            directives: [contacttable_component_1.ContactTableComponent, contactform_component_1.ContactFormComponent],
            providers: [http_1.HTTP_PROVIDERS, contact_service_1.ContactService, user_service_1.UserService]
        })
    ], AddressBookComponent);
    return AddressBookComponent;
}());
exports.AddressBookComponent = AddressBookComponent;
//# sourceMappingURL=addressbook.component.js.map