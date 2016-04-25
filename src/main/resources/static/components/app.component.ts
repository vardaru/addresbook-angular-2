
import {Component, provide} from "angular2/core";
import {
    RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy,
    PathLocationStrategy
} from "angular2/router";
import {AddressBookComponent} from "./addressbook.component";
import {LoginComponent} from "./login.component";
import {AboutComponent} from "./about.component";
import {bootstrap} from "angular2/platform/browser";
import {ContactService} from "../services/contact.service";
import {UserService} from "../services/user.service";
@Component({
    selector: 'contact-app',
    template: ` 
 <div class="page-header">
    <div class="column"></div>
        <h1>Address Book, Angular2 Way</h1>
        <nav>
           <a [routerLink]="['AddressBook']">Home</a>
           <a [routerLink]="['Login']">Login</a>
           <a [routerLink]="['About']">About</a>
         </nav>
    </div>
    <div class="row">
         <router-outlet></router-outlet>
    </div>  
    `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/', name:'AddressBook', component: AddressBookComponent },
    {path: '/login', name:'Login', component: LoginComponent, useAsDefault: true},
    {path: '/about', name:'About', component: AboutComponent},
])
export class AppComponent{

}

bootstrap(AppComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: PathLocationStrategy}), ContactService, UserService]);