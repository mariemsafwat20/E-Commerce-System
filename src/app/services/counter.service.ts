import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter: BehaviorSubject<any> =  new BehaviorSubject<number>(0);

  constructor() { }

  updateCounter(value:number){
    this.counter.next(value);
  }

  getCounter():Observable<any>{
    return this.counter
  }

  addToCart(){
    this.counter.next(this.counter.value + 1);
  }
}
