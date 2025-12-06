import { Component, OnInit } from '@angular/core';
import { Istd } from '../services/models/todo';
import { StdService } from '../std.service';

@Component({
  selector: 'app-std-list',
  templateUrl: './std-list.component.html',
  styleUrls: ['./std-list.component.scss']
})
export class StdListComponent implements OnInit {

  stdArr:Istd[]=[];
  constructor(private _stdService:StdService) { }

  ngOnInit(): void {
    this._stdService.fetchAllstd().subscribe((res:Istd[])=>{
      this.stdArr=res;
      console.log(this.stdArr);
      
    })
  }



}
