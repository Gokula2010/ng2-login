import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from '../../services/auth-guard.service';

import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home.component';
import { AdminUserComponent } from './admin-user.component';
import { AdminRoleComponent } from './admin-role.component';
import { AdminMenustructureComponent } from './admin-menustructure.component';


import { RoleService } from '../../services/role.service';


const adminRoutes: Routes = [
    //{ path: 'admin', component: AdminComponent, canActivate: [AuthGuardService] }
    {
        path: 'admin', component: AdminComponent,
        children: [
            { path: '', component: AdminHomeComponent },
            { path: 'user', component: AdminUserComponent },
            { path: 'role', component: AdminRoleComponent },
            { path: 'menustructure', component: AdminMenustructureComponent },
            
            
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(adminRoutes)
    ],
    declarations: [
        AdminComponent,
        AdminHomeComponent,
        AdminUserComponent,
        AdminRoleComponent,
        AdminMenustructureComponent
    ],
    providers: [
        RoleService
    ]
})
export class AdminModule { }