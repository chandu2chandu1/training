import { Trainer } from './../../Services/trainer.model';
import { TrainerService } from './../../Services/trainer.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import "rxjs/add/operator/switchMap";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: ['./trainer-detail.component.css']
})
export class TrainerDetailComponent implements OnInit {

  trainer: Trainer;

  constructor(private route:ActivatedRoute, private trainerService: TrainerService) { }

  ngOnInit() {
    let trainerId: number;
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.trainerService.GetTrainerById(+params.get("id"))
      ).subscribe(
        response => this.trainer = response.json()
      );
    // let trainerId = +this.route.snapshot.paramMap.get("id");

    // this.trainerService.GetTrainerById(trainerId).subscribe(
    //   response => this.trainer = response.json()
    // );
  }

  getTrainer(trainerId: number) {
    this.trainerService.GetTrainerById(trainerId);
  }
}
