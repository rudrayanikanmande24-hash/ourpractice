import { Component, OnInit } from '@angular/core';
import { Ipost } from '../services/models/todo';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  postArr:Ipost[]=[];

  constructor(private _postService:PostService) { }

  ngOnInit(): void {
    this._postService.fetchAllPost().subscribe((res:Ipost[])=>{
      this.postArr=res;
      console.log(this.postArr);
      
    })
  }

}
