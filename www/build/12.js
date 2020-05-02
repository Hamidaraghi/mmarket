webpackJsonp([12],{

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(927);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* Menu */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* Menu */])],
        })
    ], MenuPageModule);
    return MenuPageModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Menu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_in_app_browser__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_cart__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_woo_commerce_woo_commerce__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_version__ = __webpack_require__(402);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Menu = /** @class */ (function () {
    function Menu(events, navCtrl, navParams, storage, modalController, WP, InAppBrowser, ngZone, appVersion, alertCtrl) {
        var _this = this;
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.modalController = modalController;
        this.WP = WP;
        this.InAppBrowser = InAppBrowser;
        this.ngZone = ngZone;
        this.appVersion = appVersion;
        this.alertCtrl = alertCtrl;
        this.showLevel1 = null;
        this.showSubmenu = false;
        this.categories = [];
        this.user = {};
        this.PasswordresetPage = 'PasswordresetPage';
        this.appVersion.getVersionCode().then(function (data) {
            console.log('**8888888888**', data);
            _this.versionCheck(data);
        });
        /*     console.log('app name',this.appVersion.getAppName());
            console.log('app Package Name',this.appVersion.getPackageName());
            console.log('app Version Code',this.appVersion.getVersionCode());
            console.log('app Version Number',this.appVersion.getVersionNumber()); */
        this.user = {};
        this.homePage = 'HomePage';
        this.categories = [];
        this.WooCommerce = WP.init();
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
        this.events.subscribe('userLoginInfo', function (loggedin, user) {
            console.log("userLoginInfo:", user, ':', loggedin);
            _this.loggedIn = loggedin;
            if (user) {
                ngZone.run(function () {
                    _this.user = user.user;
                });
            }
            else {
                _this.user = null;
                ngZone.run(function () {
                    _this.loggedIn = false;
                });
            }
        });
    } //end of constructor
    Menu.prototype.openCategoryPage = function (categoryId) {
        this.childNavCtrl.push('ProductsByCategory', { "id": categoryId });
    };
    Menu.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get("userLoginInfo").then(function (userLoginInfo) {
                if (userLoginInfo != null) {
                    console.log("A user already logged in...");
                    _this.user = userLoginInfo.user;
                    console.log(userLoginInfo);
                    _this.loggedIn = true;
                }
                else {
                    console.log("No user logged in");
                    _this.user = {};
                    _this.loggedIn = false;
                }
            });
        });
    };
    Menu.prototype.openPage = function (pageName) {
        var _this = this;
        if (pageName == "signup") {
            this.childNavCtrl.push('Signup');
        }
        if (pageName == "login") {
            this.childNavCtrl.push('Login');
        }
        if (pageName == "cart") {
            this.childNavCtrl.push(__WEBPACK_IMPORTED_MODULE_1__cart_cart__["a" /* Cart */]);
        }
        if (pageName == "myorders") {
            this.childNavCtrl.push('MyordersPage', { "userId": this.user.id });
        }
        if (pageName == "MyaccountPage") {
            this.childNavCtrl.push('MyaccountPage', { "user": this.user });
        }
        if (pageName == "logout") {
            this.events.publish('userLoginInfo', false, null);
            this.storage.remove('cart');
            this.storage.remove("userLoginInfo").then(function () {
                console.log("User logged Out...");
                _this.loggedIn = false;
                _this.user = {};
            });
        }
    };
    Menu.prototype.openLink = function (url, external) {
        if (external === void 0) { external = false; }
        if (!url)
            return;
        if (url.indexOf("link://") == 0) {
            url = url.replace("link://", "");
            console.log(url);
            var data = url.split("/");
            console.log(data);
            /* if (data[0] == "product") { this.navCtrl.push(this.ProductDetails, { id: data[1] }) }
                    else if (data[0] == "product-category") this.navCtrl.push(this.ProductsByCategory, { id: data[1] });
                    else if (data[0] == "bookmark") this.navCtrl.push(this.FavoritePage);
                    else if (data[0] == "about-us") this.navCtrl.push(this.AboutPage);
                    else if (data[0] == "term-and-conditions") this.navCtrl.push(this.TermsPage);
                    else if (data[0] == "privacy-policy") this.navCtrl.push(this.PrivacyPage);
                    else if (data[0] == "contact-us") this.navCtrl.push(this.ContactPage);
             */
        }
        else if (!external) {
            this.InAppBrowser.create(url, "_blank", "location=yes");
            console.log(url);
        }
    };
    Menu.prototype.menuItemHandler = function () {
        this.showSubmenu = !this.showSubmenu;
    };
    Menu.prototype.toggleLevel1 = function (idx) {
        if (this.isLevel1Shown(idx)) {
            this.showLevel1 = null;
        }
        else {
            this.showLevel1 = idx;
        }
    };
    ;
    Menu.prototype.isLevel1Shown = function (idx) {
        return this.showLevel1 === idx;
    };
    ;
    Menu.prototype.versionCheck = function (version) {
        var _this = this;
        this.WP.WooCommerce3.getAsync('sep/v1/version-check?version=' + version).then(function (data) {
            console.log('^^^^^^^^^', data.body);
            var versionData = JSON.parse(data.body);
            if (!versionData.up_to_date) {
                _this.alertCtrl.create({
                    message: versionData.decsription,
                    title: 'بروزرسانی',
                    buttons: [{
                            text: "بروزرسانی",
                            handler: function () {
                                _this.InAppBrowser.create(versionData.download_url, "_system", "location=yes");
                            }
                        }, {
                            text: 'خب',
                            handler: function () {
                                console.log('روی دکمه خب کلیک شد');
                            }
                        }],
                    cssClass: 'rtl'
                }).present();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_8" /* ViewChild */])("content"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* NavController */])
    ], Menu.prototype, "childNavCtrl", void 0);
    Menu = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"D:\test-mmarket\src\pages\menu\menu.html"*/'<ion-menu [content]="content" >\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>ناوبری</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="card-background-page">\n    <ion-card>\n      <img style="background-color:rgba(240, 8, 182, 0.315)" src="https://mmarket.ir/menuimage.png" />\n      <!-- <div class="card-title">MMarket</div>\n      <div class="card-subtitle">www.mmarket.ir</div> -->\n    </ion-card>\n    <ion-list no-lines>\n      <div *ngFor="let cat of categories; let i=index" [ngClass]="{active: isLevel1Shown(\'idx\'+i)}" text-wrap\n        detail-push>\n        <ion-item>\n          <ion-img *ngIf="cat.image" (click)="openCategoryPage(cat.id)" menuClose style="width: 50px; height: 50px;" [src]="cat.image.src"\n            item-left></ion-img>\n            <ion-img *ngIf="!cat.image" (click)="openCategoryPage(cat.id)" menuClose style="width: 50px; height: 50px;" src="assets/imgs/no-image.png"    item-left></ion-img>\n          <h2 (click)="openCategoryPage(cat.id)" menuClose>\n            {{cat.name}}\n          </h2>\n          <ion-icon color="success" no-padding large (click)="toggleLevel1(\'idx\'+i)" item-right [name]="isLevel1Shown(\'idx\'+i) ? \'arrow-dropdown\' : \'arrow-dropright\'"\n            style="align-content: top; align-items: top; align-self: top; box-align: top"></ion-icon>\n        </ion-item>\n\n        <div *ngIf="isLevel1Shown(\'idx\'+i)">\n          <ion-item *ngFor="let sub of cat.subCategories;" text-wrap (click)="openCategoryPage(sub.id)" color="gray"\n            menuClose style="padding-right:80px">\n            <h4>\n              {{sub.name}}\n            </h4>\n          </ion-item>\n        </div>\n      </div>\n\n      <ion-item-divider color="danger">حساب کاربری</ion-item-divider>\n      <!-- امور کاربری -->\n      <!-- کاربری که وارد نشده -->\n      <ion-item *ngIf="!loggedIn" (click)="openPage(\'signup\')" menuClose>\n        <ion-icon name="md-clipboard" item-left large>\n        </ion-icon>\n        <h2>ثبت نام</h2>\n        <p>برای یک حساب کاربری جدید</p>\n      </ion-item>\n      <ion-item *ngIf="!loggedIn" (click)="openPage(\'login\')" menuClose>\n        <ion-icon name="log-in" item-left large>\n        </ion-icon>\n        <h2>ورود</h2>\n        <p>وارد حساب کاربری خود شوید</p>\n      </ion-item>\n\n      <!-- اگر کاربر وارد شده باشد -->\n      <ion-item *ngIf="loggedIn"  (click)="openPage(\'MyaccountPage\')" menuClose >\n        <ion-icon name="contact" item-left large></ion-icon>\n        <h2>{{this.user.firstname?this.user.firstname:this.user.username||""}} </h2>\n        <p> خوش آمدی؛ ویرایش اطلاعات کاربری</p>\n      </ion-item>\n\n      <ion-item *ngIf="loggedIn" (click)="openPage(\'cart\')" menuClose>\n        <ion-icon name="cart" item-left large></ion-icon>\n        <h2>سبد خرید </h2>\n        <p>مشاهده اقلام</p>\n      </ion-item>\n\n      <ion-item *ngIf="loggedIn" (click)="openPage(\'myorders\')" menuClose>\n        <ion-icon name="logo-buffer" item-left large></ion-icon>\n        <h2>سفارش های من</h2>\n        <p>مشاهده سفارشات</p>\n      </ion-item>\n\n\n      <ion-item  (click)="openLink(\'https://mmarket.ir/contactus/\')" menuClose>\n        <ion-icon name="call" item-left></ion-icon>\n        <h2>ارتباط با ما</h2>\n        <p> بیان دیدگاه ها، انتقادات و پیشنهاد ها</p>\n      </ion-item>\n\n      <ion-item  (click)="openLink(\'https://mmarket.ir/rules/\')" menuClose>\n        <ion-icon name="git-pull-request" item-left></ion-icon>\n        <h2>قوانین و مقررات</h2>\n        <p>قوانین آیین نامه ها و خط مشی ام مارکت</p>\n      </ion-item>\n\n\n      <ion-item *ngIf="loggedIn" (click)="openPage(\'logout\')">\n        <ion-icon name="log-out" item-left></ion-icon>\n        <h2>خروج </h2>\n        <p> از حساب کاربری</p>\n      </ion-item>\n\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n<ion-nav #content [root]="homePage"></ion-nav>'/*ion-inline-end:"D:\test-mmarket\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* Events */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__providers_woo_commerce_woo_commerce__["a" /* WooCommerceProvider */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_version__["a" /* AppVersion */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */]])
    ], Menu);
    return Menu;
}());

//# sourceMappingURL=menu.js.map

/***/ })

});
//# sourceMappingURL=12.js.map