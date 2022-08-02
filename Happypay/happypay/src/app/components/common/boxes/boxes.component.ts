import { Component, OnInit } from '@angular/core';
import { Home, HomeCard } from 'src/app/types/home.types';
import { HomeService } from 'src/app/utils/data.service';
import { getHome } from 'src/app/utils/dgraph';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.scss']
})
export class BoxesComponent implements OnInit {

  cards: [HomeCard, HomeCard, HomeCard];

  constructor(public homeService: HomeService) { 
  }

  ngOnInit(): void {
    this.homeService.homeInfo.subscribe(res => {
      this.cards = res.cards;
    });
  }

}
