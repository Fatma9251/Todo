import { Component, OnInit } from '@angular/core';
import { Status } from '../../Status';
import { TaskService, Task  } from '../services/TaskService';
import { Router } from '@angular/router';
import { CLIENT_RENEG_LIMIT } from 'tls';
import { ApiService} from '../services/api.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent implements OnInit {
  ngOnInit(): void {
  }

  taskDescription: string = '';
  taskStatus: Status = Status.Pending;

  constructor(private taskService: ApiService, private router: Router) {}

  createTask(): void {
    console.log("inside create");

    if (this.taskDescription.trim() === "") {
      this.taskDescription = 'add description';
      this.taskStatus = Status.Pending;
    }
      console.log(this.taskDescription);
      console.log(this.taskStatus);
      this.taskService
      .createTask(new Task(0,this.taskDescription, this.taskStatus)).subscribe(
        res =>{
        console.log(res);
          this.router.navigate(["/list"]);
        },
        error => {
          console.log("error");
        }
      );
      //console.log(this.taskDescription);
     // console.log(this.taskStatus);
      //console.log(this.taskService.tasks);
    
  }

}
