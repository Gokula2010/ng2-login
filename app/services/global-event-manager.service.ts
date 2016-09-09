import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class GlobalEventManagerService {
    
    public showNavbar: EventEmitter<boolean>  = new EventEmitter();

    constructor() { }
}