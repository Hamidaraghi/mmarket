import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WooCommerceProvider } from '../../providers/woo-commerce/woo-commerce';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';




/**
 * Generated class for the OrderSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-summary',
  templateUrl: 'order-summary.html',
})
export class OrderSummaryPage {

  checkoutValidator: FormGroup;
  order: any = {};
  products: any = {};
  couponLines: any[] = [];
  paymentMethods: any[] = [];
  paymentMethod: any;
  spinner: any;
  submitAttempt: boolean = false;
  userId: number = 0;



  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder,
    public alertCtrl: AlertController, public wp: WooCommerceProvider, private ngZone: NgZone, private storage: Storage,
    public loadingCtrl: LoadingController, public inAppbrowser: InAppBrowser) {

    //validating form
    this.checkoutValidator = formBuilder.group({
      paymentMethod: ['', Validators.required],
      rules: ['false', Validators.requiredTrue]
    })

    this.order = this.navParams.get("order")
    console.log(this.order);

    this.userId = this.navParams.get("userId");
    console.log(this.userId)

    this.products = this.order.line_items;

    this.wp.WooCommerce3.getAsync('payment_gateways').then((gateways) => {
      console.log('Gateways:', JSON.parse(gateways.body));

      this.paymentMethods = JSON.parse(gateways.body);
      //Delet disabled payment gateways:
      for (let index = 0; index < this.paymentMethods.length; index++) {
        if (!this.paymentMethods[index].enabled) {
          this.paymentMethods.splice(index, 1);
          index--;
        }
      }
      console.log(this.paymentMethods);
      this.ngZone.run(() => {
        this.paymentMethods;
      })

    })


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderSummaryPage');
  }

  selectOptions = {
    cssClass: 'rtl'
  }

  openProductPage(product) {
    this.navCtrl.push('ProductDetails', { "id": product });
    console.log('PRRRRRRR', product);
  }

  addOff() {
    const prompt = this.alertCtrl.create({
      title: 'افزودن کد تخفیف',
      message: "کد تخفیف خود را وارد کنید",
      inputs: [
        {
          name: 'code',
          placeholder: 'کد تخفیف'
        },
      ],
      buttons: [
        {
          text: 'لغو',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'ارسال',
          handler: data => {
            console.log('Saved clicked', data);
            this.couponLines.push(data);
            console.log(this.order.coupon_lines);
            console.log(this.couponLines);
            this.updateOrder(this.order.id, { "coupon_lines": this.couponLines }).then(updatedOrder => {
              console.log(updatedOrder);

              //update order totals:
              this.ngZone.run(() => {
                this.order = updatedOrder
                console.log(updatedOrder)
                console.log(this.order)
              })
            }, error => { // coupon is not valid
              console.log(error);
              alert(error.description);
              this.couponLines.pop();
            });
          }
        }
      ]
    });
    prompt.present();
  }

  async updateOrder(orderId, data) {
    return new Promise((resolve, reject) => {

      console.log(orderId, data);

      this.wp.WooCommerce3.putAsync('orders/' + orderId, data).then((putedOrder) => {

        console.log("Puted Order::: ",putedOrder);
        //console.log(JSON.parse(putedOrder.body).message)
        let updatedOrder = JSON.parse(putedOrder.body)

        if (putedOrder.statusCode != 200) {
          //this.order.coupon_lines.pop();
          console.log("Error updating order!")
          reject({ error: "-1", description: updatedOrder.message });

        } else {
          
          resolve(updatedOrder);
        }

        console.log(updatedOrder)
        console.log(this.order)

        

      }, error => { console.log(error) })

    })



  }

  removeCoupon(i: number) {

    console.log(i);
    this.couponLines.splice(i, 1);
    console.log(this.couponLines);

    this.updateOrder(this.order.id, { "coupon_lines": this.couponLines }).then((updatedOrder) => {
      this.ngZone.run(() => {
        this.order = updatedOrder;
      })

    })

  }







  //     // add referral
  //     //get rank amount and other affiliate data
  //     this.wp.getUserReferrer(this.userInfo.id).then(affiliateId => {
  //       console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@", affiliateId)
  //       if (affiliateId > 0){ // affiliate exist


  //           //get rank amount and other affiliate data
  //           this.wp.getAffiliateRankDetails(affiliateId).then(data => {
  //             console.log("@@@@@@@@@@@@@@@@@@@", data)
  //             let rankDetails = data;

  //             let referralAmount

  //             if (rankDetails.lifetime_amount_type == "percentage"){

  //               referralAmount = orderData.total * rankDetails.lifetime_amount_value / 100
  //               console.log (referralAmount);

  //             } else if (rankDetails.lifetime_amount_type == "flat"){

  //               referralAmount = rankDetails.lifetime_amount_value

  //             }

  //               let addReferralData = 
  //               { "refferal_wp_uid": this.userInfo.id, "campaign": "", "affiliate_id": affiliateId, "visit_id": "", "description": "", "source": "woo",
  //                "reference": orderData.id, "reference_details": "App", "parent_referral_id": "", "child_referral_id": "", "amount": referralAmount, 
  //                "currency": orderData.currency, "status": 1, "payment": 0 }

  //              this.wp.addReferral(addReferralData)

  //           })
  //       }
  //     })




  placeOrder(orderData) {
    console.log(this.paymentMethod);
    this.showSpinner()
    this.submitAttempt = true;

    if (!this.checkoutValidator.valid) {
      alert("!لطفا ورودی ها را کنترل نمایید و موارد ستاره دار را به درستی تکمیل نمایید.");
      this.hideSpinner();
      return;
    }

    console.log(orderData)

    if (this.paymentMethod == "WC_Saman_Gateway") { ////////////// Sep Gateway //////////////////

      this.payWithSepGateway(orderData).then(paymentRes => {

        console.log(paymentRes)

        if (paymentRes) {
          this.wp.addOrderReferral(this.userId, this.order.id, this.order.total, this.order.currency)
          .then(referral=>{console.log(referral)}).catch(error=>{console.log(error)})
          
          this.storage.remove('cart');
          if (this.spinner) this.hideSpinner();
          this.orderFinalMessage(this.order, true)

        }




      }).catch(error => { console.log(error); })


    }

    else {

      //in case zarinpal not selected: it means Pay On Delivery

      this.wp.WooCommerce3.putAsync('orders/' + orderData.id, { status: 'processing' }).then((order) => {

        this.storage.remove('cart');

        console.log(JSON.parse(order.body))
        console.log(this.order.total);

        //if (this.spinner) this.hideSpinner();

        this.wp.addOrderReferral(this.userId, this.order.id, this.order.total, this.order.currency)

        this.orderFinalMessage(orderData, true)

        return Promise.resolve(orderData)


      }, error => { console.log(error) })


    }
  }





  async payWithSepGateway(order) {
    return new Promise ((resolve, reject)=>{


      
    let amount = order.total;

    if (order.currency = 'IRT') { amount = amount * 10 }

    //get token
    this.wp.WooCommerce3.getAsync('sep/v1/get-token/?Action=Token&TerminalId=' + this.wp.TerminalId +
      '&RedirectUrl=' + this.wp.sepCallBackUrl + '&ResNum=' + order.id +
      '&Amount=' + amount + '&CellNumber=' + order.billing.phone.toString()).then((sepData) => {

        var sepToken = (JSON.parse(sepData.body))
        var { status, token } = JSON.parse(sepToken);

        if (!status) {
          alert('خطا در دریافت توکن از درگاه سامان');
          alert(JSON.parse(sepToken).errorDesc);
          this.hideSpinner();
          this.spinner.onDidDismiss(() => {
            reject(-1);
          })

        }



        var pageContent = '<html><head></head><body><form id="loginForm" action="' + this.wp.sepUrl + '" method="post">' +
          '<input type="hidden" name="Token" value=' + token + '>' +
          '</form> <script type="text/javascript">document.getElementById("loginForm").submit();</script></body></html>';

        var pageContentUrl = 'data:text/html;base64,' + btoa(pageContent);

        var browserRef = this.inAppbrowser.create(pageContentUrl, "_blank");

        this.hideSpinner()

        browserRef.on('loadstart').subscribe((event) => {

          if (event.url.startsWith(this.wp.sepCallBackUrl)) {

            browserRef.on('loadstop').subscribe((loadstop) => {

              var scriptCode = "document.getElementById('sep').value;"

              browserRef.executeScript({ code: scriptCode }).then((value) => {

                var sep = JSON.parse(value[0]);

                browserRef.close();

                this.showSpinner()
                if (sep.State != 'OK' || sep.Status != 2) {
                  this.wp.WooCommerce3.postAsync('orders/' + order.id + '/notes', { note: "وضعیت تراکنش درگاه سامان اوکی نمیباشد" + sep.State });
                  this.wp.WooCommerce3.putAsync('orders/' + order.id, { status: 'cancelled' }).then((data) => {
                    console.log(data);
                    console.log(JSON.parse(data.body));
                  }, error => { console.log(error) });

                  alert(" خطا در پرداخت. شماره خطا: " + sep.Status);

                  this.wp.WooCommerce3.postAsync('orders/' + order.id + '/notes', { note: " خطا در پرداخت. شماره خطا: " + sep.Status });

                  this.wp.WooCommerce3.putAsync('orders/' + order.id, { status: 'cancelled' }).then((data) => {
                    console.log(data);
                    console.log(JSON.parse(data.body));
                  }, error => { console.log(error) });
                  this.hideSpinner()
                  reject(-2);
                } else {

                  // Check if refnum is used or not and then save it

                  var seveRefNumData = { State: sep.State, Status: sep.Status, RefNum: sep.RefNum, ResNum: sep.ResNum, TerminalId: sep.TerminalId, TraceNo: sep.TraceNo }

                  this.wp.WooCommerce3.postAsync('sep/v1/save-RefNum', seveRefNumData).then((data) => {
                    let res = (JSON.parse(data.body));
                    console.log(res);

                    if (res.error) {
                      console.log(res.error);

                      this.wp.WooCommerce3.postAsync('orders/' + order.id + '/notes', { note: res.error_description });

                      this.wp.WooCommerce3.putAsync('orders/' + order.id, { status: 'cancelled' }).then((data) => {
                        console.log(data);
                        console.log(JSON.parse(data.body));
                      }, error => { console.log(error) });

                      alert(res.error_description);

                      this.hideSpinner()

                      this.spinner.onDidDismiss(() => {
                        reject(-3);
                      })

                    }

                    if (res.inserted) {
                      // refnum is not used; do Verify
                      //this.sepVerify();

                      var verifyArgs = { RefNum: sep.RefNum, MID: sep.TerminalId, amount: amount, password: this.wp.sepMerchantPassword };

                      this.sepVerify(verifyArgs).then((verifyData) => {

                        if (verifyData.error) {
                          this.wp.WooCommerce3.postAsync('orders/' + order.id + '/notes', { note: "خطا: " + JSON.stringify(verifyData.description) });
                          this.wp.WooCommerce3.putAsync('orders/' + order.id, { status: 'cancelled' }).then((data) => {
                            console.log(data);
                            console.log(JSON.parse(data.body));
                          }, error => { console.log(error) });

                          this.hideSpinner();

                          reject(-4);

                        } else {
                          // place order
                          //Successfull payment => Send order to woocommerce.

                          // Updating order status to prccessing:
                          this.wp.WooCommerce3.postAsync('orders/' + order.id + '/notes', { note: "وریفای موفق؛ کد پیگیری: " + sep.TraceNo.toString() });

                          this.wp.WooCommerce3.putAsync('orders/' + order.id, { set_paid: true, status: 'processing', transaction_id: sep.RefNum.toString() }).then((order) => {

                          });

                          resolve(true);

                        }

                      })

                    }
                  });
                }

              })

            })
          }

        })

      })

    })



  }



  sepVerify(verifyArgs): Promise<any> {
    return new Promise((resolve, reject) => {
      this.wp.WooCommerce3.postAsync('sep/v1/sep-verify', verifyArgs).then((verifyData) => {
        verifyData = JSON.parse(verifyData.body)

        if (verifyData.error) {
          // verify unsuccessfull
          console.log("Unsuccessful verify: " + JSON.stringify(verifyData.description));
          resolve({ error: 1, description: verifyData.description });
        } else {
          // successfull verify
          console.log('Successfull verify');
          resolve({ success: verifyData.verify_code, description: verifyData.description, RefNum: verifyArgs.RefNum })
        }
      })
    })

  }



  orderFinalMessage(orderData: any, success: Boolean) {

    if (success) {
      this.alertCtrl.create({
        title: "سفارش ثبت شد",
        cssClass: 'rtl',
        message: "سفارش شما با موفقیت ثبت شد. شماره سفارش شما: " + orderData.id,
        buttons: [{
          text: "تایید",
          handler: () => {
            this.navCtrl.push('OrderDetails', { "order": orderData }).then(() => {

              const count = this.navCtrl.getActive().index - 1;
              this.navCtrl.remove(1, count).then(data => {
                console.log(data)
                this.hideSpinner()

              })
            })
          }
        }]

      }).present();
    } else { // No success
      this.alertCtrl.create({
        title: "پرداخت ناموفق",
        cssClass: 'rtl',
        message: "پرداخت سفارش شما ناموفق بود. شماره سفارش: " + orderData.id,
        buttons: [{
          text: "تایید",
          handler: () => {
            this.navCtrl.push('OrderDetails', { "order": orderData }).then(() => {

              const count = this.navCtrl.getActive().index - 1;
              this.navCtrl.remove(1, count).then(data => {

                console.log(data)
                this.hideSpinner()
              })
            })
          }
        }]

      }).present();
    }





  }

  showSpinner() {
    this.spinner = this.loadingCtrl.create();

    this.spinner.present();
  }
  hideSpinner() {
    this.spinner.dismiss();
  }
}
