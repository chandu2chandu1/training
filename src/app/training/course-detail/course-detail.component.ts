import { CourseModel } from './../../models/course.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  @Input('SelectedCourse') selectedCourse: CourseModel;

  constructor() { }

  ngOnInit() {
  }

}
