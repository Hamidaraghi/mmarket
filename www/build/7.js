webpackJsonp([7],{

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsByCategoryPageModule", function() { return ProductsByCategoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__products_by_category__ = __webpack_require__(934);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductsByCategoryPageModule = /** @class */ (function () {
    function ProductsByCategoryPageModule() {
    }
    ProductsByCategoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_0__products_by_category__["a" /* ProductsByCategory */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__products_by_category__["a" /* ProductsByCategory */])],
        })
    ], ProductsByCategoryPageModule);
    return ProductsByCategoryPageModule;
}());

//# sourceMappingURL=products-by-category.module.js.map

/***/ }),

/***/ 934:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsByCategory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_woo_commerce_woo_commerce__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsByCategory = /** @class */ (function () {
    function ProductsByCategory(navCtrl, navParams, ngZone, toastCtrl, wp) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ngZone = ngZone;
        this.toastCtrl = toastCtrl;
        this.wp = wp;
        this.category = {};
        this.page = 1;
        this.id = this.navParams.get("id");
        console.log(this.id);
        this.WooCommerce = wp.WooCommerce;
        this.WooCommerce.getAsync('products/categories/' + this.id).then(function (data) {
            console.log((data.body));
            ngZone.run(function () {
                _this.category = JSON.parse(data.body);
            });
        });
        this.WooCommerce.getAsync('products?category=' + this.id + '&status=publish').then(function (data) {
            console.log(data);
            console.log(JSON.parse(data.body));
            _this.ngZone.run(function () {
                _this.products = JSON.parse(data.body);
            });
        }, function (err) {
            console.log(err);
        });
    } // end of constructor
    ProductsByCategory.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductsByCategory');
    };
    ProductsByCategory.prototype.loadMoreProducts = function (event) {
        var _this = this;
        console.log(event);
        this.page++;
        this.WooCommerce.getAsync('products?category=' + this.id + '&status=publish&page=' + this.page).then(function (data) {
            var temp = (JSON.parse(data.body));
            console.log('Temp: ', temp);
            _this.ngZone.run(function () {
                _this.products = (_this.products).concat(temp);
            });
            console.log(_this.products);
            event.complete();
            if (temp.length < 10 || temp == null) {
                _this.ngZone.run(function () {
                    event.enable(false);
                });
                _this.toastCtrl.create({
                    message: "پایان محصولات",
                    duration: 2000
                }).present();
            }
        }, function (err) {
            console.log(err);
        });
    };
    ProductsByCategory.prototype.openProductPage = function (product) {
        this.navCtrl.push('ProductDetails', { "product": product });
    };
    ProductsByCategory = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-products-by-category',template:/*ion-inline-start:"D:\test-mmarket\src\pages\products-by-category\products-by-category.html"*/'<ion-header>\n  <ion-navbar>\n\n      <button color="danger" start ion-button icon  menuToggle>\n        <ion-icon name="menu" ></ion-icon>\n      </button>\n    \n    <ion-title > {{category.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content >\n    <ion-list>\n        <ion-spinner margin-auto margin-top *ngIf="!products" name="ios"></ion-spinner>\n        <ion-item *ngFor="let product of products" text-wrap (click)="openProductPage(product)">\n          <ion-thumbnail item-left>\n            <img *ngIf="product.images" src="{{product.images[0].src}}" />\n          </ion-thumbnail>\n          <h2>{{product.name}}</h2>\n        <p>\n          <span [innerHTML]="product.short_description.substr(0,50) + \'...\'"></span>\n          <span [innerHTML]="product.price_html"></span>\n        </p>\n\n        <!-- stars -->\n        <p>\n        <span *ngIf="product.average_rating >= 1">\n          <ion-icon style="color: #d4af37" small name="star"></ion-icon>\n        </span>\n        <span *ngIf="product.average_rating >= 2">\n          <ion-icon style="color: #d4af37" small name="star"></ion-icon>\n        </span>\n        <span *ngIf="product.average_rating >= 3">\n          <ion-icon style="color: #d4af37" small name="star"></ion-icon>\n        </span>\n        <span *ngIf="product.average_rating >= 4">\n          <ion-icon style="color: #d4af37" small name="star"></ion-icon>\n        </span>\n        <span *ngIf="product.average_rating >= 5">\n          <ion-icon style="color: #d4af37" small name="star"></ion-icon>\n        </span>        \n        </p>     \n\n          <ion-chip *ngIf="!product.in_stock"  >\n            <ion-icon name="close" color="gray"></ion-icon>\n            <span style="padding-left:5px; padding-right: 5px">\n              ناموجود\n          </span>\n          </ion-chip>\n          <ion-chip *ngIf="product.featured" color="danger" >\n            <ion-icon name="checkmark" ></ion-icon>  \n            <span style="padding-left:5px; padding-right: 5px">\n                پیشنهاد ویژه\n            </span>\n            </ion-chip>\n\n\n        <button ion-button item-right icon clear>\n          <ion-icon name="arrow-forward"></ion-icon>\n        </button>\n        </ion-item>\n      </ion-list>\n  <ion-infinite-scroll (ionInfinite)="loadMoreProducts($event)">\n    <ion-infinite-scroll-content ></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"D:\test-mmarket\src\pages\products-by-category\products-by-category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_woo_commerce_woo_commerce__["a" /* WooCommerceProvider */]])
    ], ProductsByCategory);
    return ProductsByCategory;
}());

//# sourceMappingURL=products-by-category.js.map

/***/ })

});
//# sourceMappingURL=7.js.map