import { CourseModel } from './../../models/course.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  @Input() courseList: CourseModel[];
  @Output('CourseSelectionChange') courseSelection = new EventEmitter<CourseModel>();

  CourseSelectionChange(selectedCourse) {
    this.courseSelection.emit(selectedCourse); 
  }
}
