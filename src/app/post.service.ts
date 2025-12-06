import { Injectable } from '@angular/core';
import { Ipost, Itodo } from './services/models/todo';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  postArr:Array<Ipost> = [
  {
    userId: 1,
    name:'lapotop',
    title: "Post One",
    body: "Body of post one",
    postId:'124'
  },
  {
    userId: 1,
    name:'mouse',
    title: "Post Two",
    body: "Body of post two",
    postId:'124'
  },
  {
    userId: 2,
    name:'keyboard',
    title: "Post Three",
    body: "Body of post three",
    postId:'q25'
  }
];

createPost(post:Ipost){
      this.postArr.push(post)
    }

fetchAllPost():Observable<Ipost[]>{
  return of(this.postArr)
}

}
