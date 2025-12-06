import { Component, OnInit } from '@angular/core';
import { Ip } from '../services/models/todo';
import { Post1Service } from '../post1.service';

@Component({
  selector: 'app-post1-list',
  templateUrl: './post1-list.component.html',
  styleUrls: ['./post1-list.component.scss']
})
export class Post1ListComponent implements OnInit {

  postArr1:Ip[]=[];

  constructor(private _postpService:Post1Service) { }

  ngOnInit(): void {
    this._postpService.fetchAllPost().subscribe((res:Ip[])=>{
      this.postArr1=res;
      console.log(this.postArr1);
      
    })
  }

}
