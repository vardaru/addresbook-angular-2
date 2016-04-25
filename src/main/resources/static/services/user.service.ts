///<reference path="../node_modules/rxjs/add/operator/map.d.ts"/>
///<reference path="../node_modules/rxjs/add/operator/catch.d.ts"/>
import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService{
    public user: string;
    
    constructor(private _http: Http) {
        this.getUser();
    };

    getData():Observable<any> {
        return this._http.get('http://localhost:8080/user')
    }

    getUser(){
        console.log("###### in getUser()  ############");
        this.getData()
            .subscribe(data =>  this.user = data.json(),
                error => console.log(error)
            );
    }
}