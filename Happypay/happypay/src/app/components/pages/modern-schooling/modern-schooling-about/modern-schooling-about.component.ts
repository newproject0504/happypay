import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { About } from 'src/app/types/about.type';
import { AboutService } from 'src/app/utils/data.service';
import { Login } from '../../login/login.component';

@Component({
  selector: 'app-modern-schooling-about',
  templateUrl: './modern-schooling-about.component.html',
  styleUrls: ['./modern-schooling-about.component.scss']
})
export class ModernSchoolingAboutComponent implements OnInit {

  about: About;
  
  constructor(public dialog: MatDialog, public aboutService: AboutService) { }

  ngOnInit(): void {
    this.aboutService.aboutInfo.subscribe(res => {
      this.about = res;
    });
  }

  login() {
    this.dialog.open(Login,{width: '500px', height: '800px'});
  }
}
