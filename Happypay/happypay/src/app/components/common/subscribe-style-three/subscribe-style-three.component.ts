import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-subscribe-style-three',
    templateUrl: './subscribe-style-three.component.html',
    styleUrls: ['./subscribe-style-three.component.scss']
})
export class SubscribeStyleThreeComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    bgImage = [
        {
            img: 'assets/img/subscribe-bg.jpg'
        }
    ]

}