import { Trainer } from './../../Services/trainer.model';
import { TrainerService } from './../../Services/trainer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  private trainer: Trainer[];

  constructor(private trainerService:TrainerService) { }

  ngOnInit() {
    
  }

}
