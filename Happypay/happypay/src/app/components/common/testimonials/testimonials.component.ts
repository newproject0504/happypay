import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-testimonials',
    templateUrl: './testimonials.component.html',
    styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    
    testimonialsSlides: OwlOptions = {
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoHeight: true,
        animateOut: 'fadeOut',
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ]
    }

}