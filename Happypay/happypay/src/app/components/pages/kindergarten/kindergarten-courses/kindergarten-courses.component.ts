import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-kindergarten-courses',
    templateUrl: './kindergarten-courses.component.html',
    styleUrls: ['./kindergarten-courses.component.scss']
})
export class KindergartenCoursesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    
    coursesSlides: OwlOptions = {
        loop: true,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        navText: [
            "<i class='flaticon-chevron'></i>",
            "<i class='flaticon-right-arrow'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    }

}