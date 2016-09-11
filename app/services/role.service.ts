import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';


import { Role, Hero } from '../models/user';

@Injectable()
export class RoleService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private heroesUrl = 'app/heroes';  // URL to web api
    private rolesUrl = 'app/roles';  // URL to web api
    

    constructor(private http: Http) { }

    getRoles(): Promise<Role[]> {
        return this.http.get(this.rolesUrl)
            .toPromise()
            .then(response => {
                console.log(JSON.stringify(response.json().data))
                return response.json().data as Role[];
            })
            .catch(this.handleError);
    }

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => {
                console.log(JSON.stringify(response.json().data))
                return response.json().data as Hero[];
            })
            .catch(this.handleError);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve => setTimeout(resolve, 2000))
            .then(() => this.getHeroes());
    }


    private handleError(err: any): Promise<any> {
        console.error('An error occurred', err);

        return Promise.reject(err.message || err);
    }
}