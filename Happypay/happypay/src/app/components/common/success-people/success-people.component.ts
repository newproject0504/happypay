import { Component, OnInit } from '@angular/core';
import { placements } from 'src/app/types/placements.type';
import { PlacementService } from 'src/app/utils/data.service';

@Component({
  selector: 'app-success-people',
  templateUrl: './success-people.component.html',
  styleUrls: ['./success-people.component.scss']
})
export class SuccessPeopleComponent implements OnInit {

  placementData: placements;
  constructor(public placementService: PlacementService) { }

  ngOnInit(): void {
    this.placementService.placementInfo.subscribe(data => {
      this.placementData = data;
    });
  }

}
