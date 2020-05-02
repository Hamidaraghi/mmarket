import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Cart } from './../cart/cart';
import { Storage } from '@ionic/storage';
import { Component, ViewChild, NgZone } from '@angular/core';
import { NavController, NavParams, ModalController, Events, IonicPage, AlertController } from 'ionic-angular';
import { WooCommerceProvider } from '../../providers/woo-commerce/woo-commerce';
import { AppVersion } from '@ionic-native/app-version';


@IonicPage({})
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class Menu {
  showLevel1 = null;
  showSubmenu: boolean = false;
  homePage: any;
  WooCommerce: any;
  categories: any[] = [];
  loggedIn: boolean;
  user: any = {};
  PasswordresetPage = 'PasswordresetPage'
  @ViewChild("content") childNavCtrl: NavController;

  constructor(public events: Events, public navCtrl: NavController, public navParams: NavParams, public storage: Storage,
    public modalController: ModalController, private WP: WooCommerceProvider, private InAppBrowser: InAppBrowser, public ngZone: NgZone,
    private appVersion: AppVersion, private alertCtrl: AlertController) {
     
    this.appVersion.getVersionCode().then(data=>{
      console.log('**8888888888**',data);
      this.versionCheck(data);
    })
  
/*     console.log('app name',this.appVersion.getAppName());
    console.log('app Package Name',this.appVersion.getPackageName());
    console.log('app Version Code',this.appVersion.getVersionCode());
    console.log('app Version Number',this.appVersion.getVersionNumber()); */
                                    
    this.user = {};
    this.homePage = 'HomePage';
    this.categories = [];

    this.WooCommerce = WP.init();

    this.WooCommerce.getAsync('products/categories?per_page=100').then((data) => {
      console.log(data);
      
      let temp: any[] = JSON.parse(data.body);

      for (let i = 0; i < temp.length; i++) {
        if (temp[i].parent == 0) {

          temp[i].subCategories = [];

          this.categories.push(temp[i]);
        } 
      }

      //Groups Subcategories
      for (let i = 0; i < temp.length; i++) {
        for (let j = 0; j < this.categories.length; j++) {
          //console.log("Checking " + j + " " + i)
          if (this.categories[j].id == temp[i].parent) {
            this.categories[j].subCategories.push(temp[i]);
          }
        }
      }

      console.log(this.categories);
      console.log((temp));
    }
      , (err) => { console.log(err); })

    this.events.subscribe('userLoginInfo', (loggedin, user) => {
      console.log("userLoginInfo:", user, ':', loggedin)
      this.loggedIn = loggedin
      if (user) {
        ngZone.run(()=>{
          this.user = user.user
        })
      } else {
        this.user = null;
        ngZone.run(()=>{          
          this.loggedIn = false
        })
      }
    })

  }//end of constructor
  openCategoryPage(categoryId) {
    this.childNavCtrl.push('ProductsByCategory', { "id": categoryId });
  }

  ionViewDidEnter() {
    this.storage.ready().then(() => {
      this.storage.get("userLoginInfo").then((userLoginInfo) => {
        if (userLoginInfo != null) {
          console.log("A user already logged in...")
          this.user = userLoginInfo.user;
          console.log(userLoginInfo);
          this.loggedIn = true;
        } else {
          console.log("No user logged in")
          this.user = {};
          this.loggedIn = false;
        }
      }, )
    }, )
  }

  openPage(pageName: string) {
    if (pageName == "signup") {
      this.childNavCtrl.push('Signup');
    }
    if (pageName == "login") {
      this.childNavCtrl.push('Login');
    }
    if (pageName == "cart") {
      this.childNavCtrl.push(Cart)
    }
    if (pageName == "myorders") {
      this.childNavCtrl.push('MyordersPage', { "userId": this.user.id });
    }
    if (pageName == "MyaccountPage"){
      this.childNavCtrl.push('MyaccountPage', { "user": this.user });

    }
    if (pageName == "logout") {
      this.events.publish('userLoginInfo', false, null);
      this.storage.remove('cart');
      this.storage.remove("userLoginInfo").then(() => {
        console.log("User logged Out...");
        this.loggedIn = false;
        this.user = {};
      }, )
    }
  }

  openLink(url: string, external: boolean = false) {
    if (!url) return;
    if (url.indexOf("link://") == 0) {
      url = url.replace("link://", "");
      console.log(url)
      let data = url.split("/");
      console.log(data);
      /* if (data[0] == "product") { this.navCtrl.push(this.ProductDetails, { id: data[1] }) }
              else if (data[0] == "product-category") this.navCtrl.push(this.ProductsByCategory, { id: data[1] });
              else if (data[0] == "bookmark") this.navCtrl.push(this.FavoritePage);
              else if (data[0] == "about-us") this.navCtrl.push(this.AboutPage);
              else if (data[0] == "term-and-conditions") this.navCtrl.push(this.TermsPage);
              else if (data[0] == "privacy-policy") this.navCtrl.push(this.PrivacyPage);
              else if (data[0] == "contact-us") this.navCtrl.push(this.ContactPage);
       */
    } else if (!external) {
      this.InAppBrowser.create(url, "_blank", "location=yes");
      console.log(url);
    }
  }

  menuItemHandler(): void {
    this.showSubmenu = !this.showSubmenu;
  }

  toggleLevel1(idx) {
    if (this.isLevel1Shown(idx)) {
      this.showLevel1 = null;
    } else {
      this.showLevel1 = idx;
    }
  };

  isLevel1Shown(idx) {
    return this.showLevel1 === idx;
  };


versionCheck(version){
  this.WP.WooCommerce3.getAsync('sep/v1/version-check?version='+version).then((data)=>{
    console.log('^^^^^^^^^',data.body)
    let versionData = JSON.parse(data.body);
    if (!versionData.up_to_date){
      this.alertCtrl.create({
        message: versionData.decsription,
        title: 'بروزرسانی',
        buttons: [{
          text: "بروزرسانی",
          handler: () => {
            this.InAppBrowser.create(versionData.download_url, "_system", "location=yes");
          }
        }, {
          text: 'خب',
          handler: () =>{
            console.log('روی دکمه خب کلیک شد')
          }
        }],
        cssClass: 'rtl'

      }).present();
    }
  })

}

}