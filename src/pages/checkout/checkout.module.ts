import { Checkout } from './checkout';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [Checkout],
  imports: [IonicPageModule.forChild(Checkout)],
})
export class CheckoutPageModule { }