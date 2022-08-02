import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/types/courses.type';
import { CourseService } from 'src/app/utils/data.service';
import { getCourses } from 'src/app/utils/dgraph';

@Component({
  selector: 'app-courses-style-one',
  templateUrl: './courses-style-one.component.html',
  styleUrls: ['./courses-style-one.component.scss']
})
export class CoursesStyleOneComponent implements OnInit {

  courses: Courses[] = [];

  constructor(public coursesService: CourseService) { }

  ngOnInit(): void {
    getCourses().then(res => {
      const data: Courses[] = res.data.queryCourses;
      data.forEach(element => {
        const qnaTemp:{question: string, answer: string[]}[] = []
        element.QNA.split('**').forEach((element,index) => {
          const temp = element.split('*');
          qnaTemp.push({question: temp[0], answer: temp.slice(1,temp.length)})
        });
        element.QNAObject = qnaTemp;
        element.requirementsObject = element.requirements.split('*');
        element.outcomesObject = element.outcomes.split('*');
      });
      data.sort((a, b) => a.position - b.position);
      this.courses = data;
    });
  }

}
