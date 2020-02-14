import { WooCommerceProvider } from './../../providers/woo-commerce/woo-commerce';
import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage({})
@Component({
  selector: 'page-order-details',
  templateUrl: 'order-details.html',
})
export class OrderDetails {

  WooCommerce: any = {};
  order: any = {};
  status: any;
  moreProducts: any[] =[];
  products: any[]=[];
  images: any[]=[];
  ProductDetails: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public wp: WooCommerceProvider, public ngZone: NgZone) {
    
    this.order = this.navParams.get("order");
    console.log(this.order);
    //ngZone.run(()=>{
      this.moreProducts = this.order.line_items;
    //})
    
    console.log(this.moreProducts);

    this.WooCommerce = wp.init();
  
  
    for (let i = 0; i < this.moreProducts.length; i++) {
    this.WooCommerce.getAsync("products/"+ this.moreProducts[i].product_id).then(product =>{
      product = JSON.parse(product.body);
      
     this.ngZone.run(()=>{
        this.images[i] = product.images[0].src;
        this.products.push(product);
        
    })
    })
    }
  


  console.log(this.products);
  
    console.log(this.order);
    this.status = this.order.status;
    switch (this.status) {

      case 'processing':
        this.status = "در حال انجام"
        return;

      case 'pending':
        this.status = "در انتظار پرداخت"
        return;

      case 'failed':
        this.status = 'با شکست مواجه شد!'
        return;

      case 'on-hold':
        this.status = 'در انتظار بررسی'
        return;

      case 'completed':
        this.status = 'تکمیل شده'
        return;

      case 'refunded':
        this.status = 'پس داده شده'
        return;

      case 'cancelled':
        this.status = 'لغو شده'
        return;

      default:
        return;
    }


  } //end of constructor.

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderDetailsPage');
  }
  
  openProductPage(product) {
    this.navCtrl.push('ProductDetails', { "id": product });
    console.log('PRRRRRRR', product);
  }
}
