import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

import { GlobalEventManagerService } from './services/global-event-manager.service';

import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: '**', component: LoginComponent }

]

export const appRouting = RouterModule.forRoot(appRoutes);

export const appRoutingProviders: any[] = [
    AuthService,
    AuthGuardService,
    GlobalEventManagerService
]