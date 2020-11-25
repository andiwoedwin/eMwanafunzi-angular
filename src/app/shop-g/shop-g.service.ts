import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './shop-g';

@Injectable({
  providedIn: 'root'
})
export class ShopGService {

   API_URL = 'https://emwanafunzi.herokuapp.com';
  constructor(private http: HttpClient) { }
  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API_URL}/products`);
  }
}