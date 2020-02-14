webpackJsonp([3],{

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePagePageModule", function() { return HomePagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home__ = __webpack_require__(925);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePagePageModule = /** @class */ (function () {
    function HomePagePageModule() {
    }
    HomePagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_0__home__["a" /* HomePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__home__["a" /* HomePage */])],
        })
    ], HomePagePageModule);
    return HomePagePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 917:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(13);
var map_1 = __webpack_require__(401);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 925:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_cart__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_loading_loading_controller__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_woo_commerce_woo_commerce__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular_util_events__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__(917);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, toastCtrl, ngZone, loadingCtrl, http, InAppBrowser, storage, wp, events, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.ngZone = ngZone;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.InAppBrowser = InAppBrowser;
        this.storage = storage;
        this.wp = wp;
        this.events = events;
        this.platform = platform;
        this.woocommerce3 = {};
        this.featuredProducts = [];
        this.saleProducts = [];
        this.topPeriodSaleProducts = [];
        this.moreProducts = [];
        this.searchQuery = "";
        this.QueryResult = 'QueryResult';
        this.ProductDetails = 'ProductDetails';
        this.cart = {};
        this.cartPage = __WEBPACK_IMPORTED_MODULE_1__cart_cart__["a" /* Cart */];
        this.MyordersPage = 'MyordersPage';
        this.HomePage = 'HomePage';
        this.Signup = 'Signup';
        this.ProductsByCategory = 'ProductsByCategory';
        this.Login = 'Login';
        this.user = {};
        this.isSearchbarOpened = false;
        this.categories = [];
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('authorization', 'Basic ' + btoa('affiliate:YpBUadO@r#CdD(r^&dha54j1'));
        //headers.append('Content-Type', 'text/html;base64')      
        // let postData = ({ "refferal_wp_uid": "226", "campaign": "", "affiliate_id": "2", "visit_id": "", "description": "test", 
        // "source": "restapi", "reference": "user SignUp", "reference_details": "test", "parent_referral_id": "test", "child_referral_id": "",
        // "amount": 12, "currency": "IRT", "status": 1, "payment": 0 });
        //get rank amount and other affiliate data
        this.wp.getUserReferrer(237).then(function (data) {
            console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@", data);
        });
        //get rank amount and other affiliate data
        this.wp.getAffiliateRankDetails(2).then(function (data) {
            console.log("@@@@@@@@@@@@@@@@@@@", data);
            var rankDetails = data;
        });
        this.WooCommerce = wp.init();
        this.woocommerce3 = wp.WooCommerce3;
        this.loadMoreProducts(null);
        this.getSlider(null);
        this.getFeaturedProducts(null);
        this.getSaleProducts(null);
        this.getCategories(null);
        this.getPeriodTopSales("month");
        this.cart.length = 0;
        this.storage.ready().then(function () {
            _this.storage.get("userLoginInfo").then(function (userLoginInfo) {
                if (userLoginInfo != null) {
                    _this.loggedIn = true;
                    _this.user = userLoginInfo.user;
                    console.log(userLoginInfo);
                }
                else {
                    console.log("No user logged in");
                    _this.user = {};
                    _this.loggedIn = false;
                }
            });
        });
        events.subscribe('userLoginInfo', function (loggedin, user) {
            console.log("userLoginInfo:", user, ':', loggedin);
            _this.loggedIn = loggedin;
            if (user) {
                _this.user = user.user;
            }
            else {
                _this.user = null;
                _this.storage.remove('cart');
                _this.storage.remove("userLoginInfo").then(function () {
                    console.log("User logged Out...");
                    _this.user = {};
                });
            }
        });
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
        this.storage.get('cart').then(function (cart) {
            _this.cart = cart;
        });
        this.events.subscribe('cart', function (cart) { ngZone.run(function () { _this.cart = cart; }); });
    } // end of constructor
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('cart').then(function (cart) {
            _this.cart = cart;
        });
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (this.resetBackButton) {
            this.resetBackButton();
        }
        var timer = 2;
        var time = 0;
        //this.resetBackButton = this.platform.registerBackButtonAction(null);
        this.resetBackButton = this.platform.registerBackButtonAction(function () {
            time++;
            _this.presentToast();
            setInterval(function () {
                timer -= 1;
                if (!timer) {
                    return;
                }
            }, 1000);
            setTimeout(function () {
                timer = 2;
                time = 0;
            }, 2000);
            if (time >= 2 && timer < 2) {
                _this.platform.exitApp();
            }
        }, 10);
    };
    HomePage.prototype.ionViewWillLeave = function () {
        if (this.resetBackButton) {
            this.resetBackButton();
            this.resetBackButton = null;
        }
    };
    HomePage.prototype.getCategories = function (event) {
        var _this = this;
        this.WooCommerce.getAsync('products/categories?per_page=100').then(function (data) {
            console.log(data);
            var temp = JSON.parse(data.body);
            for (var i = 0; i < temp.length; i++) {
                if (temp[i].parent == 0) {
                    temp[i].subCategories = [];
                    _this.categories.push(temp[i]);
                }
            }
            //Groups Subcategories
            for (var i = 0; i < temp.length; i++) {
                for (var j = 0; j < _this.categories.length; j++) {
                    //console.log("Checking " + j + " " + i)
                    if (_this.categories[j].id == temp[i].parent) {
                        _this.categories[j].subCategories.push(temp[i]);
                    }
                }
            }
            console.log(_this.categories);
            console.log((temp));
        }, function (err) { console.log(err); });
    };
    HomePage.prototype.getSlider = function (event) {
        var _this = this;
        this.http.get(this.wp.productSlider)
            .subscribe(function (res) {
            _this.ngZone.run(function () {
                _this.slides = res.json();
            });
        });
        /*     if (event)
              event.complete(); */
    };
    HomePage.prototype.getPeriodTopSales = function (period) {
        var _this = this;
        this.wp.WooCommerce3.getAsync('reports/top_sellers?period=' + period).then(function (topSales) {
            console.log("TOPSALES|||||||||||||||||", topSales);
            console.log(topSales.body);
            console.log(JSON.parse(topSales.body));
            var tempTop = JSON.parse(topSales.body);
            tempTop.forEach(function (element) {
                _this.wp.WooCommerce.getAsync('products/' + element.product_id).then(function (product) {
                    console.log("SaleProduc as element is: ", product);
                    _this.topPeriodSaleProducts.push(JSON.parse(product.body));
                });
            });
            console.log("SaleProducts Ready to use", _this.topPeriodSaleProducts);
        });
    };
    HomePage.prototype.getFeaturedProducts = function (event) {
        var _this = this;
        //this.showSpinner();
        this.WooCommerce.getAsync("products?featured=true").then(function (data) {
            console.log((JSON.parse(data.body)));
            _this.ngZone.run(function () {
                _this.featuredProducts = (JSON.parse(data.body));
            });
            //this.hideSpinner();
            /*       if (event)
                    event.complete(); */
        }, function (err) {
            console.log(err);
            //this.hideSpinner();
        });
    };
    HomePage.prototype.getSaleProducts = function (event) {
        var _this = this;
        this.WooCommerce.getAsync("products?on_sale=true&in_stock=true").then(function (data) {
            console.log((JSON.parse(data.body)));
            _this.ngZone.run(function () {
                _this.saleProducts = (JSON.parse(data.body));
            });
            /*       if (event)
                    event.complete(); */
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.loadMoreProducts = function (event) {
        var _this = this;
        console.log(event);
        if (event == null) {
            this.page = 1;
            this.moreProducts = [];
        }
        else {
            this.page++;
        }
        this.WooCommerce.getAsync("products?page=" + this.page).then(function (data) {
            console.log(JSON.parse(data.body));
            _this.ngZone.run(function () {
                _this.moreProducts = (_this.moreProducts).concat(JSON.parse(data.body));
            });
            if (event != null) {
                event.complete();
            }
            if (JSON.parse(data.body).length < 10) {
                event.enable(false);
                _this.toastCtrl.create({
                    message: "پایان محصولات",
                    duration: 3000
                }).present();
            }
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.doRefresh = function (event) {
        this.slides = [];
        this.moreProducts = [];
        this.featuredProducts = [];
        this.saleProducts = [];
        this.categories = [];
        this.topPeriodSaleProducts = [];
        this.getSlider(event);
        this.loadMoreProducts(event);
        this.getFeaturedProducts(event);
        this.getSaleProducts(event);
        this.getCategories(null);
        this.getPeriodTopSales("month");
    }; //end doRefresh() function
    HomePage.prototype.openProductPage = function (product) {
        this.navCtrl.push('ProductDetails', { "product": product });
    };
    HomePage.prototype.onSearch = function (event) {
        if (this.searchQuery.length > 0) {
            this.navCtrl.push('SearchPage', { "searchQuery": this.searchQuery });
        }
    };
    HomePage.prototype.showSpinner = function () {
        this.spinner = this.loadingCtrl.create({
            spinner: "dots",
            showBackdrop: false
        });
        this.spinner.present();
    };
    HomePage.prototype.hideSpinner = function () {
        this.spinner.dismiss();
    };
    HomePage.prototype.openLink = function (url, external) {
        if (external === void 0) { external = false; }
        if (!url)
            return;
        console.log("Slide url is: ", url);
        if (url.indexOf("link://") == 0) {
            url = url.replace("link://", "");
            console.log(url);
            var data = url.split("/");
            console.log(data);
            if (data[0] == "product") {
                this.navCtrl.push(this.ProductDetails, { id: data[1] });
            }
            else if (data[0] == "product-category") {
                this.navCtrl.push(this.ProductsByCategory, { id: data[1] });
            }
            /*     else if (data[0] == "bookmark") this.navCtrl.push(this.FavoritePage);
                   else if (data[0] == "about-us") this.navCtrl.push(this.AboutPage);
                   else if (data[0] == "term-and-conditions") this.navCtrl.push(this.TermsPage);
                   else if (data[0] == "privacy-policy") this.navCtrl.push(this.PrivacyPage);
                   else if (data[0] == "contact-us") this.navCtrl.push(this.ContactPage);
            */
        }
        else if (!external) {
            this.InAppBrowser.create(url, "_blank", "location=no");
            console.log(url);
        }
    };
    HomePage.prototype.openQueryResult = function () {
        this.navCtrl.push('QueryResult', { 'query': 'products?on_sale=true&in_stock=true', 'pageTitle': 'حراج!' });
    };
    HomePage.prototype.openPage = function (page, fab) {
        fab.close();
        if (page != 'HomePage') {
            this.navCtrl.push(page);
        }
        else {
            this.navCtrl.popTo('HomePage');
        }
    };
    HomePage.prototype.logout = function (fab) {
        var _this = this;
        //fab.close();
        this.events.publish('userLoginInfo', false, null);
        this.storage.remove("userLoginInfo").then(function () {
            console.log("User logged Out...");
            _this.loggedIn = false;
            _this.user = {};
        });
        // removing cart:
        this.storage.remove("cart");
        alert("شما از حساب کاربری خود خارج شدید.");
    };
    HomePage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: "برای خروج دوباره بزنید",
            duration: 2000,
            cssClass: 'rtl',
        });
        toast.present();
    };
    HomePage.prototype.onSwipeContent = function (e) {
        if (e['deltaX'] < -150)
            this.navCtrl.push(this.ProductsByCategory);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\mmarket\src\pages\home\home.html"*/'<ion-header dir="rtl">\n  <ion-navbar mode="ios">\n\n    <button ion-button start menu-toggle="right" menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title style="text-align: center"  > <img no-padding src=\'https://mmarket.ir/MMarket-app-header.png\' cache="true" /> </ion-title>\n\n    <ion-searchbar *ngIf="isSearchbarOpened" [(ngModel)]="searchQuery" (search)="onSearch($event)" placeholder="جستجو"\n      showCancelButton="true" [animated]="true" (ionCancel)="isSearchbarOpened = false"></ion-searchbar>\n\n    <ion-buttons padding-left end *ngIf="!isSearchbarOpened">\n      <button ion-button icon-only (click)="isSearchbarOpened = true">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons padding-left end>\n      <button ion-button icon-only large [navPush]="cartPage">\n        <ion-icon style="padding-left: 17px;" name="cart" large color="danger" *ngIf="!cart || !cart.length " ></ion-icon>\n        <ion-icon style="padding-left: 17px;" name="cart" large color="danger" id="cart-btn" *ngIf="cart && cart.length " ></ion-icon>\n        <ion-badge id="cart-badge" *ngIf="cart && cart.length  " >{{cart.length}}</ion-badge>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="برای تازه سازی بکشید" refreshingSpinner="ios"></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-card text-center>\n    <ion-spinner *ngIf="!slides" name="ios"></ion-spinner>\n    <!-- Slider -->\n    <ion-slides loop="true" autoplay="2500" pager="true" dir="rtl" *ngIf="slides && slides.length>0" >\n      <ion-slide  *ngFor="let slide of slides" tappable (click)="openLink(slide.url)">\n    \n          <img [src]="slide.slider_images"  class="h-img" cache="true"/>\n      \n      </ion-slide>\n    </ion-slides>\n    \n  </ion-card>\n  \n    <div style="margin-top: 7px" *ngIf="featuredProducts && featuredProducts.length>0">\n      <div>\n        <ion-chip>\n          <ion-label color="danger">\n            * محصولات ویژه\n          </ion-label>\n        </ion-chip>\n        <ion-chip >\n          <ion-label color="green" [navPush]="QueryResult" [navParams]="{query: \'products?featured=true\', pageTitle: \'محصولات ویژه\'}">\n            دیدن همه\n          </ion-label>\n        </ion-chip>\n      </div>\n      <ion-spinner *ngIf="!featuredProducts || featuredProducts.length < 1" name="ios"></ion-spinner>\n  \n      <ion-scroll scrollX="true" direction="x">\n      <ion-col no-padding *ngFor="let featuredproduct of featuredProducts">\n        <ion-card  class="scroll-ion-card"   [navPush]="ProductDetails"\n          [navParams]="{product: featuredproduct}">\n            <img *ngIf="featuredproduct.images" [src]="featuredproduct.images[0].src" cache="true" />\n            <img *ngIf="!featuredproduct.images" src="assets/imgs/no-image.png" />\n            <div style="padding-right:3px">\n              <div *ngIf="featuredproduct.sale_price && featuredproduct.type!=\'variable\' && featuredproduct.type!=\'grouped\'">\n                <span dir="ltr" color="danger">{{(featuredproduct.sale_price/featuredproduct.regular_price*100)-100|number}}%</span>\n              </div>\n              <p text-wrap >\n                <b dark font-100 [innerHTML]="featuredproduct.price_html"></b>\n                <br>\n  \n                <span style="font-size: 11px" *ngIf="featuredproduct.name.length > 38 " [innerHTML]="featuredproduct.name.substr(0,38) + \'...\'"></span>\n                <span style="font-size: 11px" *ngIf="featuredproduct.name.length <= 38 " [innerHTML]="featuredproduct.name"></span>\n  \n              </p>\n            </div>\n          </ion-card>\n        </ion-col>\n      </ion-scroll>\n      \n    </div>\n  \n\n\n  <!-- محصولات حراجی -->\n  <div *ngIf="saleProducts && saleProducts.length > 0">\n    <div style="margin-top: 7px;">\n      <ion-chip style="margin-right:5px">\n        <ion-label color="danger">\n          محصولات حــراجی !\n        </ion-label>\n      </ion-chip>\n      <ion-chip style="margin-left:5px; background-color:lightblue">\n        <ion-label color="green" [navPush]="QueryResult" [navParams]="{query: \'products?on_sale=true&in_stock=true\', pageTitle: \'حراجـــی !\'}">\n          دیدن همه\n        </ion-label>\n      </ion-chip>\n    </div>\n    <ion-spinner *ngIf="!saleProducts || saleProducts.length < 1" name="ios"></ion-spinner>\n    <div>\n      <ion-scroll scrollX="true" relative >\n        <ion-col no-padding *ngFor="let saleproduct of saleProducts">\n            <ion-card class="scroll-ion-card"  [navPush]="ProductDetails"\n            [navParams]="{product: saleproduct}">\n              <img *ngIf="saleproduct.images" [src]="saleproduct.images[0].src" cache="true" />\n              <img *ngIf="!saleproduct.images" src="assets/imgs/no-image.png" />\n              <div style="padding-right: 10px" *ngIf="saleproduct.sale_price && saleproduct.type!=\'variable\' && saleproduct.type!=\'grouped\'">\n                <span dir="ltr" style="color: brown;">{{(saleproduct.sale_price/saleproduct.regular_price*100)-100|number}}%</span>\n              </div>\n              <div style="padding-right:5px; padding-left: 2px; height: 26vw;">\n                <p text-wrap>\n                  <b dark [innerHTML]="saleproduct.price_html"></b>\n                </p>\n                <p text-wrap>\n                  <span *ngIf="saleproduct.name.length > 35 " [innerHTML]="saleproduct.name.substr(0,35) + \'...\'"></span>\n                  <span *ngIf="saleproduct.name.length <= 35 " [innerHTML]="saleproduct.name"></span>\n                </p>\n              </div>\n            </ion-card>\n          </ion-col>\n      </ion-scroll>\n    </div>\n  </div>\n\n\n\n\n<!-- محصولات پرفروش -->\n<ion-spinner *ngIf="!topPeriodSaleProducts || topPeriodSaleProducts.length < 1" name="ios"></ion-spinner>\n<div *ngIf="topPeriodSaleProducts && topPeriodSaleProducts.length > 0">\n  <div style="margin-top: 7px;">\n    <ion-chip style="margin-right:5px">\n      <ion-label color="danger">\n        پرفروش ترین محصولات این ماه !\n      </ion-label>\n    </ion-chip>\n<!--     <ion-chip style="margin-left:5px; background-color:lightblue">\n      <ion-label color="green" [navPush]="QueryResult" [navParams]="{query: \'products?on_sale=true&in_stock=true\', pageTitle: \'حراجـــی !\'}">\n        دیدن همه\n      </ion-label>\n    </ion-chip> -->\n  </div>\n  <div>\n\n    <ion-scroll scrollX="true" relative >\n\n      <ion-col no-padding *ngFor="let saleproduct of topPeriodSaleProducts">\n          <ion-card class="scroll-ion-card"  [navPush]="ProductDetails"\n          [navParams]="{product: saleproduct}">\n            <img *ngIf="saleproduct.images" [src]="saleproduct.images[0].src" cache="true" />\n            <img *ngIf="!saleproduct.images" src="assets/imgs/no-image.png" />\n            <div style="padding-right: 10px" *ngIf="saleproduct.sale_price && saleproduct.type!=\'variable\' && saleproduct.type!=\'grouped\'">\n              <span dir="ltr" style="color: brown;">{{(saleproduct.sale_price/saleproduct.regular_price*100)-100|number}}%</span>\n            </div>\n            <div style="padding-right:5px; padding-left: 2px; height: 26vw;">\n              <p text-wrap>\n                <b dark [innerHTML]="saleproduct.price_html"></b>\n              </p>\n              <p text-wrap>\n                <span *ngIf="saleproduct.name.length > 35 " [innerHTML]="saleproduct.name.substr(0,35) + \'...\'"></span>\n                <span *ngIf="saleproduct.name.length <= 35 " [innerHTML]="saleproduct.name"></span>\n              </p>\n            </div>\n          </ion-card>\n        </ion-col>\n    </ion-scroll>\n  </div>\n</div>\n\n\n<!-- محصولات حدید -->\n<ion-spinner *ngIf="!moreProducts || moreProducts.length < 1" name="ios"></ion-spinner>\n<div *ngIf="moreProducts && moreProducts.length > 0">\n  <div style="margin-top: 7px;">\n    <ion-chip style="margin-right:5px">\n      <ion-label color="danger">\n        تازه ترین محصولات\n      </ion-label>\n    </ion-chip>\n    <ion-chip style="margin-left:5px; background-color:lightblue">\n      <ion-label color="green" [navPush]="QueryResult" [navParams]="{query: \'products?\', pageTitle: \'تازه ترین محصولات\'}">\n        دیدن همه\n      </ion-label>\n    </ion-chip>\n  </div>\n  <div>\n\n    <ion-scroll scrollX="true" relative >\n\n      <ion-col no-padding *ngFor="let latestproduct of moreProducts">\n          <ion-card class="scroll-ion-card"  [navPush]="ProductDetails"\n          [navParams]="{product: latestproduct}">\n            <img *ngIf="latestproduct.images" [src]="latestproduct.images[0].src" cache="true" />\n            <img *ngIf="!latestproduct.images" src="assets/imgs/no-image.png" />\n            <div style="padding-right: 10px" *ngIf="latestproduct.sale_price && latestproduct.type!=\'variable\' && latestproduct.type!=\'grouped\'">\n              <span dir="ltr" style="color: brown;">{{(latestproduct.sale_price/latestproduct.regular_price*100)-100|number}}%</span>\n            </div>\n            <div style="padding-right:5px; padding-left: 2px; height: 26vw;">\n              <p text-wrap>\n                <b dark [innerHTML]="latestproduct.price_html"></b>\n              </p>\n              <p text-wrap>\n                <span *ngIf="latestproduct.name.length > 35 " [innerHTML]="latestproduct.name.substr(0,35) + \'...\'"></span>\n                <span *ngIf="latestproduct.name.length <= 35 " [innerHTML]="latestproduct.name"></span>\n              </p>\n            </div>\n          </ion-card>\n        </ion-col>\n    </ion-scroll>\n  </div>\n</div>\n\n\n<!-- Categories -->\n<div  text-uppercase dark (swipe)="onSwipeContent($event)"><b>   دسته بندی ها: </b></div>\n\n<ion-spinner *ngIf="!categories" name="ios" margin-auto></ion-spinner>\n\n<ion-scroll  *ngIf="categories && 0<categories.length" scrollX="true" style="min-height:110px;">\n  \n  <div class="scroll-ion-card-cat" *ngFor="let cat of categories" >\n\n    <ion-card class="cat-ion-card" [navPush]="ProductsByCategory" [navParams]="{\'id\': cat.id}" >\n      \n      \n      <img class="cat-img-ion-card" *ngIf="cat.image && cat.image.src" [src]="cat.image.src" cache="true" />\n      <img class="cat-img-ion-card" *ngIf="!cat.image || !cat.image.src" src="assets/imgs/no-image.png" />\n      \n\n      <div text-wrap class="cat-card-title" >{{cat.name}}</div>\n      \n    </ion-card>\n</div>\n  \n</ion-scroll>\n<div text-center *ngIf="categories && categories.length<1" class="no-data">هیچ دسته بندی یافت نشد</div>\n\n\n\n\n  <!-- امور کاربری -->\n  <ion-fab bottom left #fab>\n    <button ion-fab color="danger" mini>\n      <ion-icon name="arrow-dropup"></ion-icon>\n    </button>\n    <ion-fab-list side="top">\n        <button (click)="platform.exitApp();" (click)="fab.close()" ion-fab>\n            <ion-icon name="log-out" color="danger" ></ion-icon>\n            <ion-label>خروج</ion-label>\n          </button>\n      <button *ngIf="!loggedIn" [navPush]="Signup" (click)="fab.close()" ion-fab>\n        <ion-icon name="md-clipboard" color="azure"></ion-icon>\n        <ion-label>ثبت نام</ion-label>\n      </button>\n      <button *ngIf="!loggedIn" [navPush]="Login" (click)="fab.close()" ion-fab>\n        <ion-icon name="log-in" color="navy" ></ion-icon>\n        <ion-label>ورود به حساب کاربری</ion-label>\n      </button>\n\n      <button [navPush]="cartPage" (click)="fab.close()" *ngIf="loggedIn" ion-fab>\n        <ion-icon name="cart" color="success"></ion-icon>\n        <ion-label>سبد خرید</ion-label>\n      </button>\n      <button [navPush]="MyordersPage" *ngIf="loggedIn" [navParams]="{\'userId\': user.id}" (click)="fab.close()" ion-fab>\n        <ion-icon name="logo-buffer" color="azure" ></ion-icon>\n        <ion-label>سفارشات من</ion-label>\n      </button>\n    </ion-fab-list>\n    <ion-fab-list side="right">\n\n    </ion-fab-list>\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\mmarket\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["u" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__providers_woo_commerce_woo_commerce__["a" /* WooCommerceProvider */], __WEBPACK_IMPORTED_MODULE_8_ionic_angular_util_events__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["t" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=3.js.map