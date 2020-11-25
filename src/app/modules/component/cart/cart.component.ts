import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartServiceService } from "../../../cart-service.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts;
  cartsDetail;

  getItemsInCart(): void{
    this.cartService.getCartItems().subscribe((data:any) => {
      this.carts = data.data;
      console.log(this.carts)
    })
  }

  _increamentQTY(id, quantity): void {
    const payload = {
      productId:id,
      quantity
    }
    this.cartService.addToCart(payload).subscribe(() =>{
      this.getItemsInCart();
      alert("Product added")
    })
  }

    _emptyCart(): void{
      this.cartService.emptyCart().subscribe(() => {
        this.getItemsInCart();
        alert("Cart Emptied")
      })
    }
 
  constructor(private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.getItemsInCart();
  }


}
