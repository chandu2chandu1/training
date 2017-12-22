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
  isBusy = false;

  constructor(private gitUserService:GitUserService) { }

  ngOnInit() {
    //this.getAllUsers();
  }

  getAllUsers() {
    this.isBusy = true;
    this.gitUserService.getUsers().subscribe(
      response => {
        this.gitUserModel = response.json();
        this.isBusy = false;
      }
    )
  }

  searchUsers() {
    console.log(this.searchUser);
    this.isBusy = true;
    this.gitUserService.searchUser(this.searchUser).subscribe(
      response => {
        this.gitUserModel = response.json().items;
        this.isBusy = false;
      }
    )
  }

}
