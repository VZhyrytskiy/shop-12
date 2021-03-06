import { Component, OnInit } from '@angular/core';

import { Product, Category } from './../product/product.model';
import { ProductService } from './../product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product>;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
