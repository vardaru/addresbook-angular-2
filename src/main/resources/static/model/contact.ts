export class Contact{
    
    constructor();

    constructor(id:string, name:string, surname:string, city:string, phone:string) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.city = city;
        this.phone = phone;
    }

    constructor(public id?:any, public name?:any, public surname?:any, public phone?:any, public city?:any ) {
        this.id = id ? id : '';
        this.name = name ? name : '';
        this.surname = surname ? surname : '';
        this.phone = phone ? phone : '';
        this.city = city ? city : '';
    }
}