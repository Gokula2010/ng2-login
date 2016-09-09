import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-about',
    template: 
    `
    <h2>About Component</h2>
    <a [routerLink]="['/about']">Home</a>
    <a [routerLink]="['/about/item', 1]">Item 1</a>
    <a [routerLink]="['/about/item', 2]">Item 2</a>
    
    <div class="inner-outlet">
        <router-outlet></router-outlet>
    </div> 
    `
})
export class AboutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}