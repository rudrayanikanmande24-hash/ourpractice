import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post1Service } from '../post1.service';
import { UuidService } from '../uuid.service';
import { Ip } from '../services/models/todo';

@Component({
  selector: 'app-post1-form',
  templateUrl: './post1-form.component.html',
  styleUrls: ['./post1-form.component.scss']
})
export class Post1FormComponent implements OnInit {
 @ViewChild('post1Form') post1Form ! : NgForm
 private _postpService = inject(Post1Service)
 private _UuidService = inject(UuidService)
  constructor() { }

  ngOnInit(): void {
  }

  onPostAdd(){
   if(this.post1Form.valid){
    let post:Ip={...this.post1Form.value,post1Id:this._UuidService.uuid()}
    console.log(post);
    this.post1Form.reset()
    this._postpService.createPost(post)
   }
  }
}
