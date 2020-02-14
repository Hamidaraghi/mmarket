import { Events } from 'ionic-angular/util/events';
import { WooCommerceProvider } from './../../providers/woo-commerce/woo-commerce';
import { Storage } from '@ionic/storage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-myaccount',
  templateUrl: 'myaccount.html',
})
export class MyaccountPage {
  WooCommerce: any = {};
  newUser: any = {}
  billing_shipping_same: boolean;
  spinner: any;
  updateUserValidator: FormGroup;
  submitAttempt: boolean = false;
  passChange: boolean = false;
  states: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,
    public alertCtrl: AlertController, public loadingCtrl: LoadingController, public formBuilder: FormBuilder,
    public storage: Storage, public wp: WooCommerceProvider, public ngZone: NgZone, public events: Events) {

    //validating form
    this.updateUserValidator = formBuilder.group({
      firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Zا-ی ]*')])],
      lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Zا-ی ]*')])],
      email: ['', Validators.compose([Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])],
      postCode: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(10)])],
      phone: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(11), Validators.minLength(11)])],
      address: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(100)])],
      rules: ['false', Validators.requiredTrue],
      password: ['', Validators.compose([Validators.minLength(6)])]
    })

    this.WooCommerce = wp.init();
    this.newUser.billing = {};
    this.newUser.shipping = {};
    console.log(this.WooCommerce)
    this.storage.get("userLoginInfo").then((userData)=>{
      let id = userData.user.id
      console.log(id) 
      this.WooCommerce.getAsync('customers/'+id ).then(customer=>{
        ngZone.run(()=>{
          this.newUser = JSON.parse(customer.body);
          console.log("USER iS:  ********",this.newUser )
        })        
      }, error=>{console.log(error)})
        
     }, error=>{ console.log(error) });

    this.billing_shipping_same = true;

    this.wp.WooCommerce3.getAsync('sep/v1/get-country-states').then((data)=>{
      let states = (JSON.parse(data.body))

        Object.keys(states).forEach(stateCode => {
        let stateName = states[stateCode];
        this.states.push({"code":stateCode, "name":stateName})
      });

      console.log(this.states);

      //console.log(this.states[0].stateName)
      
    })

  }// end constructor
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  setBillingToShipping() {
    this.billing_shipping_same = !this.billing_shipping_same;
  }

  checkPassword() {
    let strongRegex = new RegExp("^(?=.{6,})");
    if (this.newUser.password && !strongRegex.test(this.newUser.password)) {
      this.toastCtrl.create({
        message: "طول گذرواژه باید حداقل 6 کاراکتر باشد",
        cssClass: "rtl",
        showCloseButton: true,
        closeButtonText: "خب"
      }).present();
      return false;
    } // end if(!strongRegex.test(this.newUser.password))
    else {
      if(this.newUser.password != this.newUser.confirm_password){
        this.toastCtrl.create({
          message: "گذرواژه و تکرار آن یکسان نیستند!",
          showCloseButton: true,
          cssClass: "rtl",
          closeButtonText: "خب"
        }).present();
        console.log("password missmach")
        return false
      }
      console.log('password strong')
      return true; }
  } //end of checkPassword()

  checkEmail() {
    let validEmail = false;
    let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!reg.test(this.newUser.email)) {
      //email structure is ok     
      validEmail = false;
      console.log(validEmail);
      this.toastCtrl.create({
        message: "ساختار ایمیل وارد شده معتبر نیست",
        showCloseButton: true,
        closeButtonText: "خب",
        cssClass: "rtl"
      }).present();
      return false
    } else { return true; }

  }

  signup() {
    console.log(this.updateUserValidator)
    this.submitAttempt = true;
    if (!this.updateUserValidator.valid) {
      alert("!لطفا ورودی ها را کنترل نمایید و موارد ستاره دار را به درستی تکمیل نمایید.");
      return;
    }

    this.showSpinner()

    let customerData = {
      "email": this.newUser.email,
      "first_name": this.newUser.first_name,
      "last_name": this.newUser.last_name,
      "username": this.newUser.username,
      "password": (this.newUser.password)? this.newUser.password: null,
      "billing": {
        "first_name": this.newUser.first_name,
        "last_name": this.newUser.last_name,
        "company": this.newUser.billing.company,
        "address_1": this.newUser.billing.address_1,
        "address_2": this.newUser.billing.address_2,
        "city": this.newUser.billing.city,
        "state": this.newUser.billing.state,
        "postcode": this.newUser.billing.postcode,
        "country": this.newUser.billing.country,
        "email": this.newUser.email,
        "phone": this.newUser.billing.phone
      },
      "shipping": {
        "first_name": this.newUser.first_name,
        "last_name": this.newUser.last_name,
        "company": this.newUser.shipping.company,
        "address_1": this.newUser.shipping.address_1,
        "address_2": this.newUser.shipping.address_2,
        "city": this.newUser.shipping.city,
        "state": this.newUser.shipping.state,
        "postcode": this.newUser.shipping.postcode,
        "country": this.newUser.shipping.country
      }
    }

    if (this.billing_shipping_same) {
      this.newUser.shipping = this.newUser.billing;
    }

    /* this.WooCommerce.post('customers', customerData, function(err, data, res) {
          console.log(JSON.parse(res));
        }); */
    this.WooCommerce.putAsync('customers/'+ this.newUser.id, customerData).then((data) => {
      console.log("Raw Data", data);
      console.log(JSON.parse(data.body));

      if (data.statusCode == 200) {
        /* this.events.publish('userLoginInfo', false, null);
        this.storage.remove('cart');
        this.storage.remove("userLoginInfo").then(() => {
          console.log("User logged Out...");          
        }, ) */

        this.alertCtrl.create({
          title: "بروزرسانی",
          message: "اطلاعات شما با موفقیت بروزرسانی شد",
          cssClass: "rtl",
          buttons: [{ text: "خب"}]

        }).present();
      } else {
        let message = JSON.parse(data.body).message
        this.toastCtrl.create({
          message: message,
          showCloseButton: true,
          closeButtonText: "خب",
          cssClass: "rtl",
        }).present();
      }

      this.hideSpinner();

    }, (err) => { console.log(err); this.hideSpinner() })
  }



  showSpinner() {
    this.spinner = this.loadingCtrl.create({
      spinner: "dots"
    });
    this.spinner.present();
  }

  hideSpinner() {
    this.spinner.dismiss();
  }

}