import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StdService } from '../std.service';
import { UuidService } from '../uuid.service';
import { Istd } from '../services/models/todo';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
@ViewChild('stdForm') stdForm !:NgForm
private _stdService = inject(StdService)
private _UuidService = inject(UuidService)
  constructor() { }

  ngOnInit(): void {
  }

  onStdAdd(){
    if(this.stdForm.valid){
      let stdObj:Istd={...this.stdForm.value,stdId:this._UuidService.uuid()}
      console.log(stdObj);
      this.stdForm.reset()
      this._stdService.crateStd(stdObj)
      
    }
  }


}
