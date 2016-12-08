import { Component, OnInit, Input, SimpleChange, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  @Input('aliasName') name: string;
  @Output() cry: EventEmitter<boolean> = new EventEmitter<boolean>();

  _filterName: string = '';
  active: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  
  ngOnChanges(changes: SimpleChange) {
    console.log(changes);
  }

  @Input()
  set filterName(n: string) {
    this._filterName = n + 'wowo~~~';
  }

  get filterName() {
    return this._filterName;
  }

  isHungry(e: KeyboardEvent) {
    this.active = !this.active;
    this.cry.next(this.active);
  }
}