import { Component, Input, OnInit } from '@angular/core';
import { PotionAndWizService } from '../potion-and-wiz.service';
import { Potion, Wizard } from '../potionandwiz';
import { PotionlistComponent } from '../potionlist/potionlist.component';
import { v4 as uuidv4 } from 'uuid';
import { stringify as uuidStringify } from 'uuid';

@Component({
  selector: 'app-create-potion',
  templateUrl: './create-potion.component.html',
  styleUrls: ['./create-potion.component.css']
})
export class CreatePotionComponent implements OnInit {
  potionID:string = '';
  potionName:string = '';
  potionEffects:string|null = null;
  potionSideEffect:string|null = null;
  potionCharacteristics:string|null = null;
  potionPrice:number = 0;
  potioncreatedBy:string = uuidv4();
  potionPhotoUrl:string = 'https://i.etsystatic.com/29413508/r/il/d34b00/4193002940/il_340x270.4193002940_fd8y.jpg'
  wizard_firstname:string ='';
  wizard_lastname:string='';
  wizard_picture:string='';
  Plist: any;


//oops not working

  constructor(private potSrv:PotionAndWizService) {
    console.log(uuidv4())
  
   
  }

  ngOnInit(): void {
    
  }
refreshList(){
  let Plist:PotionlistComponent;
  this.Plist.refresh();
}

createPotion(){
  console.log("calling creatPotion function");
  let newPot:Potion = {
    id: uuidv4(),
  
    potion_name: this.potionName,
    photoUrl: this.potionPhotoUrl,
    effects:this.potionEffects,
    sideEffects: this.potionSideEffect,
    characteristics:this.potionCharacteristics,
    price:this.potionPrice,
    inStock:true,
    createdBy:this.potioncreatedBy
  }
  console.log(typeof newPot.id),

  this.potSrv.CreatePotion(()=>{
    console.log('woohoo'+ newPot);
  },newPot)
}


createWizard(){
  console.log("calling creatWizard function");

let newWiz:Wizard = {
  wizard_id: this.potioncreatedBy,
  wizard_first_name:this.wizard_firstname,
  wizard_last_name:this.wizard_lastname,
  wizard_picture:'https://cdn.drawception.com/images/panels/2017/2-13/E9CH35DmXR-2.png'
};

this.potSrv.CreateWizard(()=>{
  console.log('WooHoo'+newWiz);
},newWiz);

}



sendPotionandWiz(){
  console.log("calling sendPotionandWiz function");

  this.createPotion();
  this.createWizard();
  
}

clearInput(){
  this.potionName = '';
  this.potionEffects = null;
  this.potionSideEffect = null;
  this.potionCharacteristics = null;
  this.potionPrice = 0;
  this.potioncreatedBy = '';

  this.wizard_firstname ='';
  this.wizard_lastname='';
  this.wizard_picture='';
}




listofIMGS:string[] =[
            "https://i.etsystatic.com/15918225/r/il/04f1a0/3017858765/il_794xN.3017858765_5ieu.jpg",// this one is good
            "https://cdn.dribbble.com/users/914722/screenshots/16011493/media/f954614891518bc891a8afab13d552b2.png?compress=1&resize=400x300",//this one is good
            "https://i.etsystatic.com/12301891/r/il/d102c4/2981800461/il_794xN.2981800461_oar8.jpg",//this one is good
            "https://i.etsystatic.com/12301891/r/il/f2eae8/3637167943/il_794xN.3637167943_nzn6.jpg",// this one is good
            "https://i.pinimg.com/originals/86/28/16/862816a114ebce84e5a81bcfb9f43048.jpg",//this one is good
            "https://i.etsystatic.com/12301891/r/il/6d6a00/1963530294/il_794xN.1963530294_9vez.jpg",//this one is good
            "https://images.squarespace-cdn.com/content/v1/5ad8314296d455b2a1d51de8/1595354788816-4227ZCRP1VDLB0PUSVA3/unicornpotionetsy.jpg?format=2500w",//ths one is good
            "https://www.edmsauce.com/wp-content/uploads/2014/02/image10.jpg",//this is the wizard hand
            "https://i.pinimg.com/originals/4a/c0/7d/4ac07d7696f81842e85cab57759e6cab.png",
            "https://www.nicepng.com/png/detail/152-1527956_potion-of-deaths-postponement-dnd-magic-item-art.png",
            "https://cdnb.artstation.com/p/assets/images/images/043/459/195/large/ahmet-nergiz-petrifypotion-con-v01.jpg?1637320438",
            "https://i.pinimg.com/564x/4f/d9/b2/4fd9b269736f9ef948355d9edaa9b8a6--fantasy-potions-spell-books.jpg",
            "https://i.pinimg.com/736x/19/d6/75/19d675c6574c5e2f85a729874c8ceb47.jpg",
            "https://i.pinimg.com/736x/b5/09/46/b5094621af6738787a5c03ce963aa993.jpg",
            "https://i.pinimg.com/originals/c6/a8/85/c6a885ef2f14a1af44b58e8cca4a1f44.jpg",
            "https://i.etsystatic.com/22314507/r/il/64ec4e/3455029036/il_500x500.3455029036_sy1f.jpg",
            "https://i.pinimg.com/736x/84/f1/79/84f1790b62726ae9f1b918b812f991c2.jpg",
            "https://i.pinimg.com/originals/67/94/f2/6794f2e2dbb0c2f4444d3955b912149d.jpg",
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/007472117888975.607e97e4da296.png",
            "https://pbs.twimg.com/media/DT6Rv2SXkAE_r_8.jpg",
            "https://i.pinimg.com/736x/62/52/d9/6252d9134fa469c167c6871d0d415fe7.jpg",
            "https://i.pinimg.com/736x/82/8e/f6/828ef6f237bf8c80f01c815f6b193c11.jpg",
            "https://w0.peakpx.com/wallpaper/48/786/HD-wallpaper-flame-potion-bottle-flame-halloween-potion-witch.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgtic4wCsxlF8s0lKeM1yR-gIZgwwPBkqEyZtYp9CXnVxP83sypzJp4Ey5kUKniq4ZR0s&usqp=CAU",
            "https://i.pinimg.com/originals/81/6e/42/816e4251429e7e664ee80070e762b2f8.png",
            "https://images.squarespace-cdn.com/content/v1/55c8073fe4b02a74ffe18e48/1601517147349-1JKWZD9P9FEDW3FXEXMJ/glass+flask+post.jpg?format=750w",
            "https://images.squarespace-cdn.com/content/55c8073fe4b02a74ffe18e48/1601516906688-HHWDNL6WFRRC3KQE6MFW/teapot+post.jpg?content-type=image%2Fjpeg",
            "https://i.etsystatic.com/29413508/r/il/d34b00/4193002940/il_340x270.4193002940_fd8y.jpg",
]

attachImg(img:string){

this.potionPhotoUrl = img;

}

}
