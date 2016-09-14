import { Component, OnInit } from '@angular/core';
import { AccordionModule } from 'ng2-bootstrap/ng2-bootstrap';
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