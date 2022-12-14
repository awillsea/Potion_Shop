import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  paused: boolean = true;
  constructor() {
    this.checkForPause();
  }

  ngOnInit(): void {}
  currentStatment:number = 0;
  CarouselStatements:string[] = [
  "Potion-ally amazing.",
"Brew-tally spellbinding.",
"Witch-fully delicious.",
"Enchant-minted with our potions.",
"Wizard-fully potent potions.",
"Magically delicious potions.",
"Potentially potion-tastic.",
"Brew-tiful potions for all.",


    

  ];

    
   checkForPause() {
    if (this.paused == true) {
      setInterval(() => {
        this.paused = !this.paused;
        var innertimer:any = setInterval(() => {
          this.paused = !this.paused;
          if(this.currentStatment + 1 < this.CarouselStatements.length){
            this.currentStatment++
          }else{
            this.currentStatment =  0;
          }
          clearInterval(innertimer);
        }, 500);
        ()=>(innertimer);
      }, 8000);
    }
  }
}