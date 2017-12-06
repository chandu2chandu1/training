import { Component } from '@angular/core';

interface Employee {
  name: string,
  designation: string,
  experienceInDotNet: number,
  experienceInJS: number
}  

@Component({
  selector: 'helloworld',
  templateUrl: './helloworld.component.html'
})

// @Component({
//   selector: 'app-helloworld',
//   templateUrl: './helloworld.component.html',
//   //template:'<h2>Hello World, this is my first Angular code</h2>',
//   styleUrls: ['./helloworld.component.css']
// })


  
export class HelloworldComponent {
  myText = "Test is here";
  
  employee:Employee = {
    name : "Chandra Sekhar",
    designation : "Senior Software Engineer",
    experienceInDotNet : 6,
    experienceInJS: 4
  }
 

  constructor() { }

  updateMyModel(params:any) {
    this.employee.name = params.target.value;
  }
}
