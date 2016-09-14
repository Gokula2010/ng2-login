import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap'


// imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { AppComponent }  from './app.component';

import { appRouting, appRoutingProviders } from './app.routes';

import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HomeModule } from './components/home/home.module';
import { AboutModule } from './components/about/about.module';
import { AdminModule } from './components/admin/admin.module';


@NgModule({
  imports: [ 
    BrowserModule,
    Ng2BootstrapModule,
    RouterModule,
    FormsModule,
    HttpModule,

    InMemoryWebApiModule.forRoot(InMemoryDataService),
    
    appRouting,

    HomeModule,
    AboutModule,
    AdminModule
  ],
  declarations: [ 
    AppComponent,

    LoginComponent,
    NavbarComponent
  ],
  bootstrap: [ 
    AppComponent 
  ],
  providers: [
    appRoutingProviders
  ]
})
export class AppModule { }
