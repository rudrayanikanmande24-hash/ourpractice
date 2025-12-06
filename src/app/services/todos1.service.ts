import { Injectable } from "@angular/core";
import { Itodos2 } from "./models/todos2";
import { Observable, of } from "rxjs";


@Injectable({
    providedIn:'root'
})
export class Todos2Service{
  todosArr2:Array<Itodos2>=[
    {
        todoItem:'Angular',
        todoId:'123'
    },{
        todoItem:'JS',
        todoId:'124'
    }
  ]

  createTodo(todo:Itodos2){
      this.todosArr2.push(todo)
    }

  fetchAllTodos():Observable<Itodos2[]>{
    return of(this.todosArr2)
  }
}