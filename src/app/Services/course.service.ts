import { CourseModel } from './../models/course.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CourseService{

    private CourseList: CourseModel[] = [
        new CourseModel(
            1,
            "DOT NET",
            "NET is a Microsoft web services strategy to connect information, people, systems, and devices through software, making it easier for users to share and use their information between multiple websites, programs, and computers.", "https://vslive.com/Blogs/News-and-Tips/2017/01/~/media/ECG/VSLive/Blogs/aspnet_logo.jpg"),

        new CourseModel(
            2,
            "ANGULAR",
            "Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop", "http://www.tivix.com/api/images/A3CYu81qsxh8d_u1539SGgdbQ2A=/244/original/.png"
        ),

        new CourseModel(
            3,
            "ReactJS",
            "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
            "https://cdn.worldvectorlogo.com/logos/react.svg"),
        
        new CourseModel(
            4,
            "Merck Merise",
            "All about the Merck Merize.. Come let's have fun with dance and drama then food and sleep..",
            "https://www.google.com/a/sial.com/images/logo.gif"
        )
    ];

    public AllCourses(): CourseModel[] {
        return this.CourseList;
    }

    public AddCourse(newCourse: CourseModel) {
        this.CourseList.push(newCourse);
    }

    public GetCourseById(CourseId: number) {
        let selectedCourse: CourseModel = this.CourseList.find(c => c.Id == CourseId);
        if (selectedCourse)
            return selectedCourse;    
    }
}