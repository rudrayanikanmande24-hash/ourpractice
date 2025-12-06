import { Injectable } from "@angular/core";
import { Itodo3 } from "./todos3";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class Todos2Service{
  todosArr3:Array<Itodo3>=[
    {
        todoItem:'Flex',
        todoId:'123'
    },{
        todoItem:'JS',
        todoId:'124'
    }
  ]

  fetchAllTodos():Observable<Itodo3[]>{
    return of(this.todosArr3)
  }
}