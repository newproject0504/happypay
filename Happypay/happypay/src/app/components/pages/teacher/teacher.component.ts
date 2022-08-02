import { Component, OnInit } from '@angular/core';
import { Instructor } from 'src/app/types/about.type';
import { AboutService } from 'src/app/utils/data.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  instructors: Instructor[];

  constructor(public aboutService: AboutService) { }

  ngOnInit(): void {
    this.aboutService.aboutInfo.subscribe(data => {
      this.instructors = data.instructors;
      this.instructors.sort((a, b) => parseInt(a.id)-parseInt(b.id));
    });
  }

  
  bgImage = [
    {
        img: 'assets/img/register-shape.jpg'
    }
]

  submit(form){
      var name = form.name;
      console.log(name);
      
      var email = form.email;
      console.log(email);

      var number = form.number;
      console.log(number);
      
      var message = form.message;
      console.log(message);
  }

}
