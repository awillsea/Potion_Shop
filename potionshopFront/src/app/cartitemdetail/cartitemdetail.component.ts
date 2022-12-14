import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from '../app.component';
import { StinkyCartItem } from '../cartitem';
import { PotionAndWizService } from '../potion-and-wiz.service';
import { StinkCartService } from '../stink-cart.service';
import { TheCookieService } from '../thecookie.service';

@Component({
  selector: 'app-cartitemdetail',
  templateUrl: './cartitemdetail.component.html',
  styleUrls: ['./cartitemdetail.component.css']
})
export class CartitemdetailComponent implements OnInit {

  @Input() cartItem: StinkyCartItem = {
    ci_id: 0,
    potion_name: '',
    price: 5,
    photoUrl: ''
    };
  // oops
    @Output() sendCartId:EventEmitter<number> = new EventEmitter<number>()
    constructor(private cartSrv: StinkCartService,private cookie:TheCookieService,private appComp:AppComponent) {
      this.refresh(); }
      
      
      ngOnInit(): void {
        this.refresh();
      }
      
      TheList: StinkyCartItem[] = [];
  
      refresh() {
        this.cartSrv.getAll(
    
          // This function receives the data
          (result: StinkyCartItem[]) => {
            this.TheList = result;
          }
        )
      }

  deleteFromCart(){
      this.sendCartId.emit(this.cartItem.ci_id)
      console.log(this.cartItem.ci_id)
      this.cookie.removeOneCartTotal();
      this.cookie.removeFromTotalPrice(this.cartItem.price);
      this.appComp.refresh();
  }

}
