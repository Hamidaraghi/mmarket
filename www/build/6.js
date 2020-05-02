webpackJsonp([6],{

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryResultPageModule", function() { return QueryResultPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__query_result__ = __webpack_require__(935);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QueryResultPageModule = /** @class */ (function () {
    function QueryResultPageModule() {
    }
    QueryResultPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__query_result__["a" /* QueryResult */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__query_result__["a" /* QueryResult */]),
            ],
        })
    ], QueryResultPageModule);
    return QueryResultPageModule;
}());

//# sourceMappingURL=query-result.module.js.map

/***/ }),

/***/ 935:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryResult; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_woo_commerce_woo_commerce__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_loading_loading_controller__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QueryResult = /** @class */ (function () {
    function QueryResult(navCtrl, navParams, loadingCtrl, toastCtrl, ngZone, wp) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.ngZone = ngZone;
        this.wp = wp;
        this.page = 2;
        this.showEmptyResault = false;
        this.query = this.navParams.get('query');
        this.pageTitle = this.navParams.get('pageTitle');
        this.queryResultArray = [];
        this.ProductDetails = 'ProductDetails';
        console.log('query:', this.query);
        //this.showSpinner();
        this.WooCommerce = wp.WooCommerce;
        this.WooCommerce.getAsync(this.query).then(function (res) {
            console.log(JSON.parse(res.body));
            _this.ngZone.run(function () {
                _this.queryResultArray = (JSON.parse(res.body));
            });
            console.log('query result is:', _this.query + ": " + _this.queryResultArray);
            if (_this.queryResultArray == null || _this.queryResultArray.length < 1) {
                _this.showEmptyResault = true;
            }
            //this.hideSpinner();
        }, function (error) { console.log(error); });
    }
    QueryResult.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QueryResultPage');
    };
    QueryResult.prototype.showSpinner = function () {
        this.spinner = this.loadingCtrl.create({
            spinner: "dots",
            showBackdrop: false
        });
        this.spinner.present();
    };
    QueryResult.prototype.hideSpinner = function () {
        this.spinner.dismiss();
    };
    QueryResult.prototype.loadMoreProducts = function (event) {
        var _this = this;
        this.WooCommerce.getAsync(this.query + "&page=" + this.page).then(function (searchData) {
            _this.ngZone.run(function () {
                _this.queryResultArray = _this.queryResultArray.concat(JSON.parse(searchData.body));
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
    }; // end loadMoreProducts
    QueryResult = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-query-result',template:/*ion-inline-start:"D:\test-mmarket\src\pages\query-result\query-result.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title [(innerHtml)]=\'pageTitle\' ></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content dir="rtl">\n  <ion-spinner name="ios" *ngIf="queryResultArray.length == 0"></ion-spinner>\n    <ion-list>\n        <ion-item *ngFor="let product of queryResultArray"  [navPush]=\'ProductDetails\' [navParams]="{\'product\': product}" >\n          <ion-thumbnail item-left>\n            <img [src]="product.images[0].src" />\n          </ion-thumbnail>\n    \n          <h2>  {{product.name}}  </h2>\n          <!--  -->\n          <p>\n            \n            <span [innerHTML]="product.short_description.substr(0,50) + \'...\'"></span>\n            <span [innerHTML]="product.price_html"></span>\n            \n            <p>\n            <span *ngIf="product.average_rating >= 1">\n              <ion-icon style="color: #d4af37" small name="star"></ion-icon>\n            </span>\n            <span *ngIf="product.average_rating >= 2">\n              <ion-icon style="color: #d4af37" small name="star"></ion-icon>\n            </span>\n            <span *ngIf="product.average_rating >= 3">\n              <ion-icon style="color: #d4af37" small name="star"></ion-icon>\n            </span>\n            <span *ngIf="product.average_rating >= 4">\n              <ion-icon style="color: #d4af37" small name="star"></ion-icon>\n            </span>\n            <span *ngIf="product.average_rating >= 5">\n              <ion-icon style="color: #d4af37" small name="star"></ion-icon>\n            </span>        \n            </p>      \n\n              <ion-chip *ngIf="!product.in_stock"  >\n                <ion-icon name="close" color="gray"></ion-icon>\n                <span style="padding-left:5px; padding-right: 5px">\n                  ناموجود\n              </span>\n              </ion-chip>\n              <ion-chip *ngIf="product.featured" color="danger" >\n                <ion-icon name="checkmark" ></ion-icon>  \n                <span style="padding-left:5px; padding-right: 5px">\n                    پیشنهاد ویژه\n                </span>\n                </ion-chip>\n    \n          <button ion-button icon clear item-right>\n            <ion-icon name="arrow-forward"></ion-icon>\n          </button>\n        </ion-item>\n      </ion-list>\n       <ion-infinite-scroll (ionInfinite)="loadMoreProducts($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    \n      <h1 *ngIf="showEmptyResault">جستجوی شما نتیجه ای در بر نداشت</h1>\n</ion-content>\n'/*ion-inline-end:"D:\test-mmarket\src\pages\query-result\query-result.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["u" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_0__providers_woo_commerce_woo_commerce__["a" /* WooCommerceProvider */]])
    ], QueryResult);
    return QueryResult;
}());

//# sourceMappingURL=query-result.js.map

/***/ })

});
//# sourceMappingURL=6.js.map