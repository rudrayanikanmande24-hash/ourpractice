import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UuidService } from '../uuid.service';
import { TodosService } from '../services/todos.service';
import { Itodos } from '../services/models/todo1';

@Component({
  selector: 'app-todo-form2',
  templateUrl: './todo-form2.component.html',
  styleUrls: ['./todo-form2.component.scss']
})
export class TodoForm2Component implements OnInit {
  @ViewChild('todoForm') todoForm ! : NgForm 
  private _todosService = inject(TodosService)
  private _UuidService = inject(UuidService)
  constructor() { }

  ngOnInit(): void {
  }

  onTodoAdd(){
    if(this.todoForm.valid){
      let obj:Itodos={...this.todoForm.value,todoId:this._UuidService.uuid()}
      console.log(obj);
      this.todoForm.reset()
      this._todosService.createTodo(obj)
      
    }
  }


}
