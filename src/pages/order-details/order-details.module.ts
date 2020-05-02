import { OrderDetails } from './order-details';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../app/shared.module';

@NgModule({
  declarations: [OrderDetails],
  imports: [IonicPageModule.forChild(OrderDetails), SharedModule],
})
export class OrderDetailsPageModule { }