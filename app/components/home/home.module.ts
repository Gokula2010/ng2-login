import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from '../../services/auth-guard.service';

import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] }
];

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule { }