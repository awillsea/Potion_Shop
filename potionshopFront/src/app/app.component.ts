import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { TheCookieService } from './thecookie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'potionshopFront';

  cartTotal = this.cook.get("cartTotal");
  totalPrice = this.cook.get("totalPrice");
 

  constructor(private cookie:TheCookieService,private cook:CookieService,){
   this.refresh();
    const cookieReal:boolean = cook.check("cartTotal")
    if(!cookieReal){
      cookie.clearCart();
    }
  }
  
  editedCart(num:string){
    this.cartTotal = this.cook.get("cartTotal");
    console.log(num);
  }

  refresh(){
    this.cartTotal = this.cook.get("cartTotal");
    this.totalPrice = this.cook.get("totalPrice");
  }

}
