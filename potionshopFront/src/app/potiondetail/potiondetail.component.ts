import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { timeInterval, timer } from 'rxjs';
import { AppComponent } from '../app.component';
import { PotionAndWiz } from '../potionandwiz';
import { TheCookieService } from '../thecookie.service';

@Component({
  selector: 'app-potiondetail',
  templateUrl: './potiondetail.component.html',
  styleUrls: ['./potiondetail.component.css']
})
export class PotiondetailComponent implements OnInit {
  @Input() potion: PotionAndWiz = {
    id: '',
    potion_name: '',
    photoUrl: '',
    effects: '',
    sideEffects: '',
    characteristics: '',
    price: 0,
    inStock: true,
    createdBy: '',
    wizard_id: '',
    wizard_first_name: '',
    wizard_last_name: '',
    wizard_picture: '',
    };

    // @Input() RandomNumber:number = 0;

    // emojis:any[] = [
    //   '🔥',
    //   'NEW',
    //   'HOT',
    //   '🌵',
    //   '🧊',
    //   '💀',
    //   '👀',
    // ];
  
    displaytoast:boolean = false;

    @Output() sendPotion:EventEmitter<string> = new EventEmitter<string>();
    @Output() updateCookie:EventEmitter<string> = new EventEmitter<string>();
  constructor(private cookie:TheCookieService,private cook:CookieService,private appComp:AppComponent) {}

  ngOnInit(): void {
  }
  addToCart(){  //emitting potion id to parent component
    this.sendPotion.emit(this.potion.id);
    this.updateCookie.emit(this.cook.get("cartTotal"));
    this.cookie.addcartTotal();
    this.cookie.addTotalPrice(this.potion.price);
    this.appComp.refresh();
    this.displaytoast = true;
    
    setInterval(()=>{
      this.displaytoast= false;
    },3000)

  }



}
