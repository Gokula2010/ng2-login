import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { AboutHomeComponent } from './about-home.component';
import { AboutItemComponent } from './about-item.component';

import { AuthGuardService } from '../../services/auth-guard.service';

const routes: Routes = [{
    path: 'about', 
    component: AboutComponent, 
    canActivate: [AuthGuardService], 
    children: [
        { path: '', component: AboutHomeComponent },
        { path: 'item/:id', component: AboutItemComponent },
    ]
}];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [
        AboutComponent,
        AboutHomeComponent,
        AboutItemComponent
    ]
})
export class AboutModule { }

