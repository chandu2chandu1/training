import { CourseService } from './../../Services/course.service';
import { CourseListComponent } from './../course-list/course-list.component';
import { CourseModel } from './../../models/course.model';
import { CourseDetailComponent } from './../course-detail/course-detail.component'

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  SelectedCourse: CourseModel;
  CourseList: CourseModel[];

  constructor(private courseService: CourseService, private route: ActivatedRoute) {
    this.CourseList = courseService.AllCourses();
  }
  
  ngOnInit() {
    let selectedId = parseInt(this.route.snapshot.params["id"]);
  }

  ShowCourseDetails(selectedCourse) {
    this.SelectedCourse = selectedCourse;
    console.log("Selected Course is ", selectedCourse);
  }
}
