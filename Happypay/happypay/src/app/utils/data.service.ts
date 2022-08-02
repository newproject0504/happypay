import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { About } from "../types/about.type";
import { Courses } from "../types/courses.type";
import { Home } from "../types/home.types";
import { User } from "../types/login.type";
import { placements } from "../types/placements.type";
import { TaskTransaction, Tasktype, WalletTransaction } from "../types/tasks.type";
import { getAbout, getCourses, getHome, getPlacements, getTasks, getTaskTransaction, getUser } from "./dgraph";

@Injectable({
  providedIn: "root",
})
export class HomeService implements OnInit {
  public homeData = new BehaviorSubject<Home>({mainContent:'', cardsJSON: ''});;
  
  constructor() {
    getHome().then(res => {
      const data: Home = res.data.getHome;
      data.cards = JSON.parse(data.cardsJSON);
      this.homeData.next(data);
    });
  }

  get homeInfo() {
    return this.homeData.asObservable();
  }

  ngOnInit(): void {
  }
}

@Injectable({
  providedIn: "root",
})
export class AboutService implements OnInit {
  public aboutData = new BehaviorSubject<About>({content:'', instructorsJSON: '', instructors: [], title: '', id:"", title2: '', content2: '', image: ''});
  
  constructor() {
    getAbout().then(res => {
      const data: About = res.data.getAbout;
      data.instructors = JSON.parse(data.instructorsJSON);
      this.aboutData.next(data);
    });
  }

  get aboutInfo() {
    return this.aboutData.asObservable();
  }

  ngOnInit(): void {
  }
}


@Injectable({
  providedIn: "root",
})
export class PlacementService implements OnInit {
  public placementData = new BehaviorSubject<placements>({videoLink: '', image: '', studentsJSON: '', students: [], id: ''});
  
  constructor() {
    getPlacements().then(res => {
      const data: placements = res.data.getPlacements;
      data.students = JSON.parse(data.studentsJSON);
      this.placementData.next(data);
    });
  }

  get placementInfo() {
    return this.placementData.asObservable();
  }

  ngOnInit(): void {
  }
}


@Injectable({
  providedIn: "root",
})
export class CourseService implements OnInit {
  public coursesData = new BehaviorSubject<Courses[]>([]);
  
  constructor() {
    getCourses().then(res => {
      const data: Courses[] = res.data.queryCourses;
      data.forEach(element => {
        const qnaTemp: { question: string, answer: string[] }[] = []
        element.QNA.split('**').forEach(item => {
          const temp = item.split('*');
          qnaTemp.push({ question: temp[0], answer: temp.slice(1,temp.length) });
        });
        element.QNAObject = qnaTemp;
        element.requirementsObject = element.requirements.split('*');
        element.outcomesObject = element.outcomes.split('*');
      });
      this.coursesData.next(data);
    });
  }

  get coursesInfo() {
    return this.coursesData.asObservable();
  }

  ngOnInit(): void {
  }
}

@Injectable({
  providedIn: "root",
})
export class UserService implements OnInit {
  public user = new BehaviorSubject<User>(null);
  
  constructor() {
    const user: User = JSON.parse(sessionStorage.getItem('user'));
    if (user) {
      getUser(user.phone).then(res => {
        const userref = res.data.queryUser;
        if (userref.length > 0) {
          this.user.next(userref[0]);
        }
      });
    }
  }

  fetch(phone: string) {
    getUser(phone).then(res => {
      const userref = res.data.queryUser;
      if (userref.length > 0) {
        this.user.next(userref[0]);
      }
    });
  }

  logout() {
    sessionStorage.removeItem('user');
    this.user.next(null);
  }

  get getUser() {
    return this.user.asObservable();
  }

  ngOnInit(): void {
  }
}

@Injectable({
  providedIn: "root",
})
export class TaskService implements OnInit {
  public tasks = new BehaviorSubject<Tasktype[]>([]);

  constructor() {
    getTasks().then(res => {
      this.tasks.next(res.data.queryTask);
    });
  }

  get getTasks() {
    return this.tasks.asObservable();
  }

  getTask(id: string) {
    return this.tasks.value.find(task => task.id === id);
  }

  ngOnInit(): void {
  }
}


