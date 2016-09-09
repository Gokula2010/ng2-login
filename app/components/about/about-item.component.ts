import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'my-about-item',
    template: '<h3>About Item Id : {{id}}</h3>'
})
export class AboutItemComponent implements OnInit {
    id: any;
    paramsSub: any;
    constructor(private _activateRoute:ActivatedRoute) { }

    ngOnInit() {
        this.paramsSub = this._activateRoute.params.subscribe(params=> this.id =parseInt(params['id'], 10));
    }

    ngOnDestroy() {
        //this.paramsSub.unsubscribe();
    }
    
}