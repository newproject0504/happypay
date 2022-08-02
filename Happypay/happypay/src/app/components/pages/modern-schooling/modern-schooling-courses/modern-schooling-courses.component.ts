import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/types/courses.type';
import { CourseService } from 'src/app/utils/data.service';
import { getCourses } from 'src/app/utils/dgraph';

@Component({
  selector: 'app-modern-schooling-courses',
  templateUrl: './modern-schooling-courses.component.html',
  styleUrls: ['./modern-schooling-courses.component.scss']
})
export class ModernSchoolingCoursesComponent implements OnInit {

  courses: Courses[] = [];

  constructor(public coursesService: CourseService) { }

  ngOnInit(): void {
    getCourses().then(res => {
      const data: Courses[] = res.data.queryCourses;
      data.forEach(element => {
        const qnaTemp:{question: string, answer: string[]}[] = []
        element.QNA.split('**').forEach(element => {
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
