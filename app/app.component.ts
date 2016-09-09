import { Component, OnInit } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: 
    `
        <my-navbar></my-navbar>
        <div class="outer-outlet">
        <router-outlet></router-outlet>
        </div>
    `
})
export class AppComponent implements OnInit {
    ngOnInit() { }
}
