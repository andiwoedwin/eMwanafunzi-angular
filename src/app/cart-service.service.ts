import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get(`${environment.baseUrl}/product`);
  }

  addToCart(payload) {
    return this.http.post(`${environment.baseUrl}/cart`, payload);
  }
  getCartItems() {
    return this.http.get(`${environment.baseUrl}/cart`);
  }
  increaseQty(payload) {
    return this.http.post(`${environment.baseUrl}/cart`, payload);
  }
  emptyCart() {
    return this.http.delete(`${environment.baseUrl}/cart/empty-cart`);
  }
}
