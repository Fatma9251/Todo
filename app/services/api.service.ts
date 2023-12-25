import { Routes } from '@angular/router';
import { environment } from './../../environments/environment';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Task } from './TaskService';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private BaseUrl = "http://localhost:8082";

  constructor(private http : HttpClient) { }
  
  myEvent = new EventEmitter<any>();

  test(){
    console.log("test service");
  }

  getAllTasks(){
    return this.http.get(environment.baseUrl+"/all");
  }

  getTaskById(id:number){
    return this.http.get(environment.baseUrl+id);
  }

  deleteTaskById(id: number){
    return this.http.delete(environment.baseUrl+id);
  }

  createTask(data:any){
    return this.http.post(environment.baseUrl+"/create" , data);
  }

  updateTask(id: number, data:any){
    
    const httpOptions : Object ={
      headers: new HttpHeaders( {'Accept':'application/json' , 'Content-type':'application/json' }),
      observe: 'response'
    }

    return this.http.put(environment.baseUrl+"/"+id , data , httpOptions);
  }
  
}
