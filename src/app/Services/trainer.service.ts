import { Observable } from 'rxjs/Observable';
import { Trainer } from './trainer.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TrainerService{

    private url = "http://localhost:60087/api/Trainers";

    constructor(private http:Http){}

    GetTrainers() {
        return this.http.get(this.url);
    }

    GetTrainerById(id: number) {
        return this.http.get(this.url + "/" + id);
    }

}