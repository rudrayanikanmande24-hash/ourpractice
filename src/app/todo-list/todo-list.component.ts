import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.services';
import { Itodo } from '../services/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  
  todoArr: Itodo[] = [];

  constructor(private _todoSevice: TodoService) { }

  ngOnInit(): void {
    this._todoSevice.fetchAllTodos().subscribe((res: Itodo[]) => {
      this.todoArr = res;
      console.log(this.todoArr);
    });
  }

}
