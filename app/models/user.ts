export class User {
    constructor(public username: string, public password: string, public role: string = 'Engineer') {

    }
}


export class Role {
    id: number;
    name: string;
}


export class Hero {
    id: number;
    name: string;
}