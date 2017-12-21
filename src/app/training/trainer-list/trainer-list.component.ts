import { Component, OnInit } from '@angular/core';
import { Trainer } from './../../Services/trainer.model';
import { TrainerService } from './../../Services/trainer.service';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css']
})
export class TrainerListComponent implements OnInit {

  private trainerList: Trainer[];

  constructor(private trainerService: TrainerService) { }

  ngOnInit() {
    this.trainerService.GetTrainers().subscribe(
      response => {
        this.trainerList = response.json();
        console.log("From trainer list component", this.trainerList);
        alert("Hello");
      }
    );
  }

}
