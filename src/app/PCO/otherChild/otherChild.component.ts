import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-otherChild',
  templateUrl: './otherChild.component.html',
  styleUrls: ['./otherChild.component.css']
})
export class OtherChildComponent implements OnInit {

  @Input() helloBaby: string;

  constructor() { }

  ngOnInit() {
  }

  changeChildName(e) {
    this.helloBaby = '小撸新号';
  }
}