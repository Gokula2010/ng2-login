import { Component, OnInit } from '@angular/core';
import { AccordionModule } from 'ng2-bootstrap/ng2-bootstrap';

import { Hero, Role } from '../../models/user';
import { RoleService } from '../../services/role.service';

@Component({
    moduleId: module.id,
    selector: 'my-admin-role',
    templateUrl: 'admin-role.component.html'
})
export class AdminRoleComponent implements OnInit {
    roles: Role[] = [];

    constructor(private _roleService: RoleService) { }

    ngOnInit() { 
        this._roleService.getRoles().then(roles=> this.roles = roles);
    }
}