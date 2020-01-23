import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './../product/product.component';
import {ProductService} from './../product/product.service';
import {ProductListComponent} from './product-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductListComponent],
  providers: [ProductService],
  exports: [ProductListComponent]
})
export class ProductListModule { }
