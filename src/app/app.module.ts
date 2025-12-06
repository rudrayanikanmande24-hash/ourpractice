import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoList2Component } from './todo-list2/todo-list2.component';
import { TodoList3Component } from './todo-list3/todo-list3.component';
import { TodoList4Component } from './todo-list4/todo-list4.component';
import { FormsModule } from '@angular/forms';
import { TodoForm2Component } from './todo-form2/todo-form2.component';
import { TodoForm3Component } from './todo-form3/todo-form3.component';
import { TodoForm4Component } from './todo-form4/todo-form4.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { StdListComponent } from './std-list/std-list.component';
import { StdFormComponent } from './std-form/std-form.component';
import { Post1FormComponent } from './post1-form/post1-form.component';
import { Post1ListComponent } from './post1-list/post1-list.component';



@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoList2Component,
    TodoList3Component,
    TodoList4Component,
    TodoForm2Component,
    TodoForm3Component,
    TodoForm4Component,
    PostListComponent,
    PostFormComponent,
    StdListComponent,
    StdFormComponent,
    Post1FormComponent,
    Post1ListComponent,
    

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
