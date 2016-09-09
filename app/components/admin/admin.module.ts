import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from '../../services/auth-guard.service';

import { AdminComponent } from './admin.component';

const adminRoutes: Routes = [
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuardService] }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    declarations: [
        AdminComponent
    ]
})
export class AdminModule { }