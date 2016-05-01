///<reference path="../node_modules/angular2/ts/typings/jasmine/jasmine.d.ts"/>

import {Contact} from "../model/contact";
describe('1st tests', () => {
    it('true is true', () => expect(true).toEqual(true));
});

it('null is not the same thing as undefined',
    () => expect(null).not.toEqual(undefined)
);

describe('Contact', ()=>{
    it('has a name', ()=>{
        let contact: Contact = {id: '1', name: 'Ümit', surname:'Vardar', city:'Edirne', phone:'1234567'};
        expect(contact.name).toEqual('Ümit');
    });

    it('has an id', ()=>{
        let contact: Contact = {id: '1', name: 'Ümit', surname:'Vardar', city:'Edirne', phone:'1234567'};
        expect(contact.id).toEqual('1');
    });
} );