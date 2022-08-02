import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-instructor-style-two',
    templateUrl: './instructor-style-two.component.html',
    styleUrls: ['./instructor-style-two.component.scss']
})
export class InstructorStyleTwoComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    advisorSlidesTwo: OwlOptions = {
        loop: true,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            }
        }
    }

}