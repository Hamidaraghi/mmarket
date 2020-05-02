import { WooCommerceProvider } from './../../providers/woo-commerce/woo-commerce';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController, Events } from 'ionic-angular';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class Cart {
  cartItems: any[] = [];
  total: any = 0;
  showEmptyCartMessage: boolean = false;
  WooCommerce: any = {};
  spinner: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public events: Events,
    public viewCtrl: ViewController, public toastCtrl: ToastController, public loadingCtrl: LoadingController, public wp: WooCommerceProvider) {


    this.total = 0.0;
    this.WooCommerce = wp.WooCommerce;


    storage.ready().then(() => {

      this.storage.get("cart").then((data) => {
        this.cartItems = data;
        console.log(this.cartItems);

        if (this.cartItems != null && this.cartItems.length > 0) {

          this.cartItems.forEach((item, index) => {
            this.total = this.total + (item.product.price * item.qty)
          })

        } else {

          this.showEmptyCartMessage = true;

        }

      })
    })//end of storage.ready().then()

  }// end of costructor

  updateCart(): Promise<any[]> {

    return new Promise((resolve, reject) => {
      let altered = false;
      this.showSpinner();
      this.storage.ready().then(() => {
        this.total = 0;
        console.log(this.total);
        this.storage.get("cart").then((cartData) => {

          if (cartData != null && cartData.length > 0) {
            var promises = [];

            for (let i = 0; i < cartData.length; i++) {
              console.log('i in Line 76', i);
              console.log('item', cartData[i]);
              //updating cartItems products from live site


              var promise = this.WooCommerce.getAsync('products/' + cartData[i].product.id).then((productData) => {
                console.log(productData);
                let freshProduct = JSON.parse(productData.body);
                console.log(freshProduct)
                console.log(productData.statusCode);

                // if product is not deleted permanently:                
                if (productData.statusCode == 200 && freshProduct.status != "trash" && freshProduct.price != '') {
                  console.log(freshProduct.status)
                  cartData[i].product = freshProduct;

                  if (!freshProduct.in_stock) {
                    console.log("Product is no longer available!");
                    alert(cartData[i].product.name + 'در حال حاضر موجود نیست، بنابراین از سبد شما حذف می شود .')
                    altered = true;
                    cartData[i] = null
                    return;
                  }
                  //if cart item qty is grarter than max stock quantity
                  if (cartData[i].product.stock_quantity != null && cartData[i].qty > cartData[i].product.stock_quantity) {
                    cartData[i].qty = cartData[i].product.stock_quantity;
                    alert("درخواست شما برای " + cartData[i].product.name + " بیش از حداکثر موجودی انبار می باشد. مقدار درخواستی شما به بیشترین مقدار موجود اصلاح شد.");
                    altered = true
                  }
                  // if product is for sold_individually
                  if (cartData[i].product.sold_individually && cartData[i].qty > 1) {
                    alert(cartData[i].product.name + " به صورت تکی به فروش می رسد، بنابراین تعداد آن نمی تواند بیش از 1 مورد در هر سفارش باشد.");
                    altered = true
                    cartData[i].qty = 1;
                  }
                  console.log(this.total);
                  this.total += cartData[i].product.price * cartData[i].qty;
                  console.log(this.total);


                }// end if statuscode = 200
                else if (productData.statusCode == 404 || freshProduct.status == "trash" || freshProduct.price == '' || !freshProduct.stock_quantity) { //if status code is 404 or product is in trash
                  console.log("Product is no longer available!");
                  alert(cartData[i].product.name + 'در حال حاضر موجود نیست، بنابراین از سبد شما حذف می شود .')
                  altered = true;
                  cartData[i] = null
                  console.log(cartData);

                }// end if(productData.statusCode == 404)
                else { // productData.statusCode is unknown:
                  alert("خطا در بازیابی محصول از فروشگاه");
                  return;
                }

              }, error => { console.log(error); });

              promises.push(promise);
              console.log('I in line 123', i);
            }// end for (cartData)

            Promise.all(promises).then(() => {
              for (let i = 0; i < cartData.length; i++) {
                if (!cartData[i]) {
                  cartData.splice(i, 1);
                  i--;
                }
              }
              this.storage.set('cart', cartData);
              this.cartItems = cartData;
              console.log('promise....', cartData);
              this.hideSpinner();

              resolve([cartData, altered]);

            }, (error) => { console.log(error); this.hideSpinner() })

            console.log(this.total);


          } else {
            this.showEmptyCartMessage = true;
            this.hideSpinner();
          }
        }
        )// end get cart from storage
      }
      ) //end of storage.ready().then()
    })// end of return new promise()
  }// end of updateCart()


  removeCart() {
    this.cartItems = [];
    this.total = 0;
    this.events.publish('cart', this.cartItems)
    this.storage.ready().then(() => {
      this.storage.remove('cart');
    })
  }

  showSpinner() {
    this.spinner = this.loadingCtrl.create();
    this.spinner.present();
  }

  hideSpinner() {
    this.spinner.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');

  }

  openProductPage(product) {
    this.navCtrl.push('ProductDetails', { "product": product });
  }
  removeFromCart(item, i) {
    let price = item.product.price;
    let qty = item.qty;

    this.cartItems.splice(i, 1)
    this.events.publish('cart', this.cartItems)

    this.storage.set("cart", this.cartItems).then((cart) => {
      this.total -= (price * qty);
    });


  }// end of removeFromCart(item, i)
  closeModal() {
    this.viewCtrl.dismiss();
  }
  checkout() {
    // updating cart:
    this.updateCart().then((cartData) => {

      if (cartData[0] != null && cartData[0].length > 0) {

        this.cartItems = cartData[0];
        // if the cart items are altered after updateCart():
        if (cartData[1]) { return }

        this.storage.get("userLoginInfo").then((data) => {

          if (data != null) {
            this.navCtrl.push('Checkout');
          } else {
            this.navCtrl.push('Login', { next: 'Checkout' })
          }
        }, (err) => { console.log(err); })

      } else {
        this.showEmptyCartMessage = true;
        this.cartItems = null;
      }

    }) // end of updateCart().then()

  }// end of checkout()

  changeQty(item, i, change) {

    //if decreasing 1 single product
    if (change < 0 && item.qty * -1 >= change) {
      return;
    }

    item.qty += change;

    if (item.product.sold_individually) {
      alert("شما فقط می توانید یک مورد از " + item.product.name + " در یک سفارش داشته باشید. توزیع این محصول محدود است.");
      item.qty = 1;
    }
    //if request amount is grater than stock quantity
    if (change > parseInt(item.product.stock_quantity) && item.product.stock_quantity != null) {
      item.qty = item.product.stock_quantity;
      alert("درخواست شما بیش از حداکثر موجودی انبار می باشد. مقدار درخواستی شما به بیشترین مقدار موجود اصلاح شد.");
    }
    //if cart itme quantity is grater than stock quantity
    if (item.qty >= item.product.stock_quantity && change > 0 && item.product.stock_quantity != null) {
      item.qty = item.product.stock_quantity;
      alert("درخواست شما بیش از حداکثر موجودی انبار می باشد. مقدار درخواستی شما به بیشترین مقدار موجود اصلاح شد.");
    }


    this.cartItems[i] = item;
    this.storage.set('cart', this.cartItems).then(() => {

    })
    this.calculateCartTotal();
    //this.total = (parseInt(this.total.toString()) + (parseInt(price.toString()) * change));
  }// end of changeQty(item, i, change)
  doRefresh(event) {
    this.updateCart().then((resolve) => {
      console.log(resolve);
      event.complete()
    }, error => { console.log(error); event.complete() }
    )
  }

  calculateCartTotal() {
    let total = 0;
    if (this.cartItems != null && this.cartItems.length > 0) {

      this.cartItems.forEach((item, index) => {
        total += (item.product.price * item.qty)
      })

      this.total = total;

    } else {

      this.showEmptyCartMessage = true;
      this.cartItems = [];
      this.total = 0;
    }
  }

}// end of class cart
