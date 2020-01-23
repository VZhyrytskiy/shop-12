import { Component, OnInit } from '@angular/core';

import { Product, Category } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

  onBuy(product): void {
    console.log(product.name);
  }
}
