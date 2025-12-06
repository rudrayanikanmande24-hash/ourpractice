import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { TodoService } from '../services/todo.services';
import { NgForm } from '@angular/forms';
import { UuidService } from '../uuid.service';
import { Itodo } from '../services/models/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @ViewChild('todoForm') todoForm ! : NgForm
  private _todoSevice = inject(TodoService);
  private _UuidService = inject(UuidService)
  constructor() { }

  ngOnInit(): void {
  }


  onTodoAdd(){
    if(this.todoForm.valid){
      let obj : Itodo={...this.todoForm.value,todoId:this._UuidService.uuid()}
      console.log(obj);
      this.todoForm.reset()
      this._todoSevice.createTodo(obj)
      
    }
  }
}
