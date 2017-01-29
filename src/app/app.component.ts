import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import sideBarConfig from './config/sidebar';

interface ISideBarConfig {
    routeLink: string,
    text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  sideBarConfig: Array<ISideBarConfig>;

  constructor(private ActivatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.sideBarConfig = sideBarConfig;

    // 初始化的时候订阅 title 的变化
    const route = this.ActivatedRoute;
    route.queryParams.subscribe(v => {
      console.log(v);
      this.title = v['title'] || '首页';
    });
  }
}
