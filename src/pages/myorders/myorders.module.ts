import { MyordersPage } from './myorders';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../app/shared.module';

@NgModule({
  declarations: [MyordersPage],
  imports: [IonicPageModule.forChild(MyordersPage), SharedModule],
})
export class MyordersPagePageModule { }