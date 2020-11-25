import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartServiceService } from "../../../../cart-service.service";
declare const myFun:any;

@Component({
  selector: 'app-shop-a',
  templateUrl: './shop-a.component.html',
  styleUrls: ['./shop-a.component.css']
})
export class ShopAComponent implements OnInit {
  products: Array<object> = [];
  image: String;

  constructor(private cartService: CartServiceService) { }

  _getProducts(): void {
    this.cartService.getAllProducts().subscribe((data: any) => {
      this.products = data.data;

      for(let i=0;i<data.data.length;i++){
        this.image = data.data[i].image;
        };
      console.log(this.products);
      console.log(this.image);
      
    });
  }


  _addItemToCart( id, quantity): void {
    let payload = {
      productId: id,
      quantity,
    };
    this.cartService.addToCart(payload).subscribe(() => {
      this._getProducts();
      alert('Product Added');
    });
  }
  

  ngOnInit(): void {
    this._getProducts();
  }


}
