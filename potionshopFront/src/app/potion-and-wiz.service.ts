import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PotionAndWiz, Potion, Wizard } from './potionandwiz';

@Injectable({
  providedIn: 'root'
})


export class PotionAndWizService {
  port:number = 7140;

  getAll(cb: any) {
		this.http.get<PotionAndWiz[]>(`https://localhost:${this.port}/AllInfo`).subscribe(cb);
	}

	getOne(cb: any, id: number) {
		this.http.get<PotionAndWiz>(`https://localhost:${this.port}/AllInfo/${id}`).subscribe(cb);
	}

	CreatePotion(cb:any, newPotion:Potion){
		this.http.post<Potion>(`https://localhost:${this.port}/potion/`,newPotion).subscribe(cb);
	};

	CreateWizard(cb:any, newWizard:Wizard){
		this.http.post<Wizard>(`https://localhost:${this.port}/wizard`, newWizard).subscribe(cb);
	}

	

  constructor(private http: HttpClient) { }
}
