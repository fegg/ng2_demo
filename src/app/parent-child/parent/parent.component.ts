import { Component, OnInit, SimpleChange, ViewChild, ElementRef } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { OtherComponent } from '../other/other.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ViewChild('child') cc: ChildComponent;

  @ViewChild(ChildComponent)
  cc_other: ChildComponent;

  private childName: string;
  private childNickName: string = "Button";

  Baby: string = 'Baby';
  childStatus: boolean = false;

  constructor() { }

  ngOnInit() {
    this.childName = 'foo';
  }

  ngAfterViewInit() {
    let timer = null;
    timer = setTimeout(() => {
      clearTimeout(timer);

      Promise.resolve().then(() => {
        this.cc.name = '变身啦！超级赛亚人';
      }).then(() => {
        timer = setTimeout(() => {
          clearTimeout(timer);
          this.cc_other.name = '变身啦！超级赛亚人 4';
        }, 2000);
      })
    }, 2000);
  }

  babyCry(e: boolean) {
    this.childStatus = e;
  }
}