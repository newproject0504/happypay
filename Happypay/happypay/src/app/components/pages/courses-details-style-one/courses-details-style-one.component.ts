import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Instructor } from 'src/app/types/about.type';
import { Courses } from 'src/app/types/courses.type';
import { AboutService, CourseService } from 'src/app/utils/data.service';

@Component({
  selector: 'app-courses-details-style-one',
  templateUrl: './courses-details-style-one.component.html',
  styleUrls: ['./courses-details-style-one.component.scss']
})
export class CoursesDetailsStyleOneComponent implements OnInit {

  id = '';
  course: Courses;
  courses: Courses[] = [];
  instructor: Instructor;
  constructor(private route: ActivatedRoute,public coursesService: CourseService, public aboutService: AboutService) {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
  }

  ngOnInit(): void {
    this.coursesService.coursesInfo.subscribe(res => {
      this.courses = res;
      this.course = res.find(item => item.id === this.id);
      this.aboutService.aboutInfo.subscribe(res => {
        this.instructor = res?.instructors.find(item => item.name === this.course.instructor);
      });
    });
  }

  open(document: HTMLDivElement, iTag: HTMLElement, main: HTMLDivElement) {
    if (document.style.maxHeight === '400px') {
      main.style.backgroundColor = 'white';
      main.style.color = 'black';
      main.getElementsByTagName('p')[0].style.color = 'black';
      document.style.maxHeight = '0px';
      iTag.style.transform = 'rotate(0deg)';
    }
    else {
      main.style.backgroundColor = '#4a69fe';
      main.style.color = 'white';
      main.getElementsByTagName('p')[0].style.color = 'white';
      document.style.maxHeight = '400px';
      iTag.style.transform = 'rotate(180deg)';
    }
  }

}
