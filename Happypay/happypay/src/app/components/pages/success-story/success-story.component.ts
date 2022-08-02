import { Component, OnInit } from '@angular/core';
import { placements } from 'src/app/types/placements.type';
import { PlacementService } from 'src/app/utils/data.service';

@Component({
  selector: 'app-success-story',
  templateUrl: './success-story.component.html',
  styleUrls: ['./success-story.component.scss']
})
export class SuccessStoryComponent implements OnInit {

  placementData: placements

  constructor(public placementSerive: PlacementService) { }

  ngOnInit(): void {
    this.placementSerive.placementInfo.subscribe(data => {
      this.placementData = data;
    });
  }

}
