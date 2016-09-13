export class Login {
    constructor(public username: string, public password: string) { }
}


export class User {
    constructor(public username: string, public firstname:string, public lastname: string, public password: string, public role_id: number, public role_name: string) {

    }
}


export class Role {
    constructor( public id: number, public name: string) { }
    
}


export class Hero {
    constructor(public id: number, public name: string) { }
}