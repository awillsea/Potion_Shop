import { Component, OnInit } from '@angular/core';
import { PotionAndWiz } from '../potionandwiz';
import { PotionAndWizService } from '../potion-and-wiz.service';
import { StinkCartService } from '../stink-cart.service';
import { StinkyCartItem } from '../cartitem';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

totalPrice:string = this.cook.get("totalPrice");

  constructor( private cartSrv: StinkCartService, private cook:CookieService) {
  }
  
  
  ngOnInit(): void {
      this.refresh();
    }
    
    TheList: StinkyCartItem[] = [];

    refresh() {
      this.cartSrv.getAll(
  
        // This function receives the data
        (result: StinkyCartItem[]) => {
          this.TheList = result;
          this.totalPrice = this.cook.get("totalPrice");
        }
      )
    }

    removeFromCart(cartId: number) {
      this.cartSrv.delete(()=>{
        this.refresh();
        console.log(cartId)
      },
      cartId);
      // this.refresh();
  
    }

}
