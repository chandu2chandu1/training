import { CourseService } from './../../Services/course.service';
import { Component, OnInit, HostBinding } from '@angular/core';
import { CourseModel } from '../../models/course.model';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit{

  selectedCourse: CourseModel;
  message: string;
  router: Router;

  ngOnInit() {
    this.route.params.subscribe(
      params =>
        this.selectedCourse = this.courseService.GetCourseById(params["id"])
    );
  }

  constructor(private courseService: CourseService, private route:ActivatedRoute) {
    this.message = "";
   }
}
