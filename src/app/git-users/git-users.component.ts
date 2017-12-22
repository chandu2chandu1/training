import { GitUserModel } from './../models/gitUser.model';
import { GitUserService } from './../Services/git.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git-users',
  templateUrl: './git-users.component.html',
  styleUrls: ['./git-users.component.css']
})
export class GitUsersComponent implements OnInit {

  gitUserModel: GitUserModel[];
  searchUser: string;
  constructor(private gitUserService:GitUserService) { }

  ngOnInit() {
    this.gitUserService.getUsers().subscribe(
      response => {
        this.gitUserModel = response.json();
      }
    )
  }

  searchUsers() {
    console.log(this.searchUser);
    this.gitUserService.searchUser(this.searchUser).subscribe(
      response => {
        this.gitUserModel = [response.json()];
      }
    )
  }

}
