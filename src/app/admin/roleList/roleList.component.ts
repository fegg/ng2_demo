import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-roleList',
  templateUrl: './roleList.component.html',
  styleUrls: ['./roleList.component.css']
})
export class RoleListComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(v => console.log(v));
    this.activatedRoute.params.subscribe(v => console.log(v));
  }

}