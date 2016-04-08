"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("angular2/core");
var contact_ts_1 = require("../model/contact.ts");
var contact_service_1 = require("../services/contact.service");
var ContactFormComponent = (function () {
    function ContactFormComponent(contactService) {
        this.contactService = contactService;
        this.selectContact = new core_1.EventEmitter();
        this.formSubmitted = false;
        this.formCleared = false;
    }
    ContactFormComponent.prototype.ngOnInit = function () {
        this.contact = new contact_ts_1.Contact('', '', '', '', '');
    };
    ContactFormComponent.prototype.onSubmit = function (form) {
        console.log('Form: ' + JSON.stringify(form.value));
        this.contactService.addContact(this.contact);
        this.contact = new contact_ts_1.Contact();
        this.formSubmitted = true;
        this.formCleared = true;
    };
    ContactFormComponent.prototype.onNew = function (form) {
        console.log('OnEvent....' + 'Form: ' + JSON.stringify(form.value));
        this.contact = new contact_ts_1.Contact();
        this.formCleared = true;
    };
    __decorate([
        core_1.Input('selectedContact')
    ], ContactFormComponent.prototype, "contact");
    __decorate([
        core_1.Output()
    ], ContactFormComponent.prototype, "selectContact");
    ContactFormComponent = __decorate([
        core_1.Component({
            selector: 'contact-form',
            templateUrl: '../templates/contactform.tpl.html',
            providers: [contact_service_1.ContactService]
        })
    ], ContactFormComponent);
    return ContactFormComponent;
}());
exports.ContactFormComponent = ContactFormComponent;
//# sourceMappingURL=contactform.component.js.map