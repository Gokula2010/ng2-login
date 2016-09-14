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
    newMenus: Array<any> = [];


    lstMenu: MenuStructure[] = [
        { id: 1, name: 'Home', displayName: 'Home', url: '/home', role: 'engineer' },
        { id: 2, name: 'About', displayName: 'About', url: '/about', role: 'engineer' },
        { id: 3, name: 'Admin', displayName: 'Admin', url: '/admin', role: 'admin' }
    ];
    // lstNewMenu: NewMenuStructure[] = [
    //     { id: 1, 
    //     name: 'file', display_name: 'File', url: '', parent_id: 0, rold_id: 1, role_name: 'engineer', 
    //     submenu: [{ id: 2, name: 'new_file', display_name: 'New File', url: '', parent_id: 1, rold_id: 1, role_name: 'engineer', submenu: [] }] },
    //     // ,
    //     // { id: 3, name:'new_window', display_name: 'New Window', url: '', parent_id: 1, rold_id: 1,  role_name: 'engineer'},
    //     // { id: 4, name:'exit_window', display_name: 'Exit Window', url: '', parent_id: 1, rold_id: 1,  role_name: 'engineer'},
    //     // { id: 5, name:'exit', display_name: 'Exit', url: '', parent_id: 1, rold_id: 1,  role_name: 'engineer'},

    //     // { id: 6, name:'edit', display_name: 'File', url: '', parent_id: 0, rold_id: 1,  role_name: 'engineer'},
    //     // { id: 7, name:'cut', display_name: 'Cut', url: '', parent_id: 6, rold_id: 1,  role_name: 'engineer'},
    //     // { id: 8, name:'copy', display_name: 'Copy', url: '', parent_id: 6, rold_id: 1,  role_name: 'engineer'},
    //     // { id: 9, name:'paste', display_name: 'Paste', url: '', parent_id: 6, rold_id: 1,  role_name: 'engineer'},
    //     // { id: 10, name:'format', display_name: 'Format', url: '', parent_id: 6, rold_id: 1,  role_name: 'engineer'}        
    // ]


    lstNewMenu = [{
        "id": 1,
        "name": "home",
        "display_name": "Home",
        "url": "home",
        "parent_id": 0,
        "rold_id": 1,
        "role_name": "engineer",
        "submenu": []
    }, {
            "id": 1,
            "name": "about",
            "display_name": "About",
            "url": "about",
            "parent_id": 0,
            "rold_id": 1,
            "role_name": "engineer",
            "submenu": []
        }, {
            "id": 1,
            "name": "admin",
            "display_name": "Admin",
            "url": "home",
            "parent_id": 0,
            "rold_id": 1,
            "role_name": "admin",
            "submenu": [{
                "id": 1,
                "name": "role",
                "display_name": "Role",
                "url": "admin/role",
                "parent_id": 0,
                "rold_id": 1,
                "role_name": "admin"
            }, {
                    "id": 1,
                    "name": "user",
                    "display_name": "User",
                    "url": "admin/user",
                    "parent_id": 0,
                    "rold_id": 1,
                    "role_name": "admin"
                }, {
                    "id": 1,
                    "name": "menustructure",
                    "display_name": "Menu Structure",
                    "url": "admin/menustructure",
                    "parent_id": 0,
                    "rold_id": 1,
                    "role_name": "admin"
                }]
        }
    ];

    constructor(private _globalEventManagerService: GlobalEventManagerService, private _authService: AuthService) {
        this._globalEventManagerService.showNavbar.subscribe((mode: boolean) => {
            this.showNavbar = mode;

            this.user = this._authService.getLoggedUser();

            if (this.user) {
                //this.menus = this.lstMenu.filter(x => x.role == this.user.role_name);
                this.newMenus = this.lstNewMenu.filter(x => x.role_name == this.user.role_name);
            }

        })
    }

    ngOnInit() { }

    logout() {
        this._authService.logout();
    }
}


export class NewMenuStructure {
    public id: number;
    public name: string;
    public display_name: string;
    public url: string;
    public parent_id: number;
    public rold_id: number;
    public role_name: string;
    public submenu: NewMenuStructure[];
}