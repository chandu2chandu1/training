import { CourseService } from './../../Services/course.service';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent  {

  @ViewChild('f') courseForm: NgForm;
  message: string;

  constructor(private courseService: CourseService) {
    this.message = "";
   }

  SubmitForm(courseFormObject: NgForm) {
    const courseObject = courseFormObject.value;

    this.courseService.AddCourse({
      Id: 100,
      CourseName: courseObject.CourseName,
      CourseDescription: courseObject.Description,
      ImageUrl: courseObject.ImageUrl
    });

    console.log(courseFormObject);
    this.message = "Course created successfully.";
    courseFormObject.resetForm();
  }

}
