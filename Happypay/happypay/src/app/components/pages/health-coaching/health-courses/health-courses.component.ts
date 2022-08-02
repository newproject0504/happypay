import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-health-courses',
    templateUrl: './health-courses.component.html',
    styleUrls: ['./health-courses.component.scss']
})
export class HealthCoursesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    bgImage = [
        {
            img: 'assets/img/courses-bg.jpg'
        }
    ]

}