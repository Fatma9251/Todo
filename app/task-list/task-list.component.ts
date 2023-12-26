import { Component, OnInit, Input } from '@angular/core';
import { Task, TaskService } from '../services/TaskService';
import { Status } from '../../Status';
import { ApiService } from '../services/api.service';
import { ApiResponse } from '../Models/response';
import { Router } from '@angular/router';
//import { DeleteTaskComponent } from '../delete-task/delete-task.component';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit
{
  @Input() taskId!: number;
   // taskService : TaskService = new TaskService();
    current_tasks : Task[] =[];//= [new Task("1st task", Status.Pending, false), new Task("2nd Task", Status.In_Progress, false)
 // ];

  constructor(private taskService : ApiService, private router: Router) { }

  deleteTask(task: Task):void{
    console.log("inside delete");
      this.taskService
      .deleteTaskById(task.id).subscribe(
        res =>{
          this.callDB()
        },
        error => {
          console.log("error");
        }
      );
  }
  DelTask(task:Task){
    this.deleteTask(task)
  }
  ngOnInit(): void {
    this.callDB()
  }

  callDB() {
    this.taskService.getAllTasks().subscribe(
    res => {
      const response = res as ApiResponse;
      this.current_tasks = response.data as Task[]
    },
    err => console.error(err)  
    );
  }
}
