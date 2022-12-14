import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PotionlistComponent } from './potionlist/potionlist.component';
import { PotiondetailComponent } from './potiondetail/potiondetail.component';
import { CartComponent } from './cart/cart.component';
import { CartitemdetailComponent } from './cartitemdetail/cartitemdetail.component';
import { CookieService } from 'ngx-cookie-service';
import { FilterPipe } from './filter.pipe';
import { HeroComponent } from './hero/hero.component';
import { CreatePotionComponent } from './create-potion/create-potion.component';
@NgModule({
  declarations: [
    AppComponent,
    PotionlistComponent,
    PotiondetailComponent,
    CartComponent,
    CartitemdetailComponent,
    FilterPipe,
    HeroComponent,
    CreatePotionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
