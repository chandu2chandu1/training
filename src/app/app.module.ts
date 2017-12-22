import { TrainerService } from './Services/trainer.service';
import { TrimmerPipe } from './shared/trimmer.pipe';
//import { FilterPipe } from './shared/course-filter.pipe';

import { CourseService } from './Services/course.service';

import { DropDownDirective } from './shared/dropdown.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TrainingComponent } from './training/training.component';
import { CourseComponent } from './training/course/course.component';
import { CourseListComponent } from './training/course-list/course-list.component';
import { CourseDetailComponent } from './training/course-detail/course-detail.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { CreateCourseComponent } from './training/create-course/create-course.component';
import { EditCourseComponent } from './training/edit-course/edit-course.component';
import { HighlighterDirective } from './shared/highlighter.directive';
import { FilterPipe } from './shared/course-filter.pipe';
import { TrainerComponent } from './training/trainer/trainer.component';
import { TrainerListComponent } from './training/trainer-list/trainer-list.component';
import { TrainerDetailComponent } from './training/trainer-detail/trainer-detail.component';
import { GitUsersComponent } from './git-users/git-users.component';
import { GitUserService } from './Services/git.service';



const appRoutes: Routes = [
  {
    path: "courses",
    component: CourseComponent
  },
  {
    path: "courses/:id",
    component: CourseComponent
  },
  {
    path: "createcourse",
    component: CreateCourseComponent
  },
  // {
  //   path: "trainer",
  //   component: TrainingComponent
  // },
  {
    path: "demo",
    component: HelloworldComponent
  },
  {
    path: "editcourse/:id",
    component:EditCourseComponent
  },
  {
    path: "trainer",
    component: TrainerComponent,
    children: [{
      path: ":id",
      component: TrainerDetailComponent
    }]
  },
  {
    path:"git",
    component: GitUsersComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TrainingComponent,
    CourseComponent,
    CourseListComponent,
    CourseDetailComponent,
    DropDownDirective,
    HelloworldComponent,
    CreateCourseComponent,
    TrimmerPipe,
    EditCourseComponent,
    HighlighterDirective,
    FilterPipe,
    TrainerComponent,
    TrainerListComponent,
    TrainerDetailComponent,
    GitUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,{
        enableTracing:true
      }
    ),
    HttpModule
  ],
  providers: [CourseService, TrainerService, GitUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
