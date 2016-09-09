import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { User } from '../../models/user'
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


    constructor(private _authService: AuthService, private _router: Router) {
        this.model = new User('', '');
    }

    ngOnInit() { }

    onLogin() {
        if (!this._authService.login(this.model)) {
            this.errorMsg = 'Failed to login';
        }
    }
}