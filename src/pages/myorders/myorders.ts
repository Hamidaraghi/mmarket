import { WooCommerceProvider } from './../../providers/woo-commerce/woo-commerce';
import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, ToastController, IonicPage } from 'ionic-angular';

@IonicPage({})
@Component({
  selector: 'page-myorders',
  templateUrl: 'myorders.html',
})
export class MyordersPage {
  userId: string = '';
  WooCommerce: any = {};
  myOrders: any[] = [];
  page: number = 1;
  OrderDetails = 'OrderDetails';
  isLoading: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,
    public ngZone: NgZone, public wp: WooCommerceProvider) {

    this.userId = this.navParams.get('userId');
    this.myOrders = [];
    this.WooCommerce = wp.WooCommerce;
    this.isLoading = true;
    this.getOrders(null);

  }

  getOrders(event) {
    if (event == null) {
      this.page = 1;
      this.myOrders = [];
    } else {
      this.page++
    }
    this.WooCommerce.getAsync('orders?customer=' + this.userId + '&page=' + this.page).then((orderData) => {
      this.ngZone.run(() => {
        this.myOrders = this.myOrders.concat(JSON.parse(orderData.body));
        this.isLoading = false;
        console.log(this.myOrders)
        console.log('paaaaaaaaaaaaaggggg:', this.page)
      })

      if (JSON.parse(orderData.body).length < 10) {
        if (event) {
          event.enable(false);
        }

        this.toastCtrl.create({
          message: "پایان ...",
          duration: 5000
        }).present();
      }
      if (event) {
        event.complete();
      }
      //this.page++;
    }, (error) => { console.log(error) });
  } // end of getOrders()

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyordersPage');
  }

  openOrderDetails(myOrder) {
    this.navCtrl.push('OrderDetails', { "order": myOrder });
  }

}