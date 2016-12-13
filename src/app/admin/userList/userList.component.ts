import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { IUser } from './IUser';

@Component({
  selector: 'app-userList',
  templateUrl: './userList.component.html',
  styleUrls: ['./userList.component.css'],
  providers: [AdminService]
})
export class UserListComponent implements OnInit {

  private userList: Array<IUser>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private adminService: AdminService) { }

  ngOnInit() {
    console.log(this.router);
    console.log(this.activatedRoute);

    this.adminService.getUserList().subscribe(userList => {
      this.userList = userList;
    });
  }

  ngDestroy() {
  }

  goDetail(e) {
    this.router.navigate(['/roleList', { id: null, text: 'xxx' }]);
  }

}