import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent implements OnInit {

  data: any;
  activedData: any = [];

  constructor() { }

  ngOnInit() {
  
    let data = [
      ['xxx', 'yyy'],
      ['aaa', 'bbb']
    ];

    this.data = data;
  }

  choose(e, i, el) {
    if(this.activedData[i] === void 0) {
      this.activedData[i] = [];
    }

    if(this.activedData[i].indexOf(el) === -1) {
      this.activedData[i].push(el);
    }
  }

  cancel(e, i, el) {
    this.activedData[i] = this.activedData[i].filter(v => v !== el);
  }

}