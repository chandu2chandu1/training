import { GitUserService } from './../Services/git.service';
import { GitUserModel } from './../models/gitUser.model';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git-user-detail',
  templateUrl: './git-user-detail.component.html',
  styleUrls: ['./git-user-detail.component.css']
})
export class GitUserDetailComponent implements OnInit {

  selectedUser: GitUserModel;

  constructor(private activatedRoute: ActivatedRoute, private route: Router, private gitUserService: GitUserService) { 
    // let userName = this.activatedRoute.snapshot.paramMap.get("userId");
    // this.gitUserService.getUserDetail(userName).subscribe(
    //   response => this.showUserDetail(response.json())
    // );
  }

  ngOnInit() {
    this.activatedRoute.paramMap.switchMap((params: ParamMap) =>
      this.gitUserService.getUserDetail(params.get("userId"))
    ).subscribe(
        response => this.showUserDetail(response.json())
      );
  }

  showUserDetail(response) {
    this.selectedUser = response;
  }

  closeDialog() {
    this.route.navigate(["/git"]);
  }
}
