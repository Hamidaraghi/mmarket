import { ProductDetails } from './product-details';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [ProductDetails],
  imports: [IonicPageModule.forChild(ProductDetails)],
})
export class ProductDetailsPageModule { }