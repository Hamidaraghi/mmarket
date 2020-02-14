webpackJsonp([5],{

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPagePageModule", function() { return SearchPagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search__ = __webpack_require__(936);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchPagePageModule = /** @class */ (function () {
    function SearchPagePageModule() {
    }
    SearchPagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_0__search__["a" /* SearchPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__search__["a" /* SearchPage */])],
        })
    ], SearchPagePageModule);
    return SearchPagePageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 936:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_woo_commerce_woo_commerce__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_loading_loading_controller__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network_interface__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, toastCtrl, navParams, loadingCtrl, ngZone, wp, storage, networkInterface) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.ngZone = ngZone;
        this.wp = wp;
        this.storage = storage;
        this.networkInterface = networkInterface;
        this.searchQuery = "";
        this.WooCommerce = {};
        this.products = [];
        this.page = 2;
        this.showEmptyResault = false;
        this.userId = 0;
        this.userIp = '';
        console.log(this.navParams.get("searchQuery"));
        this.searchQuery = this.navParams.get("searchQuery");
        this.WooCommerce = wp.WooCommerce;
        var promises = [];
        //get wifi ip
        promises.push(this.networkInterface.getWiFiIPAddress()
            .then(function (address) {
            console.info("WifiIP: " + address.ip + ", Subnet: " + address.subnet);
            _this.userIp += "WifiIp: " + address.ip + ", Subnet: " + address.subnet;
        })
            .catch(function (error) { return console.error("Unable to get IP: " + error); }));
        //get carrierIp
        promises.push(this.networkInterface.getCarrierIPAddress()
            .then(function (address) {
            console.info("CarrierIP: " + address.ip + ", Subnet: " + address.subnet);
            _this.userIp += "CarrierIP: " + address.ip + ", Subnet: " + address.subnet;
        })
            .catch(function (error) { return console.error("Unable to get IP: " + error); }));
        promises.push(this.storage.get("userLoginInfo").then(function (userLoginInfo) {
            if (userLoginInfo != null) {
                _this.userId = userLoginInfo.user.id;
            }
            else {
                console.log("No user logged in");
                _this.userId = 0;
            }
        }));
        Promise.all(promises).then(function () {
            var saveSearchData = { search_term: _this.searchQuery, user_id: _this.userId, ip: _this.userIp };
            _this.wp.WooCommerce3.postAsync('sep/v1/search-stats', saveSearchData).then(function (data) {
                console.log('MMMMMMMMMMM', data.body);
                var res = (JSON.parse(data.body));
                console.log('SSSSSSSSEEEEEEEEEEEEEERRRRRRRRR', res);
            });
        });
        this.WooCommerce.getAsync("products?search=" + this.searchQuery).then((function (searchdata) {
            _this.ngZone.run(function () {
                _this.products = JSON.parse(searchdata.body);
            });
            if (_this.products.length == 0 || _this.products.length == null) {
                _this.ngZone.run(function () {
                    _this.showEmptyResault = true;
                });
            }
        }), function (error) {
            console.log(error);
        }); // end of this.WooCommerce.getAsync
    } // end of constructor
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage.prototype.loadMoreProducts = function (event) {
        var _this = this;
        this.WooCommerce.getAsync("products?search=" + this.searchQuery + "&page=" + this.page).then(function (searchData) {
            _this.ngZone.run(function () {
                _this.products = _this.products.concat(JSON.parse(searchData.body));
            });
            if (JSON.parse(searchData.body).length < 10) {
                event.enable(false);
                _this.toastCtrl.create({
                    message: "پایان ...",
                    duration: 5000
                }).present();
            }
            event.complete();
            _this.page++;
        });
    };
    SearchPage.prototype.openProductPage = function (product) {
        this.navCtrl.push('ProductDetails', { "product": product });
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"C:\mmarket\src\pages\search\search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>جستجو: "{{searchQuery}}" </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-spinner name="ios" *ngIf="products.length ==0 && !showEmptyResault" ></ion-spinner>\n  <ion-list>\n    <ion-item *ngFor="let product of products" text-wrap  (click)="openProductPage(product)">\n      <ion-thumbnail item-left>\n        <img [src]="product.images[0].src" />\n      </ion-thumbnail>\n      <h2> {{ product.name }} </h2>\n      <p>\n        <span [innerHTML]="product.short_description.substr(0, 50) + \'...\'"></span>\n        <span [innerHTML]="product.price_html"></span>\n        <span *ngIf="product.average_rating >= 1">\n          <ion-icon style="color: #d4af37" small name="star"></ion-icon>\n        </span>\n        <span *ngIf="product.average_rating >= 2">\n          <ion-icon style="color: #d4af37" small name="star"></ion-icon>\n        </span>\n        <span *ngIf="product.average_rating >= 3">\n          <ion-icon style="color: #d4af37" small name="star"></ion-icon>\n        </span>\n        <span *ngIf="product.average_rating >= 4">\n          <ion-icon style="color: #d4af37" small name="star"></ion-icon>\n        </span>\n        <span *ngIf="product.average_rating >= 5">\n          <ion-icon style="color: #d4af37" small name="star"></ion-icon>\n        </span>        \n      </p>\n      <ion-chip *ngIf="!product.in_stock"  >\n        <ion-icon name="close" color="gray"></ion-icon>\n        <span style="padding-left:5px; padding-right: 5px">\n          ناموجود\n      </span>\n      </ion-chip>\n      <ion-chip *ngIf="product.featured" color="danger" >\n        <ion-icon name="checkmark" ></ion-icon>  \n        <span style="padding-left:5px; padding-right: 5px">\n            پیشنهاد ویژه\n        </span>\n        </ion-chip>\n\n      <button ion-button icon clear item-right>\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-list>\n   <ion-infinite-scroll (ionInfinite)="loadMoreProducts($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <h1 *ngIf="showEmptyResault">جستجوی شما نتیجه ای در بر نداشت</h1>\n</ion-content>'/*ion-inline-end:"C:\mmarket\src\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["u" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_0__providers_woo_commerce_woo_commerce__["a" /* WooCommerceProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_network_interface__["a" /* NetworkInterface */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=5.js.map