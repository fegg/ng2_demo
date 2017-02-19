import { Injectable } from '@angular/core';

@Injectable()
export class AService {

    constructor() { }
    
    getA() {
        return 'A';
    }
}