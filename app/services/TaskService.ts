import { Injectable } from '@angular/core';
import { Status } from '../../Status';
import {ApiService} from './api.service'
// import { stat } from 'fs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private _tasks: Task[] = [];
  /**
   *"
   */
  constructor(private httpClient: HttpClient) {
    
    
  }

  // addTask(description: string, status: Status) {
  //   const newTask: Task = new Task(description, status, false);
  //   this.httpClient.post(environment.baseUrl+"/create", newTask);
  //   //this._tasks.push(newTask);
  //  // console.log(this._tasks);
  // }
//   get tasks(){
//     return this.httpClient.get(environment.baseUrl+"/all");
// }

set tasks(value: Task[]) {
    this._tasks = value;
}
}

export class Task {
  id:number=0;
  description: string = '';
  status: Status = Status.Pending;
//  private _showDropdown:boolean = false;
  constructor(_id:number,  _desc: string, _status: Status){//}, showDropdown:boolean){
    this.description = _desc;
    this.status = _status;
    this.id = _id;
  //  this._showDropdown = showDropdown;
  }
 

  set showDropdown(value:boolean){
 //   this._showDropdown = value;
  }
  // get showDropdown():boolean{
  //   return ;//this._showDropdown;
  // }
  // set status(value:Status){
  //   this._status = value;
  // }
  // get status():Status{
  //   return this._status;
  // }
  // set id(num: number){
  //   this._id = num;
  // }
  // get id(): number{
  //   return this._id;
  // }
}