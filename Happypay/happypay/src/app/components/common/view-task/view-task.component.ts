import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tasktype } from 'src/app/types/tasks.type';
import { TaskService } from 'src/app/utils/data.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent implements OnInit {

  task:Tasktype;
  constructor(public dialogRef: MatDialogRef<ViewTaskComponent>, @Inject(MAT_DIALOG_DATA) 
  public data, public taskService: TaskService){ 
    this.task = taskService.getTask(data.id);
    this.task.description = this.task.description.replace(/\*/g, '\n');
    this.task.specifications = this.task.specifications.replace(/\*/g, '\n');
    this.task.instructions = this.task.instructions.replace(/\*/g, '\n');
    this.task.termsAndConditions = this.task.termsAndConditions.replace(/\*/g, '\n');
  }

  ngOnInit(): void {
  }

}
