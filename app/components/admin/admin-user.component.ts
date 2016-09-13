import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';


@Component({
    moduleId: module.id,
    selector: 'my-admin-user',
    templateUrl: 'admin-user.component.html'
})
export class AdminUserComponent implements OnInit {
    users: User[] = [];

    constructor(private _userService: UserService) { }

    ngOnInit() { 
        this._userService.getUsers().then(users=> this.users = users);
    }
}