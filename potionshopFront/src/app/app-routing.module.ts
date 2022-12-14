import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { PotiondetailComponent } from './potiondetail/potiondetail.component';
import { PotionlistComponent } from './potionlist/potionlist.component';

const routes: Routes = [
  { path: '', component: PotionlistComponent },
  { path: 'cartitems', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
