import { Injectable } from "@angular/core";
import { Itodos } from "./models/todo1";
import { Observable, of } from "rxjs";


@Injectable({
    providedIn:'root'
})
export class TodosService{
   todosArr:Array<Itodos>=[
    {
        todoItem:'css',
        todoId:'123'
    },{
        todoItem:'html',
        todoId:'124'
    }
   ]

   createTodo(todo:Itodos){
       this.todosArr.push(todo)
     }
   

   fetchAllTodos() : Observable<Itodos[]>{
    return of(this.todosArr)
   }
}