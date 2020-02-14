import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController, Events, IonicPage } from 'ionic-angular';

@IonicPage({})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  searchQuery: string = '';
  username: string;
  password: string;
  Signup = 'Signup';
  PasswordresetPage = 'PasswordresetPage';

  constructor(public events: Events, public navCtrl: NavController, public navParams: NavParams, public http: Http, public toastController: ToastController,
    public storage: Storage, public alertController: AlertController) {
    this.username = "";
    this.password = "";

  }

  passwordReset() {

    let secret = Math.floor(Math.random() * 90000) + 10000;

    /*   var url = "http://panel.websmspanel.ir/post/send.asmx";
      let postData = new FormData();
      postData.append('from', '50001333885200');
      postData.append('to', '9117966486');
      postData.append('text', secret.toString());
      postData.append('password', 'hamidvahid2012');
      postData.append('username', 'h_araghi');
      postData.append('UDH', '');
      postData.append('IsFlash', 'false');
      postData.append('recId', '');
      postData.append('status', '');
      
      this.http.post(url, postData).subscribe(res=>{
        console.log(res);
      }) */

    this.http.post("http://panel.websmspanel.ir/post/sendsms.ashx?from=50001333885200&to=9117966486&text=" + secret + "&password=hamidvahid2012&username=h_araghi", "SendSms")
      .subscribe((res) => {
        console.log(res);

        if (res.ok) {
          this.toastController.create({
            message: "پیامک حاوی کد تغییر رمز به شماره تلفن همراه شما ارسال شد."
            , duration: 5000
          }).present();
          return
        }
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login() {
    this.http.get("https://mmarket.ir/api/auth/generate_auth_cookie/?insecure=cool&username=" + this.username + "&password=" + this.password)
      .subscribe((res) => {
        console.log(res.json());

        let response = res.json();
        
        if (response.error) {

          let error: string ="";

          if (error.indexOf("Invalid username")) {
            error = "نام کاربری یا کلمه عبور اشتباه است"
          } else {
            error = response.error;
          }

          this.toastController.create({
            message: error
            , duration: 5000,
            cssClass: 'rtl'
          }).present();
          return
        }
        // Bublishing login user
        this.events.publish('userLoginInfo', true, response)
        this.storage.set("userLoginInfo", response).then((data) => {

          this.alertController.create({
            title: "ورود موفق",
            message: "شما با موفقیت وارد شده اید.",
            buttons: [{
              text: "خب",
              handler: () => {
                if (this.navParams.get("next")) {
                  this.navCtrl.push(this.navParams.get("next"));

                } else {
                  this.navCtrl.popToRoot();
                }
              }
            }],
            cssClass: 'rtl'
          }).present();

        }, (err) => console.log(err))

      });
  }
  onSearch(event) {
    if (this.searchQuery.length > 0) {
      this.navCtrl.push('SearchPage', { "searchQuery": this.searchQuery })
    }
  }
}
