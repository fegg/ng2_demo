import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() babyName: string;
  @Input() inputBabyName: string;
  @Input('aliasBabyName') aliasName: string;

  changes: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChange) {
    this.changes = JSON.stringify(changes);
  }
}