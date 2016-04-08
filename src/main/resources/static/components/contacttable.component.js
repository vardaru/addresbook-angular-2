"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("angular2/core");
var uppercasetr_pipe_ts_1 = require("../pipes/uppercasetr.pipe.ts");
var reverse_pipe_ts_1 = require("../pipes/reverse.pipe.ts");
var ContactTableComponent = (function () {
    function ContactTableComponent() {
        this.selectContact = new core_1.EventEmitter();
    }
    ContactTableComponent.prototype.onSelect = function (item) {
        console.log('==>' + JSON.stringify(item));
        this.selectContact.emit(item);
    };
    __decorate([
        core_1.Input()
    ], ContactTableComponent.prototype, "contacts");
    __decorate([
        core_1.Output()
    ], ContactTableComponent.prototype, "selectContact");
    ContactTableComponent = __decorate([
        core_1.Component({
            selector: 'contact-table',
            templateUrl: '../templates/contacttable.tpl.html',
            pipes: [uppercasetr_pipe_ts_1.UpperCaseTRPipe, reverse_pipe_ts_1.ReversePipe]
        })
    ], ContactTableComponent);
    return ContactTableComponent;
}());
exports.ContactTableComponent = ContactTableComponent;
//# sourceMappingURL=contacttable.component.js.map