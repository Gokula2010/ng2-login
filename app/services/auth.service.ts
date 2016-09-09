import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { User } from '../models/user';
import { GlobalEventManagerService } from './global-event-manager.service';

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;
    Users: User[] ;
    token: string;

    constructor(private _router: Router, private _globalEventManagerService: GlobalEventManagerService) {
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
            if(authenticatedUser.role == "Admin") 
                this._router.navigate(['/admin']);
            else
                this._router.navigate(['/home']);
                
            this.isLoggedIn = true;

            this._globalEventManagerService.showNavbar.emit(true);

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
        this._globalEventManagerService.showNavbar.emit(false);

        this._router.navigate(['/login']);
        this.isLoggedIn = false;
     }

     checkCredentials() {
         if(localStorage.getItem('token') === null)
            this._router.navigate(['/login']);
     }
}