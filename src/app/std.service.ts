import { Injectable } from '@angular/core';
import { Istd } from './services/models/todo';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StdService {

  constructor() { }

   stdArr:Array<Istd>=[
    {
      fname:'Rudrayani',
      lname:'Kanmande',
      education:'BCA',
      age:21,
      email:'rudra@gmail.com',
      stdId:'123'
    },
    {
     fname:'Jhon',
      lname:'Doe',
      education:'BSC',
      age:25,
      email:'jd@gmail.com' ,
      stdId:'124'
    }
  ]

  crateStd(std:Istd){
    this.stdArr.push(std)
  }


  fetchAllstd():Observable<Istd[]>{
    return of(this.stdArr)
  }
}
