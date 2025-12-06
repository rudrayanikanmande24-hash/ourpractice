import { Component, OnInit } from '@angular/core';
import { Itodo3 } from '../services/todos3';
import { Todos2Service } from '../services/todos3.service';

@Component({
  selector: 'app-todo-list4',
  templateUrl: './todo-list4.component.html',
  styleUrls: ['./todo-list4.component.scss']
})
export class TodoList4Component implements OnInit {
  todosArr3:Itodo3[]=[];
  constructor(private _todoService:Todos2Service) { }
 

  ngOnInit(): void {

    this._todoService.fetchAllTodos().subscribe((res:Itodo3[])=>{
      this.todosArr3=res
      console.log(this.todosArr3);
      
    })
  }

}
