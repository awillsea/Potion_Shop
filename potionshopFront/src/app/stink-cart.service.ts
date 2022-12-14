import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StinkyCartItem } from './cartitem';
@Injectable({
  providedIn: 'root'
})
export class StinkCartService {
  constructor(private http: HttpClient) { 
  }
  
  port:number = 7140;

  getAll(cb: any) {
    this.http.get<StinkyCartItem[]>(`https://localhost:${this.port}/CartItems`).subscribe(cb);
  }

	add(cb: any, potionId: string) {
		this.http.post(`https://localhost:${this.port}/CartItems/${potionId}`, potionId).subscribe(cb);
	}
  delete(cb: any, ci_id: number) {
		this.http.delete(`https://localhost:${this.port}/CartItems/${ci_id}`).subscribe(cb);
	}


}
