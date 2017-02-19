import { Injectable } from '@angular/core';
import { AService } from './A.service';

@Injectable()
export class BService {

    constructor(private serviceA: AService) { }
    
    getAB() {
        const a = this.serviceA.getA();
        return `${a}-B`;
    }

    getB() {
        return 'A';
    }
}