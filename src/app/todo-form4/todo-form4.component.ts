import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todos2Service } from '../services/todos3.service';
import { UuidService } from '../uuid.service';
import { Itodo3 } from '../services/todos3';

@Component({
  selector: 'app-todo-form4',
  templateUrl: './todo-form4.component.html',
  styleUrls: ['./todo-form4.component.scss']
})
export class TodoForm4Component implements OnInit {
  @ViewChild('todoForm') todoForm ! : NgForm
  private _todoService = inject(Todos2Service)
  protected _UuidService = inject(UuidService)
  constructor() { }

  ngOnInit(): void {
  }

  onTodoAdd(){
    if(this.todoForm.valid){
     let obj:Itodo3={...this.todoForm.value,todoId:this._UuidService.uuid()}
     console.log(obj);
     this.todoForm.reset()
     this._todoService.createTodo(obj)
     
    }
  }

}
