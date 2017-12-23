import { GitUserModel } from './../models/gitUser.model';
import { GitUserService } from './../Services/git.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs';
import { Response } from '@angular/http/src/static_response';

@Component({
  selector: 'app-git-users',
  templateUrl: './git-users.component.html',
  styleUrls: ['./git-users.component.css']
})
export class GitUsersComponent implements OnInit {

  gitUserModel: GitUserModel[];
  searchUser: string;
  isSearch = false;
  isBusy = false;
  pageSize = 16;
  currentPage = 1;
  hasNextPage = true;

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
        this.isSearch = false;
      }
    )
  }

  searchUsers(pageIndex:number) {
    this.isBusy = true;
    this.hasNextPage = true;
    
    this.gitUserService.searchUser(this.searchUser, this.pageSize, pageIndex).subscribe(
      response => {
        if (pageIndex == 1)
          this.gitUserModel = response.json().items;
        else
          for (let item of response.json().items) {
            this.gitUserModel.push(item);
          }  
        this.isBusy = false;
        this.isSearch = true;
        
        let totalPages = Math.ceil(response.json().total_count / this.pageSize);

        if (totalPages == 0 || pageIndex == totalPages)
          this.hasNextPage = false;
        
        this.currentPage = pageIndex;
      }
    )
  }
}
