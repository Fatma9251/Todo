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

  constructor(private taskService : ApiService, private router: Router) {
    console.log("call service");
    this.taskService.getAllTasks().subscribe(
     res =>{
      let response = res as ApiResponse;
       this.current_tasks = response.data as Task[];
       console.log("service called");
       console.log(Object.keys(res));
     }
,
err =>{ console.log(err);}    
);
    }
  deleteTask():void{
    console.log("inside delete");
      this.taskService
      .deleteTaskById(this.taskId).subscribe(
        res =>{
          this.router.navigate(["/list"]);
        },
        error => {
          console.log("error");
        }
      );
  }
  DelTask(){
    console.log("delete btn clicked");
  }
  ngOnInit(): void {
//     console.log("call service");
//      this.taskService.getAllTasks().subscribe(
//       res =>{
//         this.current_tasks = res as Task[];
//         console.log("service called");
//         console.log(this.current_tasks);
//       }
// ,
// err =>{ console.log(err);}    
// );
    //this.taskService.tasks;
  }

}
