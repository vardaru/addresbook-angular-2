"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
///<reference path="../node_modules/rxjs/add/operator/map.d.ts"/>
///<reference path="../node_modules/rxjs/add/operator/catch.d.ts"/>
var core_1 = require("angular2/core");
var Observable_1 = require("rxjs/Observable");
require('rxjs/Rx');
var http_1 = require("angular2/http");
var ContactService = (function () {
    function ContactService(_http) {
        this._http = _http;
    }
    ;
    ContactService.prototype.postData = function (contact) {
        var body = JSON.stringify(contact);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('http://localhost:8080/api/save', body, { headers: headers });
    };
    ContactService.prototype.saveOrUpdate = function (contact) {
        var _this = this;
        this.postData(contact)
            .subscribe(function (res) { return _this.contacts = res.json(); })
            .catch(this.handleError);
    };
    ContactService.prototype.handleError = function (error) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    ContactService.prototype.getData = function () {
        return this._http.get('http://localhost:8080/api/all');
    };
    ContactService.prototype.loadContacts = function () {
        var _this = this;
        this.getData()
            .subscribe(function (data) { return _this.contacts = data.json(); }, function (error) { return console.log(error); });
    };
    ContactService.prototype.addContact = function (contact) {
        var _this = this;
        this.postData(contact)
            .subscribe(function (data) { return _this.contact = data; }, function (error) { return console.log(error); });
    };
    ContactService.prototype.editContact = function (contact) {
        console.log('8<----8<- ' + JSON.stringify(contact));
        this.contact = contact;
    };
    ContactService = __decorate([
        core_1.Injectable()
    ], ContactService);
    return ContactService;
}());
exports.ContactService = ContactService;
//# sourceMappingURL=contact.service.js.map