import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-distance-blog',
    templateUrl: './distance-blog.component.html',
    styleUrls: ['./distance-blog.component.scss']
})
export class DistanceBlogComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    
    blogSlides: OwlOptions = {
        loop: true,
        nav: true,
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
                items: 1,
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