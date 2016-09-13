import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { User, Login } from '../models/user';
import { GlobalEventManagerService } from './global-event-manager.service';
import { UserService } from './user.service';
@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;
    users: User[] ;
    token: string;

    constructor(private _router: Router, private _globalEventManagerService: GlobalEventManagerService, private _userService: UserService) {
        this.token = localStorage.getItem('token');
        this._userService.getUsers().then(users => this.users = users);
        // this.Users = [
        //     new User('gokul', 'gokul', 'Admin'), //{ username: 'gokul', password: 'gokul'},
        //     new User('test', 'test', 'Engineer')
        // ];

     }

     login(login: Login) {
        var authenticatedUser = this.users.find(u=> u.username === login.username);

        if(authenticatedUser && authenticatedUser.password === login.password) {

            localStorage.setItem('token', JSON.stringify({ username: authenticatedUser.username} ));
            if(authenticatedUser.role_name == "admin") 
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

            return this.users.find(u=> u.username === tmpUser.username) as User;  
         }
         else
            return ;
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