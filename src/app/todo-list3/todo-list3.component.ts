import { Component, OnInit } from '@angular/core';
import { Itodos2 } from '../services/models/todos2';
import { Todos2Service } from '../services/todos1.service';

@Component({
  selector: 'app-todo-list3',
  templateUrl: './todo-list3.component.html',
  styleUrls: ['./todo-list3.component.scss']
})
export class TodoList3Component implements OnInit {
  todosArr2:Itodos2[]=[];
  constructor(private _todosService:Todos2Service) { }

  ngOnInit(): void {
    this._todosService.fetchAllTodos().subscribe((res:Itodos2[])=>{
      this.todosArr2=res;
      console.log(this.todosArr2);
      
    })
  }

}
