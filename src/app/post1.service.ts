import { Injectable } from '@angular/core';
import { Ip } from './services/models/todo';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Post1Service {

  constructor() { }

  post1Arr:Array<Ip>=[
 {
  title:'HTML',
  body:'HTML is hyperteaxr markup language',
  post1Id:'123'
 },
 {
  title:'CSS',
  body:'CSS is cascading stylesheet',
  post1Id:'124'
 }
  ]

  createPost(post:Ip){
        this.post1Arr.push(post)
      }
  
  fetchAllPost():Observable<Ip[]>{
    return of(this.post1Arr)
  }
  
}
