import { Http } from '@angular/http';
import { Cart } from './../cart/cart';
import { FabContainer } from 'ionic-angular/components/fab/fab-container';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { Storage } from '@ionic/storage';
import { Component, NgZone } from '@angular/core';
import { NavController, ToastController, IonicPage, Platform } from 'ionic-angular';
import { WooCommerceProvider } from '../../providers/woo-commerce/woo-commerce';
import { Events } from 'ionic-angular/util/events';
import 'rxjs/add/operator/map';

@IonicPage({})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private resetBackButton: any;
  woocommerce3: any = {};
  loggedIn: boolean;
  spinner: any;
  WooCommerce: any;
  featuredProducts: any[] = [];
  featuredProductsPage: number;
  saleProducts: any[] = [];
  saleProductPage: number;
  topPeriodSaleProducts: any[] = [];
  page: number;
  moreProducts: any[] = [];
  searchQuery: string = "";
  slides: Object[];
  QueryResult = 'QueryResult';
  ProductDetails = 'ProductDetails';
  cart: any = {};
  cartPage = Cart
  MyordersPage = 'MyordersPage';
  HomePage = 'HomePage';
  Signup = 'Signup';
  ProductsByCategory = 'ProductsByCategory';
  Login = 'Login';
  user: any = {};
  isSearchbarOpened: boolean = false;
  categories: any[] = [];

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, private ngZone: NgZone,
    public loadingCtrl: LoadingController, private http: Http, private InAppBrowser: InAppBrowser,
    private storage: Storage, public wp: WooCommerceProvider, public events: Events, public platform: Platform) {

    // let headers = new Headers();
    // headers.append('authorization', 'Basic ' + btoa('affiliate:YpBUadO@r#CdD(r^&dha54j1'));
    //headers.append('Content-Type', 'text/html;base64')      

    // let postData = ({ "refferal_wp_uid": "226", "campaign": "", "affiliate_id": "2", "visit_id": "", "description": "test", 
    // "source": "restapi", "reference": "user SignUp", "reference_details": "test", "parent_referral_id": "test", "child_referral_id": "",
    // "amount": 12, "currency": "IRT", "status": 1, "payment": 0 });

    //get rank amount and other affiliate data

    // this.wp.getUserReferrer(237).then(data => {
    //   console.log("@@@@@@@@@@@@@@@@@@", data)
    // })



    //get rank amount and other affiliate data
    // this.wp.getAffiliateRankDetails(2).then(data => {
    //   console.log("@@@@@@@@@@@@@@@@@@@", data)
    //   let rankDetails = data;

    // })


    this.WooCommerce = wp.init();
    this.woocommerce3 = wp.WooCommerce3;

    this.loadMoreProducts(null);
    this.getSlider(null);
    this.getFeaturedProducts(null);
    this.getSaleProducts(null);
    this.getCategories(null);
    this.getPeriodTopSales("month")

    this.cart.length = 0;
    this.storage.ready().then(() => {
      this.storage.get("userLoginInfo").then((userLoginInfo) => {
        if (userLoginInfo != null) {
          this.loggedIn = true
          this.user = userLoginInfo.user;
          console.log(userLoginInfo);

        } else {
          console.log("No user logged in")
          this.user = {};
          this.loggedIn = false;
        }
      })
    })

    events.subscribe('userLoginInfo', (loggedin, user) => {
      console.log("userLoginInfo:", user, ':', loggedin)
      this.loggedIn = loggedin
      if (user) {
        this.user = user.user
      } else {
        this.user = null;
        this.storage.remove('cart');
        this.storage.remove("userLoginInfo").then(() => {
          console.log("User logged Out...");
          this.user = {};
        })
      }
    })



    /*     events.subscribe("network", (network, connected) => {
          if (connected) {
            this.slides = [];
            this.moreProducts = [];
            this.featuredProducts = [];
            this.saleProducts = [];
            this.categories = [];
            this.topPeriodSaleProducts = [];
    
            this.loadMoreProducts(null);
            this.getSlider(null);
            this.getFeaturedProducts(null);
            this.getSaleProducts(null);
            this.getCategories(null);
            this.getPeriodTopSales("month");
          }
        }); */



    this.storage.get('cart').then((cart) => {
      this.cart = cart
    })

    this.events.subscribe('cart', (cart) => { ngZone.run(() => { this.cart = cart }) });


  } // end of constructor

  ionViewDidLoad() {
  }

  ionViewWillEnter() {
    this.storage.get('cart').then((cart) => {
      this.cart = cart
    })
  }


  ionViewDidEnter() {
    if (this.resetBackButton) {
      this.resetBackButton();
    }

    let timer = 2;
    let time = 0;
    //this.resetBackButton = this.platform.registerBackButtonAction(null);

    this.resetBackButton = this.platform.registerBackButtonAction(() => {
      time++

      this.presentToast();

      setInterval(() => {
        timer -= 1;
        if (!timer) { return }
      }, 1000);

      setTimeout(() => {
        timer = 2;
        time = 0;
      }, 2000)
      if (time >= 2 && timer < 2) {
        this.platform.exitApp();
      }

    }, 10);
  }

  ionViewWillLeave() {
    if (this.resetBackButton) {
      this.resetBackButton();
      this.resetBackButton = null;
    }
  }

  getCategories(event) {

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


  }

  getSlider(event) {
    this.http.get(this.wp.productSlider)
      .subscribe(res => {
        this.ngZone.run(() => {
          this.slides = res.json();
        })
      });
    /*     if (event)
          event.complete(); */
  }


  getPeriodTopSales(period: string) {
    this.wp.WooCommerce3.getAsync('reports/top_sellers?period=' + period).then((topSales) => {
      console.log("TOPSALES|||||||||||||||||", topSales)
      console.log(topSales.body)
      console.log(JSON.parse(topSales.body))

      let tempTop = JSON.parse(topSales.body);
      tempTop.forEach(element => {

        this.wp.WooCommerce.getAsync('products/' + element.product_id).then((product) => {
          console.log("SaleProduc as element is: ", product);

          this.ngZone.run(() => {
            this.topPeriodSaleProducts.push(JSON.parse(product.body));

          })

        })

      });

      console.log("SaleProducts Ready to use", this.topPeriodSaleProducts);



    })

  }

  getFeaturedProducts(event) {
    if (event == null) {
      this.featuredProductsPage = 1;
      this.featuredProducts = [];
    } else {
      this.featuredProductsPage++;
    }
    //this.showSpinner();
    this.WooCommerce.getAsync("products?featured=true&status=publish&page=" + this.featuredProductsPage).then((data) => {
      let acquiredProducts = JSON.parse(data.body)
      console.log(acquiredProducts);

      this.ngZone.run(() => {
        this.featuredProducts = this.featuredProducts.concat(acquiredProducts);
        console.log("Featured Products are: ", this.featuredProducts);
      });

      if (event != null && acquiredProducts.length < 10) {
        //getting last sale products again
        this.featuredProductsPage--

      }

    }, (err) => {
      console.log(err);
      //this.hideSpinner();
    });
  }


  getSaleProducts(event) {
    ////////////
    console.log(event);
    if (event == null) {
      this.saleProductPage = 1;
      this.saleProducts = [];
    } else {
      this.saleProductPage++;
    }
    this.WooCommerce.getAsync("products?on_sale=true&in_stock=true&status=publish&page=" + this.saleProductPage).then((data) => {
      let acquiredProducts = JSON.parse(data.body)
      console.log(acquiredProducts);

      this.ngZone.run(() => {
        this.saleProducts = (this.saleProducts).concat(acquiredProducts);
        console.log("SaleProducts are: ", this.saleProducts)
      })

      // if (event != null) {
      //   event.complete();
      // }

      if (event != null && acquiredProducts.length < 10) {
        //getting last sale products again
        this.saleProductPage--
      }
    }, (err) => {
      console.log(err)
    })
    ////////////////

  }


  loadMoreProducts(event) {
    console.log(event);
    if (event == null) {
      this.page = 1;
      this.moreProducts = []
    } else {
      this.page++;
    }
    this.WooCommerce.getAsync("products?status=publish&page=" + this.page).then((data) => {
      let acquiredProducts = JSON.parse(data.body)
      console.log(acquiredProducts);

      this.ngZone.run(() => {
        this.moreProducts = (this.moreProducts).concat(acquiredProducts);
        console.log("More Products are: ", this.moreProducts)
      })

      if (event != null) {
        event.complete();
      }

      if (event != null && acquiredProducts.length < 10) {
        event.enabled = false;
        this.toastCtrl.create({
          message: "پایان جدید ترین محصولات",
          duration: 3000
        }).present();
      }
    }, (err) => {
      console.log(err)
    })


  }

  doRefresh(event) {
    this.slides = [];
    this.moreProducts = [];
    this.featuredProducts = [];
    this.saleProducts = [];
    this.categories = [];
    this.topPeriodSaleProducts = [];
    this.getSlider(null);
    this.loadMoreProducts(event);
    this.getFeaturedProducts(null);
    this.getSaleProducts(null);
    this.getCategories(null);
    this.getPeriodTopSales("month");
  }//end doRefresh() function

  openProductPage(product) {
    this.navCtrl.push('ProductDetails', { "product": product });
  }

  onSearch(event) {
    if (this.searchQuery.length > 0) {
      this.navCtrl.push('SearchPage', { "searchQuery": this.searchQuery })
    }
  }

  showSpinner() {
    this.spinner = this.loadingCtrl.create({
      spinner: "dots",
      showBackdrop: false
    });
    this.spinner.present();
  }

  hideSpinner() {
    this.spinner.dismiss();
  }
  openLink(url: string, external: boolean = false) {
    if (!url) return;
    console.log("Slide url is: ", url)
    if (url.indexOf("link://") == 0) {
      url = url.replace("link://", "");
      console.log(url)
      let data = url.split("/");
      console.log(data);
      if (data[0] == "product") { this.navCtrl.push(this.ProductDetails, { id: data[1] }) }

      else if (data[0] == "product-category") { this.navCtrl.push(this.ProductsByCategory, { id: data[1] }); }
      /*     else if (data[0] == "bookmark") this.navCtrl.push(this.FavoritePage);
             else if (data[0] == "about-us") this.navCtrl.push(this.AboutPage);
             else if (data[0] == "term-and-conditions") this.navCtrl.push(this.TermsPage);
             else if (data[0] == "privacy-policy") this.navCtrl.push(this.PrivacyPage);
             else if (data[0] == "contact-us") this.navCtrl.push(this.ContactPage);
      */
    } else if (!external) {
      this.InAppBrowser.create(url, "_blank", "location=no");
      console.log(url);
    }
  }
  openQueryResult() {
    this.navCtrl.push('QueryResult', { 'query': 'products?on_sale=true&in_stock=true&status=publish', 'pageTitle': 'حراج!' });
  }

  openPage(page: any, fab: FabContainer) {
    fab.close();
    if (page != 'HomePage') {
      this.navCtrl.push(page);
    } else {
      this.navCtrl.popTo('HomePage');
    }
  }

  logout(fab: FabContainer) {
    //fab.close();
    this.events.publish('userLoginInfo', false, null);
    this.storage.remove("userLoginInfo").then(() => {
      console.log("User logged Out...");
      this.loggedIn = false;
      this.user = {};
    });
    // removing cart:
    this.storage.remove("cart");

    alert("شما از حساب کاربری خود خارج شدید.")
  }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: "برای خروج دوباره بزنید",
      duration: 2000,
      cssClass: 'rtl',
      //showCloseButton: true,
    });
    toast.present();
  }



  onSwipeContent(e) {
    if (e['deltaX'] < -150) this.navCtrl.push(this.ProductsByCategory);
  }

  // openBrowsertab(){
  //   this.browserTab.isAvailable()
  //   .then(isAvailable => {
  //     if (isAvailable) {
  //       this.browserTab.openUrl('https://easyhyperlinks.com');
  //     } else {
  //      // open URL with InAppBrowser instead or SafariViewController
  //       this.InAppBrowser.create('https://easyhyperlinks.com','_system')
  //     }
  //  });
  // }
}