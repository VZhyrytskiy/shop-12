import { Injectable } from '@angular/core';

import { Product, Category } from './product.model';

@Injectable()
export class ProductService {

  constructor() { }

  getProduct(): Product {
    return new Product('Pro Angular 6', 'Best-selling author Adam Freeman shows you how to use Angular', 51.19, true, 'book');
  }

  getProducts(): Array<Product> {
    return [
      new Product('Pro Angular 6', 'Best-selling author Adam Freeman shows you how to use Angular in your projects', 51.19, true, 'book'),
      new Product('Angular Development with Typescript', 'Angular Development with TypeScript, Second Edition', 51.08, true, 'book'),
      new Product('Angular: Up and Running: Learning Angular, Step by Step', 'Paperback', 48.83, false, 'book')
    ];
  }
}
