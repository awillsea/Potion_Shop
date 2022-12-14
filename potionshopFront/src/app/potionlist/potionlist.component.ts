import { Component, Input, OnInit } from '@angular/core';
import { PotionAndWiz } from '../potionandwiz';
import { PotionAndWizService } from '../potion-and-wiz.service';
import { StinkCartService } from '../stink-cart.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-potionlist',
  templateUrl: './potionlist.component.html',
  styleUrls: ['./potionlist.component.css']
})
export class PotionlistComponent implements OnInit {

  TheList: PotionAndWiz[] = [];
  search:string = '';
 
  constructor(private potSrv: PotionAndWizService, private cartSrv: StinkCartService, private cookie:CookieService) {
    this.refresh();
     }

	ngOnInit(): void {
		this.refresh();
	}

  refresh() {
		this.potSrv.getAll(

			// This function receives the data
			(result: PotionAndWiz[]) => {
				this.TheList = result;
			}

		);
	}
  clearsearchBar(){
    this.search='';
    this.refresh();
  }
  addToCart(potionId: string) {
    this.cartSrv.add(()=>{
      // this.refresh;
      console.log(potionId)
    },
    potionId);

  }

  checkFor(){
    let newList:PotionAndWiz[] = [];
    if(this.search == ''){
      this.refresh();
    }
  for(let i = 0; i < this.TheList.length;i++){
    if (this.TheList[i].potion_name.includes(this.search)){
      newList.push(this.TheList[i])
    }
  }
    this.TheList = newList;
  
  }

  pickNumber(){
    let newNumber = Math.floor(Math.random() * 6);
    return newNumber;
  }

}
