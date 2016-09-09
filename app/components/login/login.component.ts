import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { User } from '../../models/user'
import { GlobalEventManagerService } from '../../services/global-event-manager.service';
import { AuthService } from '../../services/auth.service';
@Component({
    moduleId: module.id,
    selector: 'my-login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    Users: User[];
    model: User;

    public errorMsg = '';


    constructor(private _authService: AuthService, private _router: Router, private _globalEventManagerService: GlobalEventManagerService) {
        this.model = new User('', '');
    }

    ngOnInit() { }

    onLogin() {
        if (this._authService.login(this.model)) {
            this._globalEventManagerService.showNavbar.emit(true);
        }
        else {
            this.errorMsg = 'Failed to login';
        }
    }
}