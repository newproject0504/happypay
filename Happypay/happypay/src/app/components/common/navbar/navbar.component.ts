import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Courses } from 'src/app/types/courses.type';
import { User } from 'src/app/types/login.type';
import { CourseService, UserService } from 'src/app/utils/data.service';
import { Login } from '../../pages/login/login.component';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    user: User;
    courses: Courses[];

    constructor(public dialog: MatDialog, public userService: UserService, public courseService: CourseService, public route: Router) { }

    ngOnInit(): void {
        this.userService.getUser.subscribe(user => {
            this.user = user;   
        })
        this.courseService.coursesInfo.subscribe(courses => {
            this.courses = courses;
        });
    }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    login() {
        this.dialog.open(Login,{width: '500px', height: '800px'});
    }

    userPanel() {
    }

    focus() {
        const doc = document.getElementById('drop');
        doc.style.display = 'block';
    }

    blur() {
        setTimeout(() => {
            const doc = document.getElementById('drop');
            doc.style.display = 'none';
        }, 1000);
    }

    check(url: string) {
        this.route.navigateByUrl('/').then(re => {
            this.route.navigateByUrl('/' + url);
        });
    }

}



