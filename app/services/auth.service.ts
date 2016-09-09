import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { User } from '../models/user';

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;
    Users: User[] ;
    token: string;

    constructor(private _router: Router) {
        this.token = localStorage.getItem('token');

        this.Users = [
            new User('gokul', 'gokul', 'Admin'), //{ username: 'gokul', password: 'gokul'},
            new User('test', 'test', 'Engineer')
        ];

     }

     login(user: User) {
        var authenticatedUser = this.Users.find(u=> u.username === user.username);

        if(authenticatedUser && authenticatedUser.password === user.password) {

            localStorage.setItem('token', JSON.stringify({ username: authenticatedUser.username} ));
            this._router.navigate(['/home']);
            this.isLoggedIn = true;
            return true;
        }
        else {
            this.isLoggedIn = false;
            return false;
        }
     }

     getLoggedUser(): User {
         if(localStorage.getItem('token')){
            var tmpUser = JSON.parse(localStorage.getItem('token'));

            return this.Users.find(u=> u.username === tmpUser.username) as User;  
         }
         else
            return new User('','');
     }

     logout() {
        localStorage.removeItem('token');
         this._router.navigate(['/login']);
         this.isLoggedIn = false;
     }

     checkCredentials() {
         if(localStorage.getItem('token') === null)
            this._router.navigate(['/login']);
     }
}