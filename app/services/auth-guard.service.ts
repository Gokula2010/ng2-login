import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';
@Injectable()
export class AuthGuardService {

    constructor(private _router: Router, private _authService: AuthService) { }

    canActivate() {
        if(this._authService.isLoggedIn) {
            return true;
        }

        this._router.navigate(['/login']);
    }
}