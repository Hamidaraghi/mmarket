webpackJsonp([15],{

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WooCommerceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_woocommerce_api__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_woocommerce_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/*
  Generated class for the WooCommerceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var WooCommerceProvider = /** @class */ (function () {
    function WooCommerceProvider(storage, http) {
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/x-www-form-urlencoded');
        // headers.append('Accept', 'application/json');
        // headers.append('Authorization', 'Basic ' + token);
        var _this = this;
        this.storage = storage;
        this.http = http;
        this.uapRestUrlV1 = "https://mmarket.ir/wp-json/ultimate-affiliates-pro/v1";
        this.uapRestUser = "affiliate";
        this.uapRestPassword = "YpBUadO@r#CdD(r^&dha54j1";
        this.TerminalId = 0;
        this.sepCallBackUrl = '';
        this.sepUrl = '';
        this.sepMerchantPassword = 0;
        this.productSlider = "https://mmarket.ir/wp-json/wooslider/product/getslider";
        // let options = new RequestOptions({ headers: headers });
        // this.http.get("url", options)
        //   .map(response => response)
        this.WooCommerce = __WEBPACK_IMPORTED_MODULE_2_woocommerce_api__({
            url: "https://mmarket.ir",
            consumerKey: "ck_bd53f75be04d6545552260c09a78c3e4ccad6afa",
            consumerSecret: "cs_b92b582450149a070d4bd7c7aefc4bcde2ff47c7",
            // consumerKey: "ck_ee78b1f4c5db7f296b06ba1758e19b6296578002",
            // consumerSecret: "cs_9677bda22e2d56c70d49ea6b87a188e2f27afa71",
            wpAPI: true,
            version: 'wc/v2',
        });
        this.WooCommerce3 = __WEBPACK_IMPORTED_MODULE_2_woocommerce_api__({
            url: "https://mmarket.ir",
            consumerKey: "ck_bd53f75be04d6545552260c09a78c3e4ccad6afa",
            consumerSecret: "cs_b92b582450149a070d4bd7c7aefc4bcde2ff47c7",
            // consumerKey: "ck_ee78b1f4c5db7f296b06ba1758e19b6296578002",
            // consumerSecret: "cs_9677bda22e2d56c70d49ea6b87a188e2f27afa71",
            wpAPI: true,
            version: 'wc/v3',
        });
        this.WooCommerce3.getAsync("sep/v1/get-sep-vars").then(function (data) {
            data = JSON.parse(data.body);
            console.log("DDDDDDDDDDDDDDDD", data.sepUrl);
            _this.TerminalId = data.TerminalId;
            _this.sepCallBackUrl = data.sepCallBackUrl;
            _this.sepUrl = data.sepUrl;
            _this.sepMerchantPassword = data.sepMerchantPassword;
        });
    }
    WooCommerceProvider.prototype.getUser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("userLoginInfo").then(function (user) {
                resolve(user);
            }, function (error) { reject(error); console.log("Get User info failed from storage"); });
        });
    }; // End Get user()
    WooCommerceProvider.prototype.setUser = function (userLoginInfo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.set("userLoginInfo", userLoginInfo);
        });
    };
    WooCommerceProvider.prototype.init = function () {
        return this.WooCommerce;
    };
    WooCommerceProvider.prototype.getSepUrl = function () {
        return this.sepUrl;
    };
    WooCommerceProvider.prototype.getAffiliateRankDetails = function (affiliateId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
                        headers.append('authorization', 'Basic ' + btoa(_this.uapRestUser + ':' + _this.uapRestPassword));
                        _this.http.get(_this.uapRestUrlV1 + "/get-affiliate-rank-details/" + affiliateId, { headers: headers })
                            .map(function (res) { return res.json(); }).subscribe(function (data) {
                            console.log("GET AFFILIATE RANK DETAILS:::::::========:::::::::", ((JSON.parse(data))));
                            resolve(JSON.parse(data));
                            JSON.parse(data);
                        });
                    })];
            });
        });
    };
    WooCommerceProvider.prototype.addReferral = function (addReferralData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //search if affiliateId is exist or not
            // let addReferralData = { "refferal_wp_uid": referralWpUid , "campaign": "", "affiliate_id": this.affiliateId, "visit_id": "", "description": "register user via app",
            // "source": "اپلیکیشن", "reference": "q", "reference_details": "app-register", "parent_referral_id": "", "child_referral_id": "",
            // "amount": "", "currency": "IRT", "status": 1, "payment": 0 }
            if (!addReferralData.affiliate_id) {
                console.log("there is no affiliate!");
                reject("no affiliate id is provided");
            }
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append('authorization', 'Basic ' + btoa(_this.uapRestUser + ':' + _this.uapRestPassword));
            _this.http.put(_this.uapRestUrlV1 + "/add-referral", addReferralData, { headers: headers })
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log("add-referral:::::::========:::::::::", ((JSON.parse(data))));
                resolve(JSON.parse(data));
            });
        });
    };
    // get affiliate of woocommerce customer
    WooCommerceProvider.prototype.getUserReferrer = function (userId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.WooCommerce3.postAsync("sep/v1/get-referrer-id?", { "referral_wp_uid": userId }).then(function (data) {
                console.log('REFERRER ID IS:::::::::::::::::::::', data.body);
                resolve(data.body);
            }, function (error) { console.log(error); reject(error); });
        });
    };
    WooCommerceProvider.prototype.addAffiliateRelation = function (affiliateId, referralWpUid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //add relation between this new user and its affiliate
            var insertAffiliateReferralUserNewRelationData = ({ "affiliate_id": affiliateId, "referral_wp_id": referralWpUid });
            _this.WooCommerce3.postAsync('sep/v1/insert-affiliate-referral-user-new-relation', insertAffiliateReferralUserNewRelationData).then(function (relation) {
                console.log("RELATION IS: $$$$$$$$$$$$$$$$$$$$", relation);
                resolve(relation);
            }, function (error) { console.log(error); reject(error); });
        });
    };
    WooCommerceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], WooCommerceProvider);
    return WooCommerceProvider;
}());

//# sourceMappingURL=woo-commerce.js.map

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 230;

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/checkout/checkout.module": [
		774,
		4
	],
	"../pages/example/example.module": [
		775,
		14
	],
	"../pages/home/home.module": [
		776,
		3
	],
	"../pages/login/login.module": [
		777,
		13
	],
	"../pages/menu/menu.module": [
		778,
		12
	],
	"../pages/myaccount/myaccount.module": [
		779,
		11
	],
	"../pages/myorders/myorders.module": [
		780,
		1
	],
	"../pages/order-details/order-details.module": [
		781,
		0
	],
	"../pages/order-summary/order-summary.module": [
		782,
		10
	],
	"../pages/passwordreset/passwordreset.module": [
		783,
		9
	],
	"../pages/product-details/product-details.module": [
		784,
		8
	],
	"../pages/products-by-category/products-by-category.module": [
		785,
		7
	],
	"../pages/query-result/query-result.module": [
		786,
		6
	],
	"../pages/search/search.module": [
		787,
		5
	],
	"../pages/signup/signup.module": [
		788,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 273;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_woo_commerce_woo_commerce__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_loading_loading_controller__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Cart = /** @class */ (function () {
    function Cart(navCtrl, navParams, storage, events, viewCtrl, toastCtrl, loadingCtrl, wp) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.events = events;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.wp = wp;
        this.cartItems = [];
        this.total = 0;
        this.showEmptyCartMessage = false;
        this.WooCommerce = {};
        this.total = 0.0;
        this.WooCommerce = wp.WooCommerce;
        storage.ready().then(function () {
            _this.storage.get("cart").then(function (data) {
                _this.cartItems = data;
                console.log(_this.cartItems);
                if (_this.cartItems != null && _this.cartItems.length > 0) {
                    _this.cartItems.forEach(function (item, index) {
                        _this.total = _this.total + (item.product.price * item.qty);
                    });
                }
                else {
                    _this.showEmptyCartMessage = true;
                }
            });
        }); //end of storage.ready().then()
    } // end of costructor
    Cart.prototype.updateCart = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var altered = false;
            _this.showSpinner();
            _this.storage.ready().then(function () {
                _this.total = 0;
                console.log(_this.total);
                _this.storage.get("cart").then(function (cartData) {
                    if (cartData != null && cartData.length > 0) {
                        var promises = [];
                        var _loop_1 = function (i) {
                            console.log('i in Line 76', i);
                            console.log('item', cartData[i]);
                            //updating cartItems products from live site
                            promise = _this.WooCommerce.getAsync('products/' + cartData[i].product.id).then(function (productData) {
                                console.log(productData);
                                var freshProduct = JSON.parse(productData.body);
                                console.log(freshProduct);
                                console.log(productData.statusCode);
                                // if product is not deleted permanently:                
                                if (productData.statusCode == 200 && freshProduct.status != "trash" && freshProduct.price != '') {
                                    console.log(freshProduct.status);
                                    cartData[i].product = freshProduct;
                                    if (!freshProduct.in_stock) {
                                        console.log("Product is no longer available!");
                                        alert(cartData[i].product.name + 'در حال حاضر موجود نیست، بنابراین از سبد شما حذف می شود .');
                                        altered = true;
                                        cartData[i] = null;
                                        return;
                                    }
                                    //if cart item qty is grarter than max stock quantity
                                    if (cartData[i].product.stock_quantity != null && cartData[i].qty > cartData[i].product.stock_quantity) {
                                        cartData[i].qty = cartData[i].product.stock_quantity;
                                        alert("درخواست شما برای " + cartData[i].product.name + " بیش از حداکثر موجودی انبار می باشد. مقدار درخواستی شما به بیشترین مقدار موجود اصلاح شد.");
                                        altered = true;
                                    }
                                    // if product is for sold_individually
                                    if (cartData[i].product.sold_individually && cartData[i].qty > 1) {
                                        alert(cartData[i].product.name + " به صورت تکی به فروش می رسد، بنابراین تعداد آن نمی تواند بیش از 1 مورد در هر سفارش باشد.");
                                        altered = true;
                                        cartData[i].qty = 1;
                                    }
                                    console.log(_this.total);
                                    _this.total += cartData[i].product.price * cartData[i].qty;
                                    console.log(_this.total);
                                } // end if statuscode = 200
                                else if (productData.statusCode == 404 || freshProduct.status == "trash" || freshProduct.price == '' || !freshProduct.stock_quantity) {
                                    console.log("Product is no longer available!");
                                    alert(cartData[i].product.name + 'در حال حاضر موجود نیست، بنابراین از سبد شما حذف می شود .');
                                    altered = true;
                                    cartData[i] = null;
                                    console.log(cartData);
                                } // end if(productData.statusCode == 404)
                                else {
                                    alert("خطا در بازیابی محصول از فروشگاه");
                                    return;
                                }
                            }, function (error) { console.log(error); });
                            promises.push(promise);
                            console.log('I in line 123', i);
                        };
                        var promise;
                        for (var i = 0; i < cartData.length; i++) {
                            _loop_1(i);
                        } // end for (cartData)
                        Promise.all(promises).then(function () {
                            for (var i = 0; i < cartData.length; i++) {
                                if (!cartData[i]) {
                                    cartData.splice(i, 1);
                                    i--;
                                }
                            }
                            _this.storage.set('cart', cartData);
                            _this.cartItems = cartData;
                            console.log('promise....', cartData);
                            _this.hideSpinner();
                            resolve([cartData, altered]);
                        }, function (error) { console.log(error); _this.hideSpinner(); });
                        console.log(_this.total);
                    }
                    else {
                        _this.showEmptyCartMessage = true;
                        _this.hideSpinner();
                    }
                }); // end get cart from storage
            }); //end of storage.ready().then()
        }); // end of return new promise()
    }; // end of updateCart()
    Cart.prototype.removeCart = function () {
        var _this = this;
        this.cartItems = [];
        this.total = 0;
        this.events.publish('cart', this.cartItems);
        this.storage.ready().then(function () {
            _this.storage.remove('cart');
        });
    };
    Cart.prototype.showSpinner = function () {
        this.spinner = this.loadingCtrl.create();
        this.spinner.present();
    };
    Cart.prototype.hideSpinner = function () {
        this.spinner.dismiss();
    };
    Cart.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartPage');
    };
    Cart.prototype.openProductPage = function (product) {
        this.navCtrl.push('ProductDetails', { "product": product });
    };
    Cart.prototype.removeFromCart = function (item, i) {
        var _this = this;
        var price = item.product.price;
        var qty = item.qty;
        this.cartItems.splice(i, 1);
        this.events.publish('cart', this.cartItems);
        this.storage.set("cart", this.cartItems).then(function (cart) {
            _this.total -= (price * qty);
        });
    }; // end of removeFromCart(item, i)
    Cart.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    Cart.prototype.checkout = function () {
        var _this = this;
        // updating cart:
        this.updateCart().then(function (cartData) {
            if (cartData[0] != null && cartData[0].length > 0) {
                _this.cartItems = cartData[0];
                // if the cart items are altered after updateCart():
                if (cartData[1]) {
                    return;
                }
                _this.storage.get("userLoginInfo").then(function (data) {
                    if (data != null) {
                        _this.navCtrl.push('Checkout');
                    }
                    else {
                        _this.navCtrl.push('Login', { next: 'Checkout' });
                    }
                }, function (err) { console.log(err); });
            }
            else {
                _this.showEmptyCartMessage = true;
                _this.cartItems = null;
            }
        }); // end of updateCart().then()
    }; // end of checkout()
    Cart.prototype.changeQty = function (item, i, change) {
        //if decreasing 1 single product
        if (change < 0 && item.qty * -1 >= change) {
            return;
        }
        item.qty += change;
        if (item.product.sold_individually) {
            alert("شما فقط می توانید یک مورد از " + item.product.name + " در یک سفارش داشته باشید. توزیع این محصول محدود است.");
            item.qty = 1;
        }
        //if request amount is grater than stock quantity
        if (change > parseInt(item.product.stock_quantity) && item.product.stock_quantity != null) {
            item.qty = item.product.stock_quantity;
            alert("درخواست شما بیش از حداکثر موجودی انبار می باشد. مقدار درخواستی شما به بیشترین مقدار موجود اصلاح شد.");
        }
        //if cart itme quantity is grater than stock quantity
        if (item.qty >= item.product.stock_quantity && change > 0 && item.product.stock_quantity != null) {
            item.qty = item.product.stock_quantity;
            alert("درخواست شما بیش از حداکثر موجودی انبار می باشد. مقدار درخواستی شما به بیشترین مقدار موجود اصلاح شد.");
        }
        this.cartItems[i] = item;
        this.storage.set('cart', this.cartItems).then(function () {
        });
        this.calculateCartTotal();
        //this.total = (parseInt(this.total.toString()) + (parseInt(price.toString()) * change));
    }; // end of changeQty(item, i, change)
    Cart.prototype.doRefresh = function (event) {
        this.updateCart().then(function (resolve) {
            console.log(resolve);
            event.complete();
        }, function (error) { console.log(error); event.complete(); });
    };
    Cart.prototype.calculateCartTotal = function () {
        var total = 0;
        if (this.cartItems != null && this.cartItems.length > 0) {
            this.cartItems.forEach(function (item, index) {
                total += (item.product.price * item.qty);
            });
            this.total = total;
        }
        else {
            this.showEmptyCartMessage = true;
            this.cartItems = [];
            this.total = 0;
        }
    };
    Cart = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"C:\mmarket\src\pages\cart\cart.html"*/'<ion-header>\n\n  <ion-navbar>\n    \n    <ion-title>سبد خرید</ion-title>\n\n    <ion-buttons  end >\n        <button ion-button block round color="danger" (click)="removeCart()">\n            <ion-icon name="trash" ></ion-icon> &nbsp;\n          تخلیه سبد خرید </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content dir="rtl">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n      <ion-refresher-content pullingIcon="arrow-dropdown"\n      pullingText="برای تازه سازی بکشید"\n      refreshingSpinner="dots"\n      ></ion-refresher-content>\n  </ion-refresher>\n  <ion-card *ngFor="let item of cartItems; let i = index" >\n    <ion-item  (click)="openProductPage(item.product)" text-wrap>\n      <ion-thumbnail item-left>\n        <img [src]="item.product.images[0].src">\n      </ion-thumbnail>\n      <h2>{{item.product.name}}</h2>\n      <p>{{item.qty}} * {{item.product.price | number}} = {{item.qty * item.product.price | number}} تومان </p>\n    </ion-item>\n\n    <ion-item class="compact" color="light">\n      <ion-row no-padding>\n        <ion-col col-8>\n          <button ion-button icon-only clear color="danger" (click)="changeQty(item, i, -1)">\n            <ion-icon name="remove-circle"></ion-icon>\n          </button>\n          <button ion-button clear color="green">{{item.qty}}</button>\n          <button ion-button icon-only clear color="danger" (click)="changeQty(item, i, +1)">\n            <ion-icon name="add-circle"></ion-icon>\n          </button>\n\n        </ion-col>\n        <ion-col col-4 style="text-align: right;">\n        <button ion-button small outline color="danger" style="width: 64px;" (click)="removeFromCart(item, i)">پاک کردن</button>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-card>\n\n  <ion-grid>\n    <ion-card>\n      <ion-grid>\n        <ion-row>\n        <ion-col col-2> </ion-col>\n        <ion-col col-4><b>جمع کل</b> </ion-col>\n        <ion-col col-2> </ion-col>\n        <ion-col col-4><b> {{total | number}} تومان</b> </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <button ion-button color="danger" outline block (click)="closeModal()">بازگشت</button>\n          </ion-col>\n          <ion-col>\n            <button *ngIf="cartItems && cartItems.length>0" ion-button color="danger" block (click)="checkout()">وارسی و پرداخت</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"C:\mmarket\src\pages\cart\cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["w" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["u" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__providers_woo_commerce_woo_commerce__["a" /* WooCommerceProvider */]])
    ], Cart);
    return Cart;
}()); // end of class cart

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_browser_tab__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_app_version__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network_interface__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_deeplinks__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(773);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_cart_cart__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_woo_commerce_woo_commerce__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_onesignal__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ionic_img_viewer__ = __webpack_require__(404);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_cart_cart__["a" /* Cart */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["m" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/checkout/checkout.module#CheckoutPageModule', name: 'Checkout', segment: 'checkout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/example/example.module#ExamplePageModule', name: 'ExamplePage', segment: 'example', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePagePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'Login', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'Menu', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myaccount/myaccount.module#MyaccountPageModule', name: 'MyaccountPage', segment: 'myaccount', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myorders/myorders.module#MyordersPagePageModule', name: 'MyordersPage', segment: 'myorders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-details/order-details.module#OrderDetailsPageModule', name: 'OrderDetails', segment: 'order-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-summary/order-summary.module#OrderSummaryPageModule', name: 'OrderSummaryPage', segment: 'order-summary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/passwordreset/passwordreset.module#PasswordresetPagePageModule', name: 'PasswordresetPage', segment: 'passwordreset', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-details/product-details.module#ProductDetailsPageModule', name: 'ProductDetails', segment: 'product-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/products-by-category/products-by-category.module#ProductsByCategoryPageModule', name: 'ProductsByCategory', segment: 'products-by-category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/query-result/query-result.module#QueryResultPageModule', name: 'QueryResult', segment: 'query-result', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPagePageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'Signup', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_17_ionic_img_viewer__["b" /* IonicImageViewerModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_cart_cart__["a" /* Cart */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_5__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_deeplinks__["a" /* Deeplinks */],
                __WEBPACK_IMPORTED_MODULE_15__providers_woo_commerce_woo_commerce__["a" /* WooCommerceProvider */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_network_interface__["a" /* NetworkInterface */],
                __WEBPACK_IMPORTED_MODULE_1__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_0__ionic_native_browser_tab__["a" /* BrowserTab */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 459:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 461:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 491:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 492:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 558:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular_util_events__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, oneSignal, ngZone, Network, toastCtrl, events, InAppBrowser, app) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.oneSignal = oneSignal;
        this.ngZone = ngZone;
        this.Network = Network;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.InAppBrowser = InAppBrowser;
        this.app = app;
        this.rootPage = 'Menu';
        this.ProductDetails = 'ProductDetails';
        this.ProductsByCategory = 'ProductsByCategory';
        this.initializeApp();
    }
    MyApp.prototype.openLink = function (url, external) {
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
                this.app.getActiveNav().push(this.ProductDetails, { id: data[1] });
            }
            else if (data[0] == "product-category") {
                this.app.getActiveNav().push(this.ProductsByCategory, { id: data[1] });
            }
        }
        else if (!external) {
            this.InAppBrowser.create(url, "_blank", "location=no");
            console.log(url);
        }
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            if (_this.Network.type == "none") {
                _this.toastCtrl.create({
                    message: 'ارتباط شما با شبکه برقرار نیست',
                    showCloseButton: true,
                    closeButtonText: 'خب',
                    cssClass: 'rtl'
                }).present();
            }
            /*       this.Network.onDisconnect().subscribe(() => {
                    this.ngZone.run(() => { this.disconnect = true; });
                    this.toastCtrl.create({
                      message: 'ارتباط شما با شبکه برقرار نیست',
                      showCloseButton: true,
                      closeButtonText: 'خب',
                      cssClass: 'rtl'
                    }).present();
                  }); // end onDisconnect()
            
            
                  this.Network.onConnect().subscribe(() => {
                    this.ngZone.run(() => { this.disconnect = false; });
                    alert("ارتباط شما با شبکه برقرار شد")
                    this.events.publish("network", this.Network, true)
                  }); */
            _this.oneSignal.startInit('9b1578d0-ce98-4155-959e-ef9cd4f879a1', '806609752182');
            _this.oneSignal.inFocusDisplaying(_this.oneSignal.OSInFocusDisplayOption.InAppAlert);
            _this.oneSignal.handleNotificationReceived().subscribe(function (handleNotificationReceived) {
                // do something when notification is received
                console.log('handleNotificationReceived', handleNotificationReceived);
            });
            _this.oneSignal.handleNotificationOpened().subscribe(function (handleNotificationOpened) {
                // do something when a notification is opened
                var notLink = handleNotificationOpened.notification.payload.additionalData.link;
                console.log('handleNotificationOpened', notLink);
                if (notLink) {
                    _this.openLink(notLink);
                }
            });
            _this.oneSignal.endInit();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\mmarket\src\app\app.html"*/'<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n<ion-footer style="z-index:1000; background-color:gainsboro" *ngIf="disconnect">\n    <ion-label text-center block color="danger">\n        <b>ارتباط با شبکه برقرار نیست</b>\n      </ion-label>\n</ion-footer>'/*ion-inline-end:"C:\mmarket\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular_util_events__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[405]);
//# sourceMappingURL=main.js.map