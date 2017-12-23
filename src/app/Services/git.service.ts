import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GitUserService{

    gitUrl: string = "https://api.github.com";
    header: {};
    
    constructor(private http: Http) {
        this.header =
            {
                client_id: "",
                client_secret: ""
            }
    }

    getUsers() {
        return this.http.get(this.gitUrl + "/users", this.header);
    }

    searchUser(userId: string, pageSize: number, pageIndex:number) {
        return this.http.get(this.gitUrl + "/search/users?q=" + userId +
            "&page=" + pageIndex +
            "&per_page=" + pageSize
            , this.header);
    }

}