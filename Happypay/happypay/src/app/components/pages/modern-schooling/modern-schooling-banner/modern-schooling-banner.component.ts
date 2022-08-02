import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/utils/data.service';
import { Login } from '../../login/login.component';

@Component({
  selector: 'app-modern-schooling-banner',
  templateUrl: './modern-schooling-banner.component.html',
  styleUrls: ['./modern-schooling-banner.component.scss']
})
export class ModernSchoolingBannerComponent implements OnInit {

  title = '';

  constructor(public dialog: MatDialog, public homeService: HomeService) { 
    
  }

  ngOnInit(): void {
    this.homeService.homeInfo.subscribe(res => {
      this.title = res.mainContent;
    });
  }

  login() {
    this.dialog.open(Login, {width: '500px', height: '800px'});
  }
}
