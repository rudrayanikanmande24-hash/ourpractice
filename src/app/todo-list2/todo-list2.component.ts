import { Component, OnInit } from '@angular/core';
import { Itodos } from '../services/models/todo1';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todo-list2',
  templateUrl: './todo-list2.component.html',
  styleUrls: ['./todo-list2.component.scss']
})
export class TodoList2Component implements OnInit {

  todosArr: Itodos[] = [];

  constructor(private _todosService: TodosService) {}

  ngOnInit(): void {
    this._todosService.fetchAllTodos().subscribe((res: Itodos[]) => {
      this.todosArr = res;
      console.log(this.todosArr);
    });
  }

}
