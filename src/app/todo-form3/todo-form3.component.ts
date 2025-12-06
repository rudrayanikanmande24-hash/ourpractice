import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todos2Service } from '../services/todos1.service';
import { UuidService } from '../uuid.service';
import { Itodos2 } from '../services/models/todos2';

@Component({
  selector: 'app-todo-form3',
  templateUrl: './todo-form3.component.html',
  styleUrls: ['./todo-form3.component.scss']
})
export class TodoForm3Component implements OnInit {
@ViewChild('todoForm') todoForm! :NgForm
private _todosService = inject(Todos2Service)
private _UuidService = inject(UuidService)
  constructor() { }

  ngOnInit(): void {
  }

  onTodoAdd(){
    if(this.todoForm.valid){
       let obj : Itodos2={...this.todoForm.value,todoId:this._UuidService.uuid()}
       console.log(obj);
       this.todoForm.reset()
       this._todosService.createTodo(obj)
       
    }
  }
}
