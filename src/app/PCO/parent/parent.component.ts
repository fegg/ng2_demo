import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  babyName: string = '小撸一号';
  items: Array<number> = [1, 2, 3];

  constructor() { }

  ngOnInit() {
  }

}