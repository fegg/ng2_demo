import { Component, EventEmitter, OnInit, Input, Output, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  
  actives: Array<boolean> = [];

  constructor(private el: ElementRef) { }

  ngOnInit() {
    for(var i = 0; i < 3; ++i) {
      if(i === 0) {
        this.actives.push(true);
      } else {
        this.actives.push(false);
      }
    }
  }

  onTabChange(top) {
    if(top < 200) {
      this.setActives(0);
    } else if(top >= 200 && top < 290) {
      this.setActives(1);
    } else if(top >= 290) {
      this.setActives(2);
    }
  }

  onTab(e) {
    var el = e.target;
    var top = el.dataset.top;
    this.onTabChange(top);
    this.el.nativeElement.children[0].lastElementChild.scrollTop = top;
  }

  setActives(index: number) {
    this.actives.forEach((item, i) => {
        this.actives[i] = i === index;
    });
  }
}