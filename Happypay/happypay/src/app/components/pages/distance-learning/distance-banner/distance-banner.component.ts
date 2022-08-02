import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-distance-banner',
    templateUrl: './distance-banner.component.html',
    styleUrls: ['./distance-banner.component.scss']
})
export class DistanceBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    bgImage = [
        {
            img: 'assets/img/main-banner1.jpg'
        }
    ]

}