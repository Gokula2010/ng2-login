import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

import { GlobalEventManagerService } from '../../services/global-event-manager.service';
import { AuthService } from '../../services/auth.service';

import { User} from '../../models/user';
import { MenuStructure } from '../../models/menustructure';

@Component({
    moduleId: module.id,
    selector: 'my-navbar',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent implements OnInit {
    showNavbar: boolean = false;
    user: User;
    menus: MenuStructure[];

    lstMenu: MenuStructure[] = [
        { id: 1, name: 'Home', displayName: 'Home', url: '/home', role: 'engineer' },
        { id: 2, name: 'About', displayName: 'About', url: '/about', role: 'engineer' },
        { id: 3, name: 'Admin', displayName: 'Admin', url: '/admin', role: 'admin' }
    ];

    constructor(private _globalEventManagerService: GlobalEventManagerService, private _authService: AuthService) {
        this._globalEventManagerService.showNavbar.subscribe((mode: boolean) => {
            this.showNavbar = mode;

            this.user = this._authService.getLoggedUser();

            if(this.user)
                this.menus = this.lstMenu.filter(x => x.role == this.user.role_name);

        })
    }

    ngOnInit() { }

    logout() {
        this._authService.logout();
    }
}

