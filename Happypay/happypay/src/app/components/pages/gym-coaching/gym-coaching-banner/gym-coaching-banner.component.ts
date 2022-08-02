import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-gym-coaching-banner',
    templateUrl: './gym-coaching-banner.component.html',
    styleUrls: ['./gym-coaching-banner.component.scss']
})
export class GymCoachingBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    
    gymBannerSlides: OwlOptions = {
        items: 1,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplayHoverPause: true,
        navText: [
            "<i class='flaticon-chevron'></i>",
            "<i class='flaticon-right-arrow'></i>"
        ],
        responsive: {
            0: {
                autoHeight: true
            },
            576: {
                autoHeight: false
            },
            768: {
                autoHeight: false
            },
            992: {
                autoHeight: false
            }
        }
    }

    bgImage = [
        {
            img: 'assets/img/gym-banner-bg.jpg'
        }
    ]

}