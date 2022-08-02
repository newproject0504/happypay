import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-vendor-banner',
    templateUrl: './vendor-banner.component.html',
    styleUrls: ['./vendor-banner.component.scss']
})
export class VendorBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    bgImage = [
        {
            img: 'assets/img/banner-bg.jpg'
        }
    ]

}