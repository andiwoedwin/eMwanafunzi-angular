import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShopGService } from './shop-g.service';
import { Product } from './shop-g'

@Component({
  selector: 'app-shop-g',
  templateUrl: './shop-g.component.html',
  styleUrls: ['./shop-g.component.css']
})
export class ShopGComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor( private productsService: ShopGService ) { }
  ngOnInit(): void {
    this.getProducts();
  }
  // tslint:disable-next-line: typedef
  public getProducts() {
    this.products$ = this.productsService.getProducts();
  }
}
