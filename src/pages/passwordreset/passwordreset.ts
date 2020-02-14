import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Http } from '@angular/http';
import { WooCommerceProvider } from './../../providers/woo-commerce/woo-commerce';
import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, AlertController, IonicPage } from 'ionic-angular';

@IonicPage({})
@Component({
  selector: 'page-passwordreset',
  templateUrl: 'passwordreset.html',
})
export class PasswordresetPage {
  WooCommerce: any = {};
  WooCommerce3: any = {};
  userName: string = '';
  phone: string = null;
  maskedPhone: string = '';
  user: any = {};
  submitAttempt: boolean = false;
  sendCodeSubmitAttempt: boolean = false;
  secret: string = '';
  secretMatch: string = ''
  isLoading: boolean = false;
  newPassword: string = null;
  timer: number = 120;
  timeOut: any ={}
  interval: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public WP: WooCommerceProvider, public http: Http,
    private ngZone: NgZone, public toastCtrl: ToastController, public alertCtrl: AlertController) {

    this.WooCommerce3 = WP.WooCommerce3;

    this.WooCommerce = this.WP.init();    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordresetPage');
  }

  resetPasswordByUserName(userName: string) {
    this.submitAttempt = true;
    let userData = {"field":"login", "value":userName}
    this.WooCommerce3.postAsync('sep/v1/get-user/',userData).then(data => {
      console.log(data);
      if (data.body == "null") {
        alert("هیچ کاربری با این شناسه یافت نشد!");
        this.ngZone.run(() => {
          this.submitAttempt = false;
          this.isLoading = false;
          
        })
        return;
      }
      this.isLoading = true;
      this.submitAttempt = true;
      this.timer = 120;

      let ID = JSON.parse(data.body)
      this.user.id = ID;
      console.log(this.user);
      this.passwordResetByPhone(userName);
    })
    
  }

  /* checkEmail(email) {
    
    let validEmail = false;
    let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!reg.test(email)) {
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

  } */

  passwordResetByPhone(phone: string) {

  this.timer = 120;
  this.ngZone.run(()=>{
  this.sendCodeSubmitAttempt = true
})
  
    this.secret = (Math.floor(Math.random() * 90000) + 10000).toString();
    console.log(this.secret);
    let smsData = {"to":phone, "msg": this.secret}
    this.WooCommerce3.postAsync("sep/v1/send-sms", smsData).then(res=> {
        console.log(res);
        if (res.statusCode == 200) {
          this.toastCtrl.create({
            message: "پیامک حاوی کد تغییر رمز به شماره تلفن همراه شما ارسال شد."
            , duration: 5000
          }).present();


          this.timeOut =  setTimeout(() => {
            this.sendCodeSubmitAttempt = false;
            alert(' بازیابی رمز بیش از محدوده زمانی به طول انجامید، لطفا بعدا دوباره تلاش کنید.')
            this.secret = null;
            this.isLoading = false;
            this.submitAttempt = false;
            
            clearInterval(this.interval);

          }, this.timer * 1000);

          clearInterval(this.interval);     
          this.interval = setInterval(() => {
            if (this.timer >= 0)
            this.ngZone.run(()=>{
              this.timer--;
            })
            
          }, 1000)


        } else {
          this.submitAttempt = false;
          this.isLoading = false;

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

  verifySecret(secretMatch) {
    if (secretMatch == this.secret) {
      //alert("your secret is True")
      clearInterval(this.interval);
      clearTimeout(this.timeOut);
      return true;
      //this.updateUser(this.user, this.newPassword);
    } else {
      alert("عدد وارد شده درست نمی باشد!");

      return false;
    }
  }

  updateUserPassword(user, newPassword) {
    console.log(user)
    console.log(newPassword);
    let strongRegex = new RegExp("^(?=.{6,})");
    if (!strongRegex.test(newPassword)) {
      this.toastCtrl.create({
        message: "طول گذرواژه باید حداقل 6 کاراکتر باشد",
        cssClass: "rtl",
        showCloseButton: true,
        closeButtonText: "خب"
      }).present();
      return
    } else {
      //بروزرسانی کاربر با رمز جدید
      var data = { "password": newPassword }
      this.WooCommerce3.put('customers/' + user.id, data, (err, data, res) => {
        console.log(res);
        console.log(data)
        if (data.statusCode == 200 && data.statusMessage == "OK") {
          // successful password change
         /*  clearInterval(this.interval);
          clearTimeout(this.timeOut); */
          this.alertCtrl.create({
            title: "تغییر گذرواژه",
            message: "گذرواژه شما با موفقیت تغییر یافت. لطفا وارد حساب کاربری خود شوید",
            cssClass: "rtl",
            buttons: [{
              text: "ورود", handler: () => {
                this.navCtrl.pop();
              },
            }]

          }).present();

         
        } else {
          clearInterval(this.interval);
          clearTimeout(this.timeOut);
          console.log(data);
          alert('خطایی رخ داده است. لطفا بعدا دوباره تلاش کنید')
        }
      });
    }

  }


}
