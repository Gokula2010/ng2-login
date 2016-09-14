import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from '../models/user';

@Injectable()
export class UserService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private usersUrl = 'app/users';  // URL to web api


    constructor(private _http: Http) { }

    getUsers(): Promise<User[]> {
        return this._http.get(this.usersUrl)
            .toPromise()
            .then(response => {
                console.log(JSON.stringify(response.json().data))
                return response.json().data as User[]
            })
            .catch(this.handleError);

        ;
    }



    private handleError(err: any): Promise<any> {
        console.error('An error occurred', err);

        return Promise.reject(err.message || err);
    }
}