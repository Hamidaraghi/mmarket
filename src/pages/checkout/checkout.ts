import { Cart } from './../cart/cart';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Storage } from '@ionic/storage';
import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, AlertController, ViewController, IonicPage } from 'ionic-angular';
import { WooCommerceProvider } from '../../providers/woo-commerce/woo-commerce';

import * as _ from 'lodash';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage({})
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class Checkout {
  spinner: any;
  zarinpal: any;
  WooCommerce: any = {};
  gateways: any;
  newOrder: any;
  paymentMethods: any[];
  paymentMethod: any;
  billing_shipping_same: boolean;
  userInfo: any;
  paymentRequestResponse: any;
  cart: any = [];
  cartTotal = 0;
  cityStates: any;
  orderItems: any[] = [];
  data: any = {};
  paymentData: any = {};
  shippingMethods: any[] = [];
  //shippingMethod: any = {};
  shippingAmount: number = 0;
  shipping_lines: any[] = [];
  checkoutValidator: FormGroup;
  submitAttempt: boolean = false;
  couponCode = 0;
  couponLines : any[] = [];
  coupon_lines: any[] = []
  orderData: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public loadingCtrl: LoadingController,
    private storage: Storage, public alertCtrl: AlertController, public inAppbrowser: InAppBrowser, public formBuilder: FormBuilder,
    public wp: WooCommerceProvider, public ngZone: NgZone) {

    //validating form
    this.checkoutValidator = formBuilder.group({
      firstName: ['نام', Validators.compose([Validators.required, Validators.maxLength(30), Validators.pattern('[a-zA-Zا-ی ]*')])],
      lastName: ['نام خانوادگی', Validators.compose([Validators.required, Validators.maxLength(30), Validators.pattern('[a-zA-Zا-ی ]*')])],
      email: ['example@example.com', Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')],
      cityState: ['', Validators.required],
      postCode: ['4912345678', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(10)])],
      phone: ['09123456789', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(11), Validators.minLength(11)])],
      address: ['آدرس', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(100)])],
      shippingMethod: ['', Validators.required],
      paymentMethod: ['', Validators.required],
      rules: ['false', Validators.requiredTrue]
    })

    this.showSpinner();
    this.newOrder = {};
    this.newOrder.billing = {};
    this.newOrder.shipping = {};
    this.billing_shipping_same = true;
    this.newOrder.billing.email = '';

    this.gateways = wp.WooCommerce;
    
    if (this.orderData){
      this.data = this.orderData
      console.log("Updating order ......")
    }

    var promises = [];

    promises.push(this.gateways.getAsync('shipping/zones').then((data) => {
      console.log(JSON.parse(data.body));
      this.cityStates = _.values(JSON.parse(data.body));
      console.log(this.cityStates);
    }, error => { ; console.log(error); }));


    promises.push(this.gateways.getAsync('payment_gateways').then((data, res, err) => {
      console.log('Gateways:', _.values(JSON.parse(data.body)));

      this.paymentMethods = _.values(JSON.parse(data.body));

      //Delet disabled payment gateways:
      for (let index = 0; index < this.paymentMethods.length; index++) {
        if (!this.paymentMethods[index].enabled) {
          this.paymentMethods.splice(index, 1);
          index--;
        }
      }
      console.log(this.paymentMethods);

    }));

    promises.push(this.storage.get("userLoginInfo").then((userLoginInfo) => {
      this.userInfo = userLoginInfo.user;
      let id = userLoginInfo.user.id;

      this.gateways.getAsync('customers/' + id).then((data) => {
        this.newOrder = JSON.parse(data.body);
        console.log(JSON.parse(data.body));
      })

    }, (err) => { console.log(err); alert(err); }))

    promises.push(this.storage.get('cart').then((cart) => {
      this.cart = cart;
      this.cartTotal = 0;
      this.orderItems = [];

      cart.forEach((element, index) => {
        this.orderItems.push({
          product_id: element.product.id,
          quantity: element.qty
        });

        this.cartTotal += element.qty * element.product.price;
      }
      )// // en cart.forEach

    }, error => { console.log(error); })) // end of  this.storage.get('cart')

    Promise.all(promises).then(() => {
      //this.updateCart().then(data=>{console.log(data)});
      this.hideSpinner();
    })

  } // End of constructor !

  onCityStateChange(selectedValue: any) {
    this.showSpinner();
    console.log('Selected', selectedValue);
    //List all location of a zone:
    this.gateways.getAsync('shipping/zones/' + selectedValue + '/locations').then((data) => {
      console.log(JSON.parse(data.body));
    });

    //list all shipping methods of a zone:
    this.gateways.getAsync('shipping/zones/' + selectedValue + '/methods').then((res) => {
      console.log('Available Shipping methods', JSON.parse(res.body));

      var orderShippingLine = [];
      orderShippingLine = JSON.parse(res.body);
      console.log(orderShippingLine);

      for (let i = 0; i < orderShippingLine.length; i++) {

        console.log('index', i, 'element', orderShippingLine[i]);

        if (orderShippingLine[i].method_id == 'free_shipping') {
          orderShippingLine[i].shippingAmount = 0;
          console.log(orderShippingLine[i].settings.min_amount.value);
          let minFreeShippingAmount = parseInt(orderShippingLine[i].settings.min_amount.value);
          console.log(this.cartTotal);
          if (this.cartTotal < minFreeShippingAmount) {
            // disable free_shipping
            orderShippingLine.splice(i, 1);
            i--;

          }
        } // end if free_shipping

        else if (orderShippingLine[i].method_id == 'flat_rate') {
          orderShippingLine[i].shippingAmount = parseInt(orderShippingLine[i].settings.cost.value);
          console.log(this.shippingAmount);
          console.log(_.values(orderShippingLine[i].settings));
          let classes = _.values(orderShippingLine[i].settings);
          let noClassCost = orderShippingLine[i].settings.no_class_cost;
          let classCost = [];

          classes.forEach((cost, index) => {
            if (cost.id.toString().startsWith("class_cost_")) {
              console.log('1397/06/22', cost);
              classCost.push(cost);
            }

          }); // End forEach(classes)

          // calculating shippin cost per class:
          if (classCost != null && classCost.length > 0) { //ensure has shipping classes

            //if per class in settings.type.value
            //
            var qty = 0;
            var max = 0;
            var total = 0;
            var cartItemCalssCost = 0;

            console.log('classcost', classCost);

            for (let h = 0; h < this.cart.length; h++) {
              for (let j = 0; j < classCost.length; j++) {

                if ('class_cost_' + this.cart[h].product.shipping_class_id == classCost[j].id) {
                  console.log(this.cart[h].qty);
                  qty = (this.cart[h]).qty;
                  console.log('139500000000');
                  console.log(eval(classCost[j].value));

                  console.log(orderShippingLine)
                  console.log(h);

                  cartItemCalssCost = eval(classCost[j].value)

                  if (max < cartItemCalssCost) { max = cartItemCalssCost; }

                  total += cartItemCalssCost;

                  console.log("ShippingAmount:", orderShippingLine[i].shippingAmount);
                }
              }
            }// end for

            if (orderShippingLine[i].settings.type.value == 'class') {
              orderShippingLine[i].shippingAmount = total;
            } else { orderShippingLine[i].shippingAmount = max }

            // no class cost calculation
            this.cart.forEach((item, index) => {
              console.log(item);
              if (item.product.shipping_class_id == 0 || item.product.shipping_class_id == null) {
                qty = item.qty;
                orderShippingLine[i].shippingAmount += eval(noClassCost.value);
                console.log("ShippingAmount:", orderShippingLine[i].shippingAmount);
              }
            })

            // end of get cart


          }

        } else if (orderShippingLine[i].method_id == 'local_pickup') {
          orderShippingLine[i].shippingAmount = parseInt(orderShippingLine[i].settings.cost.value);

        }

        this.shippingMethods = orderShippingLine;
        console.log(this.shippingMethods);

      }; // end  for (let i = 0; i< orderShippingLine.length; i++)

      this.hideSpinner();

    }, error => { alert(error); this.hideSpinner() }) // end of this.gateways.getAsync('shipping/zones/' + selectedValue + '/methods')


  } // end of onCityStateChange()


  onShippingChange(selectedValue: any) {
    console.log(((selectedValue)));
    this.shipping_lines = [{
      method_id: selectedValue.method_id,
      method_title: selectedValue.method_title,
      total: selectedValue.shippingAmount.toString()
    }];
    console.log(this.data.shipping_lines);
    this.shippingAmount = selectedValue.shippingAmount;

  }// end of onShippingChange()

  setBillingToShipping() {
    this.billing_shipping_same = !this.billing_shipping_same;

    if (this.billing_shipping_same) {
      this.newOrder.shipping = this.newOrder.billing;
    }

  }

   updateCart(): Promise<any> {

      let altered = false
      this.cartTotal = 0;      

    return new Promise ((resolve, reject)=>{

      if (this.cart == null && this.cart.length <= 0) {
        alert('سبد خرید شما خالی است');
        this.hideSpinner();
        return Promise.reject("cart is empty")
      }

        var promises = [];

        for (let i = 0; i < this.cart.length; i++) {

          //updating cartItems products from live site
          var promise = this.gateways.getAsync('products/' + this.cart[i].product.id).then((productData) => {
            let freshProduct = JSON.parse(productData.body);
            console.log('freshProduct: ', freshProduct)
            console.log(productData.statusCode);

            // if product is not deleted permanently:                
            if (productData.statusCode == 200 && freshProduct.status != "trash" && freshProduct.price != '') {
              console.log(freshProduct.status)
              this.cart[i].product = freshProduct;

              if (!freshProduct.in_stock) {
                console.log("Product is no longer available!");
                alert(this.cart[i].product.name + 'در حال حاضر موجود نیست، بنابراین از سبد شما حذف می شود .')
                altered = true;
                this.cart[i] = null
                return;
              }

              //if cart item qty is grarter than max stock quantity
              if (this.cart[i].product.stock_quantity != null && this.cart[i].qty > this.cart[i].product.stock_quantity) {
                this.cart[i].qty = this.cart[i].product.stock_quantity;
                alert("درخواست شما برای " + this.cart[i].product.name + " بیش از حداکثر موجودی انبار می باشد. مقدار درخواستی شما به بیشترین مقدار موجود اصلاح شد.");
                altered = true;
              }
              // if product is for sold_individually
              if (this.cart[i].product.sold_individually && this.cart[i].qty > 1) {
                alert(this.cart[i].product.name + " به صورت تکی به فروش می رسد، بنابراین تعداد آن نمی تواند بیش از 1 مورد در هر سفارش باشد.");
                altered = true
                this.cart[i].qty = 1;
              }
              console.log(this.cartTotal);
              this.cartTotal += this.cart[i].product.price * this.cart[i].qty;
              console.log(this.cartTotal);

            }// end if statuscode = 200
            else if (productData.statusCode == 404 || freshProduct.status == "trash" || freshProduct.price == "" || !freshProduct.in_stock) { //if status code is 404 or product is in trash
              console.log("Product is no longer available!");
              alert(this.cart[i].product.name + 'در حال حاضر موجود نیست، بنابراین از سبد شما حذف می شود .')
              altered = true
              this.cart[i] = null

            }// end if(productData.statusCode == 404)
            else { // productData.statusCode is unknown:
              alert("خطا در بازیابی محصول از فروشگاه");
              return;
            }

          }, error => { console.log(error); });

          promises.push(promise);

        }// end for (this.cart)

        Promise.all(promises).then(() => {
          for (let i = 0; i < this.cart.length; i++) {
            if (!this.cart[i]) {
              this.cart.splice(i, 1);
              i--;
            }
          }

          this.storage.set('cart', this.cart);

          console.log('promise....', this.cart);

          resolve ([this.cart, altered]);

        }, (error) => { console.log(error); reject(error);})

     })
  
  }// end of updateCart()


  /////////////////***Place order****////////////////
  async placeOrder(order, updateCart: boolean, addCoupon: boolean) {

    let regExp = /<[^\w<>]*(?:[^<>"'\s]*:)?[^\w<>]*(?:\W*s\W*c\W*r\W*i\W*p\W*t|\W*f\W*o\W*r\W*m|\W*s\W*t\W*y\W*l\W*e|\W*s\W*v\W*g|\W*m\W*a\W*r\W*q\W*u\W*e\W*e|(?:\W*l\W*i\W*n\W*k|\W*o\W*b\W*j\W*e\W*c\W*t|\W*e\W*m\W*b\W*e\W*d|\W*a\W*p\W*p\W*l\W*e\W*t|\W*p\W*a\W*r\W*a\W*m|\W*i?\W*f\W*r\W*a\W*m\W*e|\W*b\W*a\W*s\W*e|\W*b\W*o\W*d\W*y|\W*m\W*e\W*t\W*a|\W*i\W*m\W*a?\W*g\W*e?|\W*v\W*i\W*d\W*e\W*o|\W*a\W*u\W*d\W*i\W*o|\W*b\W*i\W*n\W*d\W*i\W*n\W*g\W*s|\W*s\W*e\W*t|\W*i\W*s\W*i\W*n\W*d\W*e\W*x|\W*a\W*n\W*i\W*m\W*a\W*t\W*e)[^>\w])|(?:<\w[\s\S]*[\s\0\/]|['"])(?:formaction|style|background|src|lowsrc|ping|on(?:d(?:e(?:vice(?:(?:orienta|mo)tion|proximity|found|light)|livery(?:success|error)|activate)|r(?:ag(?:e(?:n(?:ter|d)|xit)|(?:gestur|leav)e|start|drop|over)?|op)|i(?:s(?:c(?:hargingtimechange|onnect(?:ing|ed))|abled)|aling)|ata(?:setc(?:omplete|hanged)|(?:availabl|chang)e|error)|urationchange|ownloading|blclick)|Moz(?:M(?:agnifyGesture(?:Update|Start)?|ouse(?:PixelScroll|Hittest))|S(?:wipeGesture(?:Update|Start|End)?|crolledAreaChanged)|(?:(?:Press)?TapGestur|BeforeResiz)e|EdgeUI(?:C(?:omplet|ancel)|Start)ed|RotateGesture(?:Update|Start)?|A(?:udioAvailable|fterPaint))|c(?:o(?:m(?:p(?:osition(?:update|start|end)|lete)|mand(?:update)?)|n(?:t(?:rolselect|extmenu)|nect(?:ing|ed))|py)|a(?:(?:llschang|ch)ed|nplay(?:through)?|rdstatechange)|h(?:(?:arging(?:time)?ch)?ange|ecking)|(?:fstate|ell)change|u(?:echange|t)|l(?:ick|ose))|m(?:o(?:z(?:pointerlock(?:change|error)|(?:orientation|time)change|fullscreen(?:change|error)|network(?:down|up)load)|use(?:(?:lea|mo)ve|o(?:ver|ut)|enter|wheel|down|up)|ve(?:start|end)?)|essage|ark)|s(?:t(?:a(?:t(?:uschanged|echange)|lled|rt)|k(?:sessione|comma)nd|op)|e(?:ek(?:complete|ing|ed)|(?:lec(?:tstar)?)?t|n(?:ding|t))|u(?:ccess|spend|bmit)|peech(?:start|end)|ound(?:start|end)|croll|how)|b(?:e(?:for(?:e(?:(?:scriptexecu|activa)te|u(?:nload|pdate)|p(?:aste|rint)|c(?:opy|ut)|editfocus)|deactivate)|gin(?:Event)?)|oun(?:dary|ce)|l(?:ocked|ur)|roadcast|usy)|a(?:n(?:imation(?:iteration|start|end)|tennastatechange)|fter(?:(?:scriptexecu|upda)te|print)|udio(?:process|start|end)|d(?:apteradded|dtrack)|ctivate|lerting|bort)|DOM(?:Node(?:Inserted(?:IntoDocument)?|Removed(?:FromDocument)?)|(?:CharacterData|Subtree)Modified|A(?:ttrModified|ctivate)|Focus(?:Out|In)|MouseScroll)|r(?:e(?:s(?:u(?:m(?:ing|e)|lt)|ize|et)|adystatechange|pea(?:tEven)?t|movetrack|trieving|ceived)|ow(?:s(?:inserted|delete)|e(?:nter|xit))|atechange)|p(?:op(?:up(?:hid(?:den|ing)|show(?:ing|n))|state)|a(?:ge(?:hide|show)|(?:st|us)e|int)|ro(?:pertychange|gress)|lay(?:ing)?)|t(?:ouch(?:(?:lea|mo)ve|en(?:ter|d)|cancel|start)|ime(?:update|out)|ransitionend|ext)|u(?:s(?:erproximity|sdreceived)|p(?:gradeneeded|dateready)|n(?:derflow|load))|f(?:o(?:rm(?:change|input)|cus(?:out|in)?)|i(?:lterchange|nish)|ailed)|l(?:o(?:ad(?:e(?:d(?:meta)?data|nd)|start)?|secapture)|evelchange|y)|g(?:amepad(?:(?:dis)?connected|button(?:down|up)|axismove)|et)|e(?:n(?:d(?:Event|ed)?|abled|ter)|rror(?:update)?|mptied|xit)|i(?:cc(?:cardlockerror|infochange)|n(?:coming|valid|put))|o(?:(?:(?:ff|n)lin|bsolet)e|verflow(?:changed)?|pen)|SVG(?:(?:Unl|L)oad|Resize|Scroll|Abort|Error|Zoom)|h(?:e(?:adphoneschange|l[dp])|ashchange|olding)|v(?:o(?:lum|ic)e|ersion)change|w(?:a(?:it|rn)ing|heel)|key(?:press|down|up)|(?:AppComman|Loa)d|no(?:update|match)|Request|zoom))[\s\0]*=/;
    if (regExp.test(this.data.customer_note)) {
      alert("متن یادداشت سفارش شما حاوی عبارات غیر مجاز می باشد.");
      return ({ "error": "invalid_params", "error_message": " متن یادداشت سفارش شما حاوی عبارات غیر مجاز می باشد." })
    }

    //     let regExp = /<[^\w<>]*(?:[^<>"'\s]*:)?[^\w<>]*(?:\W*s\W*c\W*r\W*i\W*p\W*t|\W*f\W*o\W*r\W*m|\W*s\W*t\W*y\W*l\W*e|\W*s\W*v\W*g|\W*m\W*a\W*r\W*q\W*u\W*e\W*e|(?:\W*l\W*i\W*n\W*k|\W*o\W*b\W*j\W*e\W*c\W*t|\W*e\W*m\W*b\W*e\W*d|\W*a\W*p\W*p\W*l\W*e\W*t|\W*p\W*a\W*r\W*a\W*m|\W*i?\W*f\W*r\W*a\W*m\W*e|\W*b\W*a\W*s\W*e|\W*b\W*o\W*d\W*y|\W*m\W*e\W*t\W*a|\W*i\W*m\W*a?\W*g\W*e?|\W*v\W*i\W*d\W*e\W*o|\W*a\W*u\W*d\W*i\W*o|\W*b\W*i\W*n\W*d\W*i\W*n\W*g\W*s|\W*s\W*e\W*t|\W*i\W*s\W*i\W*n\W*d\W*e\W*x|\W*a\W*n\W*i\W*m\W*a\W*t\W*e)[^>\w])|(?:<\w[\s\S]*[\s\0\/]|['"])(?:formaction|style|background|src|lowsrc|ping|on(?:d(?:e(?:vice(?:(?:orienta|mo)tion|proximity|found|light)|livery(?:success|error)|activate)|r(?:ag(?:e(?:n(?:ter|d)|xit)|(?:gestur|leav)e|start|drop|over)?|op)|i(?:s(?:c(?:hargingtimechange|onnect(?:ing|ed))|abled)|aling)|ata(?:setc(?:omplete|hanged)|(?:availabl|chang)e|error)|urationchange|ownloading|blclick)|Moz(?:M(?:agnifyGesture(?:Update|Start)?|ouse(?:PixelScroll|Hittest))|S(?:wipeGesture(?:Update|Start|End)?|crolledAreaChanged)|(?:(?:Press)?TapGestur|BeforeResiz)e|EdgeUI(?:C(?:omplet|ancel)|Start)ed|RotateGesture(?:Update|Start)?|A(?:udioAvailable|fterPaint))|c(?:o(?:m(?:p(?:osition(?:update|start|end)|lete)|mand(?:update)?)|n(?:t(?:rolselect|extmenu)|nect(?:ing|ed))|py)|a(?:(?:llschang|ch)ed|nplay(?:through)?|rdstatechange)|h(?:(?:arging(?:time)?ch)?ange|ecking)|(?:fstate|ell)change|u(?:echange|t)|l(?:ick|ose))|m(?:o(?:z(?:pointerlock(?:change|error)|(?:orientation|time)change|fullscreen(?:change|error)|network(?:down|up)load)|use(?:(?:lea|mo)ve|o(?:ver|ut)|enter|wheel|down|up)|ve(?:start|end)?)|essage|ark)|s(?:t(?:a(?:t(?:uschanged|echange)|lled|rt)|k(?:sessione|comma)nd|op)|e(?:ek(?:complete|ing|ed)|(?:lec(?:tstar)?)?t|n(?:ding|t))|u(?:ccess|spend|bmit)|peech(?:start|end)|ound(?:start|end)|croll|how)|b(?:e(?:for(?:e(?:(?:scriptexecu|activa)te|u(?:nload|pdate)|p(?:aste|rint)|c(?:opy|ut)|editfocus)|deactivate)|gin(?:Event)?)|oun(?:dary|ce)|l(?:ocked|ur)|roadcast|usy)|a(?:n(?:imation(?:iteration|start|end)|tennastatechange)|fter(?:(?:scriptexecu|upda)te|print)|udio(?:process|start|end)|d(?:apteradded|dtrack)|ctivate|lerting|bort)|DOM(?:Node(?:Inserted(?:IntoDocument)?|Removed(?:FromDocument)?)|(?:CharacterData|Subtree)Modified|A(?:ttrModified|ctivate)|Focus(?:Out|In)|MouseScroll)|r(?:e(?:s(?:u(?:m(?:ing|e)|lt)|ize|et)|adystatechange|pea(?:tEven)?t|movetrack|trieving|ceived)|ow(?:s(?:inserted|delete)|e(?:nter|xit))|atechange)|p(?:op(?:up(?:hid(?:den|ing)|show(?:ing|n))|state)|a(?:ge(?:hide|show)|(?:st|us)e|int)|ro(?:pertychange|gress)|lay(?:ing)?)|t(?:ouch(?:(?:lea|mo)ve|en(?:ter|d)|cancel|start)|ime(?:update|out)|ransitionend|ext)|u(?:s(?:erproximity|sdreceived)|p(?:gradeneeded|dateready)|n(?:derflow|load))|f(?:o(?:rm(?:change|input)|cus(?:out|in)?)|i(?:lterchange|nish)|ailed)|l(?:o(?:ad(?:e(?:d(?:meta)?data|nd)|start)?|secapture)|evelchange|y)|g(?:amepad(?:(?:dis)?connected|button(?:down|up)|axismove)|et)|e(?:n(?:d(?:Event|ed)?|abled|ter)|rror(?:update)?|mptied|xit)|i(?:cc(?:cardlockerror|infochange)|n(?:coming|valid|put))|o(?:(?:(?:ff|n)lin|bsolet)e|verflow(?:changed)?|pen)|SVG(?:(?:Unl|L)oad|Resize|Scroll|Abort|Error|Zoom)|h(?:e(?:adphoneschange|l[dp])|ashchange|olding)|v(?:o(?:lum|ic)e|ersion)change|w(?:a(?:it|rn)ing|heel)|key(?:press|down|up)|(?:AppComman|Loa)d|no(?:update|match)|Request|zoom))[\s\0]*=/;
    // if (regExp.test(this.data.billing.address_1) || regExp.test(this.data.billing.address_2)
    //     || regExp.test(this.data.shiping.address_1) || regExp.test(this.data.billing.address_2) ) {
    //   alert("متن آدرس شما حاوی عبارات غیر مجاز می باشد.");
    //   return;
    // } 
    this.showSpinner();
    this.submitAttempt = true;


    if (!this.checkoutValidator.valid) {
      alert("!لطفا ورودی ها را کنترل نمایید و موارد ستاره دار را به درستی تکمیل نمایید.");
      this.hideSpinner();
      return;
    }

    if (updateCart){
      const data = await this.updateCart();
      console.log("DDDDDaaaata is::::::::::;", data);    

      if (data[0] == null || data.length == 0 || data[1]) {
        console.log('Cart is null or Altered');
        this.navCtrl.popTo(Cart);
        return;
      }
    }

    



    
      this.paymentMethods.forEach((element, index) => {
        if (element.id == this.paymentMethod) {
          this.paymentData = element;
          console.log('element ,', element);
        }
      })

      this.data.payment_method = this.paymentData.id
      this.data.payment_method_title = this.paymentData.title
      //set_paid: false,
      this.data.status = 'processing'
      this.data.billing = this.newOrder.billing
      this.data.shipping = (this.billing_shipping_same ? this.newOrder.billing : this.newOrder.shipping)
      this.data.customer_id = this.userInfo.id || ''
      this.data.line_items = this.orderItems
      this.data.shipping_lines = this.shipping_lines
      this.data.coupon_lines = this.couponLines

      let rawOrderData, orderData

      if (order && order.id){ // edit order with put request

        //prevent doubling line items when put request is going
        delete this.data.line_items;
        rawOrderData = await this.gateways.putAsync('orders/'+order.id, this.data);

        orderData = JSON.parse(rawOrderData.body);

        if (rawOrderData.statusCode != 200 ) {
          console.log("put request status code is not 200....")
          alert(rawOrderData.statusMessage);
          this.hideSpinner()
          Promise.reject(-1);
        }

      } else { // new order

      rawOrderData = await this.gateways.postAsync('orders', this.data);

      orderData = JSON.parse(rawOrderData.body);

      this.orderData = orderData;

      console.log (orderData);

      if (rawOrderData.statusCode != 201) {
        alert(rawOrderData.statusMessage);
        this.hideSpinner()
        Promise.reject(-1);
      }


      if (addCoupon){
        return Promise.resolve(orderData)
      }

      
      // add referral
      //get rank amount and other affiliate data
    this.wp.getUserReferrer(this.userInfo.id).then(affiliateId => {
      console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@", affiliateId)
      if (affiliateId > 0){ // affiliate exist

        
          //get rank amount and other affiliate data
          this.wp.getAffiliateRankDetails(affiliateId).then(data => {
            console.log("@@@@@@@@@@@@@@@@@@@", data)
            let rankDetails = data;

            let referralAmount

            if (rankDetails.lifetime_amount_type == "percentage"){
              
              referralAmount = orderData.total * rankDetails.lifetime_amount_value / 100
              console.log (referralAmount);

            } else if (rankDetails.lifetime_amount_type == "flat"){

              referralAmount = rankDetails.lifetime_amount_value

            }

              let addReferralData = 
              { "refferal_wp_uid": this.userInfo.id, "campaign": "", "affiliate_id": affiliateId, "visit_id": "", "description": "", "source": "woo",
               "reference": orderData.id, "reference_details": "App", "parent_referral_id": "", "child_referral_id": "", "amount": referralAmount, 
               "currency": orderData.currency, "status": 1, "payment": 0 }
     
             this.wp.addReferral(addReferralData)

          })
      }
    })
      
      }      


      if (this.paymentData.id == "WC_Saman_Gateway") { ////////////// Sep Gateway //////////////////

        this.payWithSepGateway(orderData);

      }

      else {

        //in case zarinpal not selected: it means Pay On Delivery

        //this.gateways.putAsync('orders/' + orderData.id, { status: 'processing'}).then((order) => {

          this.storage.remove('cart');

          if (this.spinner) this.hideSpinner();
          
          this.orderFinalMessage(orderData, true)

        //}, error => {console.log(error)});

          this.updateUserInformation(this.userInfo.id, this.newOrder);

          return Promise.resolve(orderData)
      }

    //}, error => { console.log(error) })// end of updateCart().then

  }// end of placeOrder()

  showSpinner() {
    this.spinner = this.loadingCtrl.create();

    this.spinner.present();
  }
  hideSpinner() {
    this.spinner.dismiss();
  }

  selectOptions = {
    cssClass: 'rtl'
  }

  checkEmail() {
    let validEmail = false;
    let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!reg.test(this.newOrder.email)) {
      //email structure is ok     
      validEmail = false;
      console.log(validEmail);
      alert("ساختار ایمیل وارد شده معتبر نیست");
    }

  }

  updateUserInformation(userId, data) {
    this.gateways.put('customers/' + userId, data, (err, data, res) => {

      if (data.statusCode == 200 && data.statusMessage == "OK") {
        // successful password change
        console.log('اطلاعات شما با موفقیت بروز شد')

      } else {
        alert('هنگام بروزرسانی اطلاعات کاربر، خطایی رخ داده است. لطفا بعدا دوباره تلاش کنید')
      }
    });
  }

  payWithSepGateway(order) {

      let amount = order.total;

      if (order.currency = 'IRT') { amount = amount * 10 }

      //get token
      this.wp.WooCommerce3.getAsync('sep/v1/get-token/?Action=Token&TerminalId=' + this.wp.TerminalId +
        '&RedirectUrl=' + this.wp.sepCallBackUrl + '&ResNum=' + order.id +
        '&Amount=' + amount + '&CellNumber=' + this.newOrder.billing.phone.toString()).then((sepData) => {

          var sepToken = (JSON.parse(sepData.body))
          var { status, token } = JSON.parse(sepToken);

          if (!status) {
            alert('خطا در دریافت توکن از درگاه سامان');
            alert(JSON.parse(sepToken).errorDesc);
            this.hideSpinner();
            this.spinner.onDidDismiss(() => {
              return -1;
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
                    this.gateways.postAsync('orders/' + order.id + '/notes', { note: "وضعیت تراکنش درگاه سامان اوکی نمیباشد" + sep.State });
                    this.gateways.putAsync('orders/' + order.id, { status: 'cancelled' }).then((data) => {
                      console.log(data);
                      console.log(JSON.parse(data.body));
                    }, error => { console.log(error) });

                    alert(" خطا در پرداخت. شماره خطا: " + sep.Status);

                    this.gateways.postAsync('orders/' + order.id + '/notes', { note: " خطا در پرداخت. شماره خطا: " + sep.Status });

                    this.gateways.putAsync('orders/' + order.id, { status: 'cancelled' }).then((data) => {
                      console.log(data);
                      console.log(JSON.parse(data.body));
                    }, error => { console.log(error) });
                    this.hideSpinner()
                    return -1;
                  } else {

                    // Check if refnum is used or not and then save it

                    var seveRefNumData = { State: sep.State, Status: sep.Status, RefNum: sep.RefNum, ResNum: sep.ResNum, TerminalId: sep.TerminalId, TraceNo: sep.TraceNo }

                    this.wp.WooCommerce3.postAsync('sep/v1/save-RefNum', seveRefNumData).then((data) => {
                      let res = (JSON.parse(data.body));
                      console.log(res);

                      if (res.error) {
                        console.log(res.error);

                        this.gateways.postAsync('orders/' + order.id + '/notes', { note: res.error_description });

                        this.gateways.putAsync('orders/' + order.id, { status: 'cancelled' }).then((data) => {
                          console.log(data);
                          console.log(JSON.parse(data.body));
                        }, error => { console.log(error) });

                        alert(res.error_description);

                        this.hideSpinner()

                        this.spinner.onDidDismiss(() => {
                          return -2;
                        })

                      }

                      if (res.inserted) {
                        // refnum is not used; do Verify
                        //this.sepVerify();

                        var verifyArgs = { RefNum: sep.RefNum, MID: sep.TerminalId, amount: amount, password: this.wp.sepMerchantPassword };

                        this.sepVerify(verifyArgs).then((verifyData) => {

                          if (verifyData.error) {
                            this.gateways.postAsync('orders/' + order.id + '/notes', { note: "خطا: " + JSON.stringify(verifyData.description) });
                            this.gateways.putAsync('orders/' + order.id, { status: 'cancelled' }).then((data) => {
                              console.log(data);
                              console.log(JSON.parse(data.body));
                            }, error => { console.log(error) });

                            this.hideSpinner();
                            return;

                          } else {
                            // place order
                            //Successfull payment => Send order to woocommerce.

                            // Updating order status to prccessing:
                            this.gateways.postAsync('orders/' + order.id + '/notes', { note: "وریفای موفق؛ کد پیگیری: " + sep.TraceNo.toString() });

                            this.gateways.putAsync('orders/' + order.id, { set_paid: true, status: 'processing', transaction_id: sep.RefNum.toString() }).then((order) => {

                              this.storage.remove('cart');

                              if (this.spinner) this.hideSpinner();
                              this.orderFinalMessage(order, true)
                            });

                            this.updateUserInformation(this.userInfo.id, this.newOrder);
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


  // temp() {
  //   this.wp.getUserReferrer(this.userInfo.id).then(referrerId => {

  //     //get rank amount and other affiliate data
  //     this.wp.getAffiliateRankDetails(referrerId).then(data => {
  //       console.log("@@@@@@@@@@@@@@@@@@@", data)
  //       let rankDetails = data;

  //       if (rankDetails.lifetime_amount_value >= 0) {

  //         let amount = orderData.total;

  //         if (rankDetails.lifetime_amount_type == "percentage") {
  //           // calculate amount for addreferral

  //         }
  //         //add referral          
  //         let addReferralData = {
  //           "refferal_wp_uid": referralWpUid, "campaign": "", "affiliate_id": this.affiliateId, "visit_id": "", "description": "register user via app",
  //           "source": "app signup", "reference": "userSignup:" + referralWpUid, "reference_details": "app-register", "parent_referral_id": "", "child_referral_id": "",
  //           "amount": rankDetails.sign_up_amount_value, "currency": "IRT", "status": 1, "payment": 0
  //         }

  //         this.wp.addReferral(addReferralData);

  //       }


  //     })

  //   })

  // }

  async insertCoupon(orderID, couponCode, ){  

  this.coupon_lines.push({"code": couponCode})

    if (orderID){
      this.wp.WooCommerce3.putAsync('orders/' + orderID,  {"coupon_lines":this.coupon_lines} ).then((putedOrder)=>{
        console.log(JSON.parse(putedOrder.body))

        if (putedOrder.statusCode == 400){ alert("کد کوپن معتبر نمی باشد"); this.coupon_lines.pop(); this.hideSpinner(); return}
        putedOrder = JSON.parse(putedOrder.body)
        console.log(putedOrder.coupon_lines)

        this.ngZone.run(()=>{
          this.couponLines = putedOrder.coupon_lines
          console.log(this.couponLines)
        })
        

        //update order totals:
        this.orderData = putedOrder

        if (this.spinner){this.hideSpinner()}
      }) 

    } else { //place order
      this.placeOrder(null,false, true).then((orderData) =>{
        console.log('?????????????????????????',orderData)

        this.wp.WooCommerce3.putAsync('orders/' + orderData.id,  {"coupon_lines": this.coupon_lines} ).then((putedData)=>{
        console.log(putedData)

        if (putedData.statusCode == 400){ alert("کد کوپن معتبر نمی باشد"); this.coupon_lines.pop(); this.hideSpinner(); return}

          putedData = JSON.parse(putedData.body);
        console.log(putedData)

          this.ngZone.run(()=>{
            this.couponLines = putedData.coupon_lines
            console.log(this.couponLines)
          })
          

          // update totals in page:
          this.orderData = putedData

          if (this.spinner){this.hideSpinner()}

        })

      }, error=> {console.log(error)})

    }
    
  }

}