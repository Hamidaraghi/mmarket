import { WooCommerceProvider } from './../../providers/woo-commerce/woo-commerce';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController, IonicPage } from 'ionic-angular';
import 'rxjs/add/operator/map';

@IonicPage({})
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {
  WooCommerce: any;
  newUser: any = {};
  billing_shipping_same: boolean;
  spinner: any;
  signupValidator: FormGroup;
  submitAttempt: boolean = false;
  timer: number = 120;
  timeOut: any = {}
  interval: any = {};
  sendCodeSubmitAttempt: boolean = false;
  secret: string = '';
  secretMatch: string = '';

  // parent affiliate:
  affiliateId: number; // ngModel of ion-input element

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,
    public alertCtrl: AlertController, public loadingCtrl: LoadingController, public formBuilder: FormBuilder
    , public wp: WooCommerceProvider,) {

    //validating form
    this.signupValidator = formBuilder.group({
      firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Zء-ی ]*')])],
      lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Zء-ی ]*')])],
      //email: ['', Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')],
      //postCode: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(10)])],
      userPhone: ['', Validators.compose([Validators.required, Validators.pattern('^09[0-9]*'), Validators.maxLength(11), Validators.minLength(11)])],
      //address: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(100)])],
      rules: ['false', Validators.requiredTrue],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      //phone: ['', Validators.compose([Validators.pattern('[0-90-9]*'), Validators.maxLength(11), Validators.minLength(11)])],
      affiliateId: ['', /* Validators.pattern('[0-9]*') */]

    })

    this.newUser.billing = {};
    this.newUser.shipping = {};
    this.billing_shipping_same = true;

    this.WooCommerce = wp.WooCommerce;

    /* this.wp.WooCommerce3.getAsync('sep/v1/get-country-states').then((data)=>{
      let states = (JSON.parse(data.body))

        Object.keys(states).forEach(stateCode => {
        let stateName = states[stateCode];
        this.states.push({stateCode, stateName})
      });

      //console.log(this.states[0].stateName)
      
    }) */

  }// end constructor

  sendSms(phone) {

    this.timer = 120;

    this.sendCodeSubmitAttempt = true
    this.secret = (Math.floor(Math.random() * 90000) + 10000).toString();
    //console.log(this.secret);
    let smsData = { "to": this.newUser.username, "code": this.secret, "pattern_code": "681", "input_data": { "code": "854", "company": "mm" } }
    this.wp.WooCommerce3.postAsync("sep/v1/send-sms", smsData).then(res => {
      console.log(res);
      if (res.status == 200) {
        this.toastCtrl.create({
          message: "پیامک حاوی کد تغییر رمز به شماره تلفن همراه شما ارسال شد."
          , duration: 5000
        }).present();


        this.timeOut = setTimeout(() => {
          this.sendCodeSubmitAttempt = false;
          alert(' بازیابی رمز بیش از محدوده زمانی به طول انجامید، لطفا بعدا دوباره تلاش کنید.')
          this.secret = null;

          clearInterval(this.interval);

        }, this.timer * 1000);

        this.interval = setInterval(() => {
          if (this.timer >= 0)
            this.timer--;
        }, 1000)


      } else {
        this.toastCtrl.create({
          message: "ارسال پیامک تایید با خطا مواجه شد لطفا بعدا دوباره تلاش فرمایید."
          , duration: 5000
        }).present();
      }
    }, error => {
      console.log(error);
      this.toastCtrl.create({
        message: "ارسال پیامک تایید با خطا مواجه شد لطفا بعدا دوباره تلاش فرمایید."
        , duration: 5000
      }).present();
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  setBillingToShipping() {
    this.billing_shipping_same = !this.billing_shipping_same;
  }

  signup() {
    console.log(this.signupValidator)

    this.submitAttempt = true;
    if (!this.signupValidator.valid) {
      alert("!لطفا ورودی ها را کنترل نمایید و موارد ستاره دار را به درستی تکمیل نمایید.");
      return;
    }

    this.showSpinner()

    let customerData = {
      "email": this.newUser.email,
      "first_name": this.newUser.first_name,
      "last_name": this.newUser.last_name,
      "username": this.newUser.username,
      "password": this.newUser.password,
      "confirm_password": this.newUser.confirm_password,
      "billing": {
        "first_name": this.newUser.first_name,
        "last_name": this.newUser.last_name,
        //"company": "",
        //"address_1": this.newUser.billing.address_1,
        //"address_2": this.newUser.billing.address_2,
        //"city": this.newUser.billing.city,
        //"state": this.newUser.billing.state,
        //"postcode": this.newUser.billing.postcode,
        //"country": this.newUser.billing.country,
        //"email": this.newUser.email,
        //"phone": this.newUser.billing.phone
      },
      "shipping": {
        "first_name": this.newUser.first_name,
        "last_name": this.newUser.last_name,
        //"company": "",
        //"address_1": this.newUser.shipping.address_1,
        //"address_2": this.newUser.shipping.address_2,
        //"city": this.newUser.shipping.city,
        //"state": this.newUser.shipping.state,
        //"postcode": this.newUser.shipping.postcode,
        //"country": this.newUser.shipping.country
      }
    }

    if (this.billing_shipping_same) {
      this.newUser.shipping = this.newUser.billing;
    }



    //Validate affiliate
    this.wp.getAffiliateRankDetails(this.affiliateId).then((rankDetails) => {

      console.log('Prommise resolved',rankDetails);
      
    this.WooCommerce.postAsync('customers', customerData).then(async (data) => {

      if (data.statusCode == 201) { // customer registered

        // add signup referral and relation
        if (this.affiliateId > 0) {

          let referralWpUid = JSON.parse(data.body).id

          console.log("referralWpUid is:", referralWpUid);


          //add relation between affiliate and referral
          this.wp.addAffiliateRelation(this.affiliateId, referralWpUid).then(()=>{
            this.wp.addSignupReferral(referralWpUid, rankDetails, this.affiliateId)
          })          

        }


        //show success message
        this.alertCtrl.create({
          title: "حساب کاربری ساخته شد",
          message: "حساب کاربری شما با موفقیت ساخته شد. لطفا برای ادامه، وارد شوید!",
          cssClass: "rtl",
          buttons: [{
            text: "ورود", handler: () => {
              this.navCtrl.push('Login');
            },
          }]

        }).present();

      } else if (data.statusCode == 400) {
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


    }).catch((error)=>{console.log(error); alert("کد معرف معتبر نیست و یا همکار فروش نشده است"); this.hideSpinner(); return})


  }

  showSpinner() {
    this.spinner = this.loadingCtrl.create({
      //spinner: "dots"
    });
    this.spinner.present();
  }

  hideSpinner() {
    this.spinner.dismiss();
  }


}