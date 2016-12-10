import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  babyName: string;

  constructor() { }

  ngOnInit() {
    this.babyName = '小撸一号';
  }

  changeBabyName(newBabyName) {
    this.babyName = newBabyName;
  }
  
}