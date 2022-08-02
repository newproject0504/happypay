import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/types/login.type';
import { TaskTransaction, Tasktype } from 'src/app/types/tasks.type';
import { TaskService, UserService } from 'src/app/utils/data.service';
import { addTaskTransaction, getTasks } from 'src/app/utils/dgraph';
import { ViewTaskComponent } from '../../common/view-task/view-task.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  tasks: Tasktype[] = [];
  user: User;
  tasksList = [];
  taskTransactions: TaskTransaction[] = [];
  constructor(public dialog: MatDialog, public taskService: TaskService, public userService: UserService) {
    taskService.getTasks.subscribe(res => {
      this.tasks = res;
      this.tasks.forEach(task => this.tasksList.push(task.title));
    });
    userService.user.subscribe(res => {
      this.user = res;
      if(this.user) this.taskTransactions = this.user.taskTransactions;
    });
  }

  ngOnInit(): void {
  }

  openTask(id:string){
    this.dialog.open(ViewTaskComponent,{width: '90vw', height: '80vh', data: {id: id}});
  }

  uploadTask(){
    const taskName: any = document.getElementById('taskName');
    const userName: any = document.getElementById('userName');
    const phoneNumber: any = document.getElementById('phoneNumber');
    const panNumber: any = document.getElementById('panNumber');
    const task = this.tasks.find(task => task.title === taskName.value);
    if(taskName.value && userName.value && phoneNumber.value && panNumber.value){
      const taskTransaction = this.taskTransactions.find(taskTransaction => {
        const temp = taskTransaction.id.split('_');
        return temp[1] === task.title;
      });
      if(taskTransaction){
        alert('You have already uploaded this task');
        return;
      }
      const TaskTransaction: TaskTransaction = {
        id: userName.value+"_"+taskName.value+"_"+(new Date().getTime()),
        amount: task.amount,
        date: new Date().toLocaleDateString(),
        taskName: taskName.value,
        userName: userName.value,
        phone: phoneNumber.value,
        pan: panNumber.value,
        status: "Pending",
        paymentStatus: "Pending",
        user: {
          id: this.user.id,
        },
        task: {
          id: task.id,
        }
      }
      addTaskTransaction(TaskTransaction).then(res => {
        alert("Task Uploaded Successfully");
        this.userService.fetch(this.user.phone);
      })
      .catch(err => {
        alert(err);
        console.log(err);
      });
    }
  }

}
