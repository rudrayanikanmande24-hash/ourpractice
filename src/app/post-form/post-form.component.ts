import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';
import { UuidService } from '../uuid.service';
import { Ipost } from '../services/models/todo';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @ViewChild('postForm') postForm ! : NgForm
  private _postService = inject(PostService)
  private _UuidService = inject(UuidService)
  constructor() { }

  ngOnInit(): void {
  }

  onPostAdd(){
    if(this.postForm.valid){
     let postObj:Ipost={...this.postForm.value,postId:this._UuidService.uuid()}
     console.log(postObj);
     this.postForm.reset()
    this._postService.createPost(postObj)
     
    }
  }

}
