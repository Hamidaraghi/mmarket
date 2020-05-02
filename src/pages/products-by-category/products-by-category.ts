import { WooCommerceProvider } from './../../providers/woo-commerce/woo-commerce';
import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, IonicPage, ToastController } from 'ionic-angular';

@IonicPage({})
@Component({
  selector: 'page-products-by-category',
  templateUrl: 'products-by-category.html',
})
export class ProductsByCategory {
  WooCommerce: any;
  products: any[];
  page: any;
  id: any;
  category: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private ngZone: NgZone, public toastCtrl: ToastController,
    public wp: WooCommerceProvider) {
    
    this.page = 1;
    this.id = this.navParams.get("id");
    console.log(this.id);

    this.WooCommerce = wp.WooCommerce;

    this.WooCommerce.getAsync('products/categories/' + this.id).then((data) => {
      console.log((data.body))

      ngZone.run(()=>{        
        this.category = JSON.parse(data.body);
      })
      
    });


    this.WooCommerce.getAsync('products?category=' + this.id+'&status=publish').then((data) => {
      console.log(data);
      console.log(JSON.parse(data.body));
      this.ngZone.run(() => {
        this.products = JSON.parse(data.body);
      })

    }, (err) => {
      console.log(err)
    })

  } // end of constructor

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsByCategory');
  }

  loadMoreProducts(event) {
    console.log(event);
    this.page++;
    this.WooCommerce.getAsync('products?category=' + this.id + '&status=publish&page=' + this.page).then((data) => {
      let temp = (JSON.parse(data.body));
      console.log('Temp: ', temp)
      this.ngZone.run(() => {
        this.products = (this.products).concat(temp);
      })

      console.log(this.products);
      event.complete();
      if (temp.length < 10 || temp == null) {
        this.ngZone.run(() => {
          event.enable(false);
        });
        this.toastCtrl.create({
          message: "پایان محصولات",
          duration: 2000
        }).present();

      }
    }, (err) => {
      console.log(err)
    })
  }

  openProductPage(product) {
    this.navCtrl.push('ProductDetails', { "product": product });

  }

}
