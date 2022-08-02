import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-testimonials-style-two',
    templateUrl: './testimonials-style-two.component.html',
    styleUrls: ['./testimonials-style-two.component.scss']
})
export class TestimonialsStyleTwoComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    
    testimonialsSlidesTwo: OwlOptions = {
        items: 1,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ]
    }

}