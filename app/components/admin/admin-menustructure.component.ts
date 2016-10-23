import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/user';
import { OrderService } from '../../services/order.service';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Component({
    moduleId: module.id,
    selector: 'my-admin-menustructure',
    template: `
    <h3>Menu Structure</h3>
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>#</th>
                <th>Customer Name</th>
                <th>Shipper City</th>
                <th>Is Shipped</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let o of orders">
                <!--<td>{{r.id}}</td>-->
                <td>{{o.orderID}}</td>
                <td>{{o.customerName}}</td>
                <td>{{o.shipperCity}}</td>
                <td>{{o.isShipped}}</td>
                
            </tr>
        </tbody>
    </table>      
    
    `
    //templateUrl: 'admin-menustructure.component.html'
})
export class AdminMenustructureComponent implements OnInit {
    orders: Order[] = [];
    errorMessage: string;

    constructor(private orderService: OrderService) { }

    ngOnInit() {
        this.orderService.getOrders().subscribe(
            orders => this.orders = orders,
            error => this.errorMessage = <any>error
        );
    }
}