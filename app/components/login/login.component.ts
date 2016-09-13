import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { Login } from '../../models/user'
import { AuthService } from '../../services/auth.service';
@Component({
    moduleId: module.id,
    selector: 'my-login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    model: Login;

    public errorMsg = '';


    constructor(private _authService: AuthService, private _router: Router) {
        this.model = new Login('', '');
    }

    ngOnInit() { }

    onLogin() {
        if (!this._authService.login(this.model)) {
            this.errorMsg = 'Failed to login';
        }
    }
}