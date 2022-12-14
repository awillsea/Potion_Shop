import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TheCookieService {

  constructor(private cookie:CookieService) { 

  }

  clearCart(){
    this.cookie.set("totalPrice","0.00");
    this.cookie.set("cartTotal","0");
  }

  addcartTotal(){
    
    let currentTotal:string = this.cookie.get("cartTotal");

    let newtotalnumber:number = Number(currentTotal) + 1;

    this.cookie.set("cartTotal",String(newtotalnumber));

    console.log('current Total: '+currentTotal)
  }

removeOneCartTotal(){
    
    let currentTotal:string = this.cookie.get("cartTotal");

    let newtotalnumber:number = Number(currentTotal) - 1;

    this.cookie.set("cartTotal",String(newtotalnumber));

    console.log('current Total: '+ currentTotal)
  }


  addTotalPrice(addThis:number){
    let currentTotal:string = this.cookie.get("totalPrice");

    let ctNum:number = Number(currentTotal);
    let newNum:number = ctNum + addThis;

    this.cookie.set("totalPrice",String(newNum));
  }

  removeFromTotalPrice(addThis:number){
    let currentTotal:string = this.cookie.get("totalPrice");

    let ctNum:number = Number(currentTotal);
    let newNum:number = ctNum - addThis;

    this.cookie.set("totalPrice",String(newNum));
  }
}
