///<reference path="../node_modules/rxjs/Observable.d.ts"/>
import {Injectable} from "angular2/core";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import {Headers, Http, Response} from "angular2/http";
import {Contact} from "../model/contact";

@Injectable()
export class ContactService {
    public contacts: Array<Contact>;
    public contact: Contact;

    constructor(private _http:Http) {};

    postData(contact:Contact):Observable<any> {
        const body = JSON.stringify(contact);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('http://localhost:8080/api/save', body, {headers: headers})
    }

    saveOrUpdate(contact:Contact){
        this.postData(contact)
            .subscribe(res => this.contacts = res.json())
            ;
    }
    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    getData():Observable<any> {
        return this._http.get('http://localhost:8080/api/all')
    }

    loadContacts() {
        this.getData()
            .subscribe(data =>  this.contacts = data.json(),
                error => console.log(error)
            );
    }

    addContact(contact) {
        this.postData(contact)
            .subscribe(data => this.contact = data,
                error => console.log(error)
            );
    }
    
    editContact(contact: Contact){
        console.log('8<----8<- ' + JSON.stringify(contact));
        this.contact = contact;
    }
}