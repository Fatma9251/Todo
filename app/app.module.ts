import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskService } from './services/TaskService';
import { TaskListComponent } from './task-list/task-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
//import { DeleteTaskComponent } from './delete-task/delete-task.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTaskComponent,
    TaskListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [
    provideClientHydration(),
    TaskService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
