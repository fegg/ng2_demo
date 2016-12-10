import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output()
  changeBabyName: EventEmitter<string> = new EventEmitter<string>();

  rhashcode = /\d\.\d{4}/;

  constructor() { }

  ngOnInit() {
  }

  getNewBabyName(e) {
    let newName = this.makeHashCode('小撸新号');
    this.changeBabyName.next(newName);
  }

  /* UUID http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript */
  makeHashCode(prefix) {
    prefix = prefix || '60sky';
    return String(Math.random() + Math.random()).replace(this.rhashcode, prefix);
  }
}