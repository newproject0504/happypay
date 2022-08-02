import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-yoga-banner',
    templateUrl: './yoga-banner.component.html',
    styleUrls: ['./yoga-banner.component.scss']
})
export class YogaBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    bgImage = [
        {
            img: 'assets/img/main-banner3.jpg'
        }
    ]

}