import { ProductsByCategory } from './products-by-category';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [ProductsByCategory],
  imports: [IonicPageModule.forChild(ProductsByCategory)],
})
export class ProductsByCategoryPageModule { }