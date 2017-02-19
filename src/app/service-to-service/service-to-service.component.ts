import { Component, OnInit } from '@angular/core';
import { BService } from './B.service';
import { AService } from './A.service';

@Component({
  selector: 'app-service-to-service',
  templateUrl: './service-to-service.component.html',
  styleUrls: ['./service-to-service.component.css'],
  providers: [AService, BService]
})
export class ServiceToServiceComponent implements OnInit {
  sa: string;
  sb: string;
  sab: string;

  constructor(
    public serviceA: AService,
    public serviceB: BService
  ) { }

  ngOnInit() {
    this.sa = this.serviceA.getA();
    this.sb = this.serviceB.getB();
    this.sab = this.serviceB.getAB();
  }

}