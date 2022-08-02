import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-expert-trainer',
    templateUrl: './expert-trainer.component.html',
    styleUrls: ['./expert-trainer.component.scss']
})
export class ExpertTrainerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    trainerSlides: OwlOptions = {
        nav: false,
        margin: 30,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='flaticon-chevron'></i>",
            "<i class='flaticon-right-arrow'></i>"
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
                items: 3
            },
            1200: {
                items: 4
            },
            1550: {
                items: 5
            }
        }
    }

}