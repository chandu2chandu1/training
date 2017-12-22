import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GitUserService{

    gitUrl: string = "https://api.github.com";
    
    constructor(private http:Http) {
    }

    getUsers() {
        return this.http.get(this.gitUrl + "/users");
    }

    searchUser(userId: string) {
        return this.http.get(this.gitUrl + "/users?q=" + userId);
    }

}