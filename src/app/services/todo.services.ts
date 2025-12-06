import { Injectable } from "@angular/core";
import { Itodo } from "./models/todo";
import { Observable, of } from "rxjs";   

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoArr: Array<Itodo> = [
    {
      todoItem: 'js',
      todoId: '123'
    },
    {
      todoItem: 'SASS',
      todoId: '124'
    }
  ];

  fetchAllTodos(): Observable<Itodo[]> {
    return of(this.todoArr);
  }
}
