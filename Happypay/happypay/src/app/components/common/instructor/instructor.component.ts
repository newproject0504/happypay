import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Instructor } from 'src/app/types/about.type';
import { AboutService } from 'src/app/utils/data.service';

@Component({
    selector: 'app-instructor',
    templateUrl: './instructor.component.html',
    styleUrls: ['./instructor.component.scss']
})
export class InstructorComponent implements OnInit {

    instructors: Instructor[] = [];
    constructor(public aboutService: AboutService) { }

    ngOnInit(): void {
        this.aboutService.aboutInfo.subscribe(res => {
            this.instructors = res.instructors;
        });
    }

    advisorSlides: OwlOptions = {
        loop: true,
        nav: false,
        dots: true,
        margin: 30,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            }
        }
    }

}