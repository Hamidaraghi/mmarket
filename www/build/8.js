webpackJsonp([8],{

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPageModule", function() { return ProductDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_details__ = __webpack_require__(933);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductDetailsPageModule = /** @class */ (function () {
    function ProductDetailsPageModule() {
    }
    ProductDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_0__product_details__["a" /* ProductDetails */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__product_details__["a" /* ProductDetails */])],
        })
    ], ProductDetailsPageModule);
    return ProductDetailsPageModule;
}());

//# sourceMappingURL=product-details.module.js.map

/***/ }),

/***/ 933:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular_util_events__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_woo_commerce_woo_commerce__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_loading_loading_controller__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_toast_toast_controller__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_img_viewer__ = __webpack_require__(404);
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











var ProductDetails = /** @class */ (function () {
    function ProductDetails(navCtrl, navParams, storage, toastCtrl, modalCtrl, formBuilder, http, ngZone, loadingCtrl, WP, events, imageViewerCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.formBuilder = formBuilder;
        this.http = http;
        this.ngZone = ngZone;
        this.loadingCtrl = loadingCtrl;
        this.WP = WP;
        this.events = events;
        this.product = {};
        this.reviews = [];
        this.qty = 1;
        this.isRefreshing = true;
        this.newRating = null;
        this.review = '';
        this.reviewer = '';
        this.reviewerEmail = '';
        this.submitAttempt = false;
        this.user = {};
        this.usPesllProducts = [];
        this.crossSellProducts = [];
        this.ProductDetails = 'ProductDetails';
        this.selectedOptions = {};
        this.requireOptions = true;
        this.productVariations = [];
        this.reviewValidator = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('[a-zA-Zء-ی ]*')])],
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')])],
            review: ['می توانید دیدگاه خود را در این قسمت بنویسید. حداقل 10 نویسه...', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(10)])]
        });
        this._imageViewerCtrl = imageViewerCtrl;
        this.WooCommerce = WP.WooCommerce;
        this.newRating = null;
        if (this.navParams.get("product")) {
            this.product = this.navParams.get("product");
            console.log(this.product);
            this.WooCommerce.getAsync('products/' + this.product.id + '/reviews').then(function (data) {
                console.log((data));
                _this.reviews = JSON.parse(data.body);
                _this.isRefreshing = false;
                console.log(_this.reviews);
            }, function (err) {
                console.log(err);
            });
        }
        else if (this.navParams.get("id")) {
            this.getProductById(this.navParams.get("id")).then(function (product) {
                ngZone.run(function () {
                    _this.product = product;
                });
                console.log(_this.product);
                _this.WooCommerce.getAsync('products/' + _this.product.id + '/reviews').then(function (data) {
                    console.log(JSON.parse(data.body));
                    _this.reviews = JSON.parse(data.body);
                    _this.isRefreshing = false;
                    console.log(_this.reviews);
                }, function (err) {
                    console.log(err);
                });
            });
        }
        this.usPesllProducts = this.getUpSellProducts(this.product.upsell_ids);
        this.crossSellProducts = this.getUpSellProducts(this.product.cross_sell_ids);
        this.storage.get("userLoginInfo").then(function (userData) {
            if (userData != null) {
                ngZone.run(function () {
                    _this.user = userData.user;
                });
            }
        });
        this.qty = 1;
        this.WooCommerce3 = WP.WooCommerce3;
    } // end of constructor
    ProductDetails.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
        //setTimeout(() => imageViewer.dismiss(), 1000);
        //imageViewer.onDidDismiss(() => alert('Viewer dismissed'));
    };
    ProductDetails.prototype.getUpSellProducts = function (ids) {
        var _this = this;
        var upSellProducts = [];
        if (ids && ids.length > 0) {
            ids.forEach(function (element) {
                _this.getProductById(element).then(function (upSell) {
                    upSellProducts.push(upSell);
                });
            });
            return upSellProducts;
        }
        ;
        return null;
    };
    ProductDetails.prototype.qtyVal = function () {
        if ((this.product.stock_quantity != null) && (this.qty >= this.product.stock_quantity)) {
            this.qty = this.product.stock_quantity;
            this.toastCtrl.create({
                message: "حداکثر موجودی",
                duration: 3000
            }).present();
        }
        console.log(this.qty);
    };
    //add to cart
    ProductDetails.prototype.addToCart = function () {
        var _this = this;
        this.qtyVal();
        this.storage.get('cart').then(function (data) {
            if (data == null || data.length == 0) {
                console.log("بی ناموس");
                data = [];
                data.push({
                    "product": _this.product,
                    "qty": _this.qty
                });
            }
            else {
                var added = 0;
                for (var i = 0; i < data.length; i++) {
                    console.log(_this.product.id);
                    console.log(data[i].product.id);
                    if (_this.product.id == data[i].product.id) {
                        console.log("Product already exists in your cart");
                        data[i].qty = parseInt(data[i].qty) + parseInt(_this.qty.toString());
                        added = 1;
                    }
                }
                if (added == 0) {
                    data.push({
                        "product": _this.product,
                        "qty": _this.qty
                    });
                }
            }
            _this.storage.set("cart", data).then(function () {
                _this.events.publish('cart', data);
                console.log("Cart updated");
                console.log(data);
                _this.toastCtrl.create({
                    message: "به سبد خرید شما افزوده شد",
                    duration: 2000,
                    cssClass: 'rtl'
                }).present();
            });
        });
    };
    ProductDetails.prototype.openCart = function () {
        //this.modalCtrl.create(Cart).present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* Cart */]);
    };
    ProductDetails.prototype.changeQty = function (change) {
        //if decreasing 1 single product
        if (change < 0 && this.qty * -1 >= change) {
            return;
        }
        //if request amount is grater than stock quantity
        if (change > parseInt(this.product.stock_quantity) && this.product.stock_quantity != null) {
            change = this.product.stock_quantity;
            alert("درخواست شما بیش از حداکثر موجودی انبار می باشد. مقدار درخواستی شما به بیشترین مقدار موجود اصلاح شد.");
        }
        if (this.qty >= this.product.stock_quantity && change > 0 && this.product.stock_quantity != null) {
            this.qty = this.product.stock_quantity;
            alert("درخواست شما بیش از حداکثر موجودی انبار می باشد. مقدار درخواستی شما به بیشترین مقدار موجود اصلاح شد.");
            return;
        }
        this.qty += change;
    };
    ProductDetails.prototype.postReview = function () {
        var _this = this;
        this.submitAttempt = true;
        if (!this.reviewValidator.valid) {
            alert("!لطفا ورودی ها را کنترل نمایید و موارد ستاره دار را به درستی تکمیل نمایید.");
            this.ngZone.run(function () {
                _this.submitAttempt = false;
            });
            return;
        }
        var data = {
            product_id: this.product.id,
            review: this.review,
            reviewer: this.user.displayname,
            reviewer_email: this.user.email,
            rating: this.newRating,
            status: 'hold'
        };
        var regExp = /<[^\w<>]*(?:[^<>"'\s]*:)?[^\w<>]*(?:\W*s\W*c\W*r\W*i\W*p\W*t|\W*f\W*o\W*r\W*m|\W*s\W*t\W*y\W*l\W*e|\W*s\W*v\W*g|\W*m\W*a\W*r\W*q\W*u\W*e\W*e|(?:\W*l\W*i\W*n\W*k|\W*o\W*b\W*j\W*e\W*c\W*t|\W*e\W*m\W*b\W*e\W*d|\W*a\W*p\W*p\W*l\W*e\W*t|\W*p\W*a\W*r\W*a\W*m|\W*i?\W*f\W*r\W*a\W*m\W*e|\W*b\W*a\W*s\W*e|\W*b\W*o\W*d\W*y|\W*m\W*e\W*t\W*a|\W*i\W*m\W*a?\W*g\W*e?|\W*v\W*i\W*d\W*e\W*o|\W*a\W*u\W*d\W*i\W*o|\W*b\W*i\W*n\W*d\W*i\W*n\W*g\W*s|\W*s\W*e\W*t|\W*i\W*s\W*i\W*n\W*d\W*e\W*x|\W*a\W*n\W*i\W*m\W*a\W*t\W*e)[^>\w])|(?:<\w[\s\S]*[\s\0\/]|['"])(?:formaction|style|background|src|lowsrc|ping|on(?:d(?:e(?:vice(?:(?:orienta|mo)tion|proximity|found|light)|livery(?:success|error)|activate)|r(?:ag(?:e(?:n(?:ter|d)|xit)|(?:gestur|leav)e|start|drop|over)?|op)|i(?:s(?:c(?:hargingtimechange|onnect(?:ing|ed))|abled)|aling)|ata(?:setc(?:omplete|hanged)|(?:availabl|chang)e|error)|urationchange|ownloading|blclick)|Moz(?:M(?:agnifyGesture(?:Update|Start)?|ouse(?:PixelScroll|Hittest))|S(?:wipeGesture(?:Update|Start|End)?|crolledAreaChanged)|(?:(?:Press)?TapGestur|BeforeResiz)e|EdgeUI(?:C(?:omplet|ancel)|Start)ed|RotateGesture(?:Update|Start)?|A(?:udioAvailable|fterPaint))|c(?:o(?:m(?:p(?:osition(?:update|start|end)|lete)|mand(?:update)?)|n(?:t(?:rolselect|extmenu)|nect(?:ing|ed))|py)|a(?:(?:llschang|ch)ed|nplay(?:through)?|rdstatechange)|h(?:(?:arging(?:time)?ch)?ange|ecking)|(?:fstate|ell)change|u(?:echange|t)|l(?:ick|ose))|m(?:o(?:z(?:pointerlock(?:change|error)|(?:orientation|time)change|fullscreen(?:change|error)|network(?:down|up)load)|use(?:(?:lea|mo)ve|o(?:ver|ut)|enter|wheel|down|up)|ve(?:start|end)?)|essage|ark)|s(?:t(?:a(?:t(?:uschanged|echange)|lled|rt)|k(?:sessione|comma)nd|op)|e(?:ek(?:complete|ing|ed)|(?:lec(?:tstar)?)?t|n(?:ding|t))|u(?:ccess|spend|bmit)|peech(?:start|end)|ound(?:start|end)|croll|how)|b(?:e(?:for(?:e(?:(?:scriptexecu|activa)te|u(?:nload|pdate)|p(?:aste|rint)|c(?:opy|ut)|editfocus)|deactivate)|gin(?:Event)?)|oun(?:dary|ce)|l(?:ocked|ur)|roadcast|usy)|a(?:n(?:imation(?:iteration|start|end)|tennastatechange)|fter(?:(?:scriptexecu|upda)te|print)|udio(?:process|start|end)|d(?:apteradded|dtrack)|ctivate|lerting|bort)|DOM(?:Node(?:Inserted(?:IntoDocument)?|Removed(?:FromDocument)?)|(?:CharacterData|Subtree)Modified|A(?:ttrModified|ctivate)|Focus(?:Out|In)|MouseScroll)|r(?:e(?:s(?:u(?:m(?:ing|e)|lt)|ize|et)|adystatechange|pea(?:tEven)?t|movetrack|trieving|ceived)|ow(?:s(?:inserted|delete)|e(?:nter|xit))|atechange)|p(?:op(?:up(?:hid(?:den|ing)|show(?:ing|n))|state)|a(?:ge(?:hide|show)|(?:st|us)e|int)|ro(?:pertychange|gress)|lay(?:ing)?)|t(?:ouch(?:(?:lea|mo)ve|en(?:ter|d)|cancel|start)|ime(?:update|out)|ransitionend|ext)|u(?:s(?:erproximity|sdreceived)|p(?:gradeneeded|dateready)|n(?:derflow|load))|f(?:o(?:rm(?:change|input)|cus(?:out|in)?)|i(?:lterchange|nish)|ailed)|l(?:o(?:ad(?:e(?:d(?:meta)?data|nd)|start)?|secapture)|evelchange|y)|g(?:amepad(?:(?:dis)?connected|button(?:down|up)|axismove)|et)|e(?:n(?:d(?:Event|ed)?|abled|ter)|rror(?:update)?|mptied|xit)|i(?:cc(?:cardlockerror|infochange)|n(?:coming|valid|put))|o(?:(?:(?:ff|n)lin|bsolet)e|verflow(?:changed)?|pen)|SVG(?:(?:Unl|L)oad|Resize|Scroll|Abort|Error|Zoom)|h(?:e(?:adphoneschange|l[dp])|ashchange|olding)|v(?:o(?:lum|ic)e|ersion)change|w(?:a(?:it|rn)ing|heel)|key(?:press|down|up)|(?:AppComman|Loa)d|no(?:update|match)|Request|zoom))[\s\0]*=/;
        if (regExp.test(this.review)) {
            alert("متن دیدگاه شما حاوی عبارات غیر مجاز می باشد.");
            return;
        }
        this.WooCommerce3.post('products/reviews', data, function (err, data, res) {
            console.log(JSON.parse(res));
            console.log(data);
            if (data.statusMessage == "Created") {
                alert("با سپاس، دیدگاه شما با موفقیت ثبت شد و پس از تایید مدیریت، به نمایش گذاشته خواهد شد.");
                this.submitAttempt = false;
            }
            else {
                // show data.error
                alert(JSON.parse(res).message.toString());
                this.submitAttempt = false;
            }
        });
    }; // end of postReview()
    ProductDetails.prototype.showSpinner = function () {
        this.spinner = this.loadingCtrl.create();
        this.spinner.present();
    };
    ProductDetails.prototype.hideSpinner = function () {
        this.spinner.dismiss();
    };
    ProductDetails.prototype.getProductById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.WooCommerce = _this.WP.init();
                        _this.WooCommerce.getAsync("products/" + id).then(function (product) {
                            console.log(JSON.parse(product.body));
                            _this.hideSpinner;
                            resolve(JSON.parse(product.body));
                        }, function (error) { console.log(error); _this.hideSpinner(); });
                    })];
            });
        });
    };
    ProductDetails.prototype.check = function (justSelectedAttribute) {
        return __awaiter(this, void 0, void 0, function () {
            var count, k, count_, index, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        count = 0;
                        for (k in this.selectedOptions)
                            if (this.selectedOptions.hasOwnProperty(k))
                                count++;
                        count_ = 0;
                        for (index = 0; index < this.product.attributes.length; index++)
                            if (this.product.attributes[index].variation)
                                count_++;
                        if (!(count_ != count)) return [3 /*break*/, 1];
                        this.requireOptions = true;
                        return [2 /*return*/];
                    case 1:
                        this.requireOptions = false;
                        this.showSpinner();
                        _a = this;
                        _c = (_b = JSON).parse;
                        return [4 /*yield*/, this.WooCommerce3.getAsync('products/' + this.product.id + '/variations')];
                    case 2:
                        _a.productVariations = _c.apply(_b, [(_d.sent()).body]);
                        console.log(this.productVariations);
                        _d.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductDetails = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["m" /* Component */])({
            selector: 'page-product-details',template:/*ion-inline-start:"D:\test-mmarket\src\pages\product-details\product-details.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{product.name}}</ion-title>\n  </ion-navbar>\n  \n</ion-header>\n\n<ion-content dir="rtl" style="display:contents" >\n    <ion-fab edge left top  (click)="openCart()" >\n        <button ion-fab color="danger">\n          <ion-icon name="cart" ></ion-icon>\n        </button>\n      </ion-fab>\n  <ion-card>\n    <ion-spinner *ngIf="!product.images" name="ios" ></ion-spinner>\n    <ion-slides autoplay="2500" pager dir="rtl" *ngIf="product.images && product.images.length">\n      <ion-slide *ngFor="let image of product.images">\n        <img [src]="image.src" #myImage (click)="presentImage(myImage)" />\n      </ion-slide>\n    </ion-slides>\n    <div padding>\n      <span>\n        <ion-icon small name="star" [color]="(product.average_rating>=1)?\'golden\':\'gray\'"></ion-icon>\n      </span>\n      <span>\n        <ion-icon small name="star" [color]="(product.average_rating>=2)?\'golden\':\'gray\'"></ion-icon>\n      </span>\n      <span>\n        <ion-icon small name="star" [color]="(product.average_rating>=3)?\'golden\':\'gray\'"></ion-icon>\n      </span>\n      <span>\n        <ion-icon small name="star" [color]="(product.average_rating>=4)?\'golden\':\'gray\'"></ion-icon>\n      </span>\n      <span>\n        <ion-icon small name="star" [color]="(product.average_rating>=5)?\'golden\':\'gray\'"></ion-icon>\n      </span>\n\n      <p>\n        <span>امتیاز: {{product.average_rating}} از 5 (از مجموع {{product.rating_count}} رای)</span>\n      </p>\n    </div>\n    <ion-card-content>\n      <ion-card-title>\n        {{product.name}} &nbsp;\n        <ion-chip *ngFor="let cat of product.categories" style="margin-left:5px">\n          <ion-label color="danger">\n            {{cat.name}}\n          </ion-label>\n        </ion-chip>\n      </ion-card-title>\n      <p [innerHTML]="product.description"></p>\n      <br>\n    </ion-card-content>\n  </ion-card>\n\n  <!--Quantom and price -->\n  <ion-grid *ngIf="product.price && product.in_stock" no-padding>\n    <ion-card style="align-self: center;" no-padding>\n      <ion-item style="text-align: center;">\n        <b>\n          <span>قیمت واحد: </span>\n          <span [innerHTML]="product.price_html"></span>\n        </b>\n      </ion-item>\n    </ion-card>\n  </ion-grid>\n\n  <ion-card *ngIf="product.attributes && product.attributes.length > 0">\n    <ion-card-content>\n      <ion-card-title>\n        ویژگی ها\n      </ion-card-title>\n      <ion-grid>\n        <ion-row *ngFor="let att of product.attributes">\n          <ion-col col-4> {{att.name}} </ion-col>\n          <ion-col col-8>\n            <span *ngFor="let option of att.options"> {{option}}، </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n\n\n\n\n\n\n\n\n  <!-- محصولات پیشنهادی ام مارکت -->\n<ion-spinner *ngIf="isRefreshing && (!usPesllProducts || usPesllProducts.length < 1)" name="ios"></ion-spinner>\n<div *ngIf="usPesllProducts && usPesllProducts.length > 0">\n  <div style="margin-top: 7px;">\n    <ion-chip style="margin-right:5px">\n      <ion-label color="danger">\n        پیشنهاد ام مارکت:\n      </ion-label>\n    </ion-chip>\n\n  </div>\n  <div>\n\n    <ion-scroll scrollX="true" relative >\n\n      <ion-col no-padding *ngFor="let saleproduct of usPesllProducts">\n          <ion-card class="scroll-ion-card"  [navPush]="ProductDetails"\n          [navParams]="{product: saleproduct}">\n            <img *ngIf="saleproduct.images" [src]="saleproduct.images[0].src" />\n            <img *ngIf="!saleproduct.images" src="assets/imgs/no-image.png" />\n            <div style="padding-right: 10px" *ngIf="saleproduct.sale_price && saleproduct.type!=\'variable\' && saleproduct.type!=\'grouped\'">\n              <span dir="ltr" style="color: brown;">{{(saleproduct.sale_price/saleproduct.regular_price*100)-100|number}}%</span>\n            </div>\n            <div style="padding-right:5px; padding-left: 2px; height: 26vw;">\n              <p text-wrap>\n                <b dark [innerHTML]="saleproduct.price_html"></b>\n              </p>\n              <p text-wrap>\n                <span *ngIf="saleproduct.name.length > 35 " [innerHTML]="saleproduct.name.substr(0,35) + \'...\'"></span>\n                <span *ngIf="saleproduct.name.length <= 35 " [innerHTML]="saleproduct.name"></span>\n              </p>\n            </div>\n          </ion-card>\n        </ion-col>\n    </ion-scroll>\n  </div>\n</div>\n\n\n\n\n\n\n<!-- محصولات مرتبط -->\n<ion-spinner *ngIf="isRefreshing && (!crossSellProducts || crossSellProducts.length < 1)" name="ios"></ion-spinner>\n<div *ngIf="crossSellProducts && crossSellProducts.length > 0">\n  <div style="margin-top: 7px;">\n    <ion-chip style="margin-right:5px">\n      <ion-label color="danger">\n       محصولات مرتبط:\n      </ion-label>\n    </ion-chip>\n  </div>\n  <div>\n\n    <ion-scroll scrollX="true" relative >\n\n      <ion-col no-padding *ngFor="let saleproduct of crossSellProducts">\n          <ion-card class="scroll-ion-card"  [navPush]="ProductDetails"\n          [navParams]="{product: saleproduct}">\n            <img *ngIf="saleproduct.images" [src]="saleproduct.images[0].src" />\n            <img *ngIf="!saleproduct.images" src="assets/imgs/no-image.png" />\n            <div style="padding-right: 10px" *ngIf="saleproduct.sale_price && saleproduct.type!=\'variable\' && saleproduct.type!=\'grouped\'">\n              <span dir="ltr" style="color: brown;">{{(saleproduct.sale_price/saleproduct.regular_price*100)-100|number}}%</span>\n            </div>\n            <div style="padding-right:5px; padding-left: 2px; height: 26vw;">\n              <p text-wrap>\n                <b dark [innerHTML]="saleproduct.price_html"></b>\n              </p>\n              <p text-wrap>\n                <span *ngIf="saleproduct.name.length > 35 " [innerHTML]="saleproduct.name.substr(0,35) + \'...\'"></span>\n                <span *ngIf="saleproduct.name.length <= 35 " [innerHTML]="saleproduct.name"></span>\n              </p>\n            </div>\n          </ion-card>\n        </ion-col>\n    </ion-scroll>\n  </div>\n</div>\n\n\n\n\n\n\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>\n        دیدگاه کاربران:\n      </ion-card-title>\n      <ion-spinner *ngIf="isRefreshing" name="ios"></ion-spinner>\n      <h3 *ngIf="!isRefreshing && (!reviews || reviews.length < 1)" >تا کنون هیچ دیدگاهی برای این محصول ثبت نشده است</h3>\n      <ion-grid *ngIf="reviews !=null">\n        <ion-row *ngFor="let review of reviews">\n          <div *ngIf="product.reviews_allowed">\n            <ion-col col-4>\n              <b>{{review.name}}</b>\n              <br>\n              <span>\n                <ion-icon small name="star" [color]="(review.rating>=1)?\'golden\':\'gray\'"></ion-icon>\n              </span>\n              <span>\n                <ion-icon small name="star" [color]="(review.rating>=2)?\'golden\':\'gray\'"></ion-icon>\n              </span>\n              <span>\n                <ion-icon small name="star" [color]="(review.rating>=3)?\'golden\':\'gray\'"></ion-icon>\n              </span>\n              <span>\n                <ion-icon small name="star" [color]="(review.rating>=4)?\'golden\':\'gray\'"></ion-icon>\n              </span>\n              <span>\n                <ion-icon small name="star" [color]="(review.rating>=5)?\'golden\':\'gray\'"></ion-icon>\n              </span>\n            </ion-col>\n            <ion-col col-8>\n              <p>\n                {{review.review}}\n              </p>\n\n            </ion-col>\n          </div>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-item-divider color="secondary">دیدگاه شما درباره این محصول:</ion-item-divider>\n  <div [formGroup]="reviewValidator">\n    <ion-list>\n      <ion-item>\n        <ion-label>* نام: </ion-label>\n        <ion-input [(ngModel)]="user.displayname" formControlName="name" type="text" [class.invalid]="!reviewValidator.controls.name.valid && (reviewValidator.controls.name.dirty || submitAttempt)"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="!reviewValidator.controls.name.valid  && (submitAttempt || reviewValidator.controls.name.dirty)">\n        <p style="color:red">لطفا یک نام معتبر وارد نمایید. فقط شامل حروف!</p>\n      </ion-item>\n      <ion-item>\n        <ion-label>* ایمیل: </ion-label>\n        <ion-input placeholder="example@domain.com" [(ngModel)]="user.email" formControlName="email" type="email" [class.invalid]="!reviewValidator.controls.email.valid && (reviewValidator.controls.email.dirty || submitAttempt)"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="!reviewValidator.controls.email.valid  && (submitAttempt || reviewValidator.controls.email.dirty)">\n        <p style="color:red">لطفا یک ایمیل معتبر وارد نمایید!</p>\n      </ion-item>\n      <ion-item [class.invalid]="!newRating && submitAttempt">\n        <label>امتیاز:</label>\n        <span (click)="newRating=1" > &nbsp;\n          <ion-icon small name="star" [color]="(newRating>=1)?\'golden\':\'gray\'"></ion-icon>\n        </span> &nbsp;\n        <span (click)="newRating=2" >\n          <ion-icon small name="star" [color]="(newRating>=2)?\'golden\':\'gray\'"></ion-icon>\n        </span> &nbsp;\n        <span (click)="newRating=3" >\n          <ion-icon small name="star" [color]="(newRating>=3)?\'golden\':\'gray\'"></ion-icon>\n        </span> &nbsp;\n        <span (click)="newRating=4" >\n          <ion-icon small name="star" [color]="(newRating>=4)?\'golden\':\'gray\'"></ion-icon>\n        </span> &nbsp;\n        <span (click)="newRating=5" >\n          <ion-icon small name="star" [color]="(newRating ==5)?\'golden\':\'gray\'"></ion-icon>\n        </span>\n      </ion-item>\n      <ion-item *ngIf="!newRating && (submitAttempt)">\n        <p style="color:red">لطفا یک امتیاز بدهید!</p>\n      </ion-item>\n      <ion-item>\n        <ion-label>* دیدگاه:</ion-label>\n        <ion-textarea placeholder="دیدگاه شما ..." [(ngModel)]="review" formControlName="review" type="text" [class.invalid]="!reviewValidator.controls.review.valid && (reviewValidator.controls.review.dirty || submitAttempt)">\n        </ion-textarea>\n      </ion-item>\n      <ion-item *ngIf="!reviewValidator.controls.review.valid  && (submitAttempt || reviewValidator.controls.review.dirty)" place-holder>\n        <p style="color:red">لطفا یک دیدگاه در این قسمت وارد کنید حداقل 10 نویسه.</p>\n      </ion-item>\n\n      <button ion-button block round (click)="postReview()" [disabled]="submitAttempt">\n        <div class="center-vertical-horizontal">\n          ارسال دیدگاه\n          <ion-spinner class="button-spinner" *ngIf="submitAttempt" name="ios"></ion-spinner>\n        </div>\n      </button>\n\n    </ion-list>\n  </div>\n</ion-content>\n<ion-footer>\n  \n    <button *ngIf="product.price && product.in_stock" ion-button block round color="danger" (click)="addToCart()">\n      <ion-icon name="basket"></ion-icon> &nbsp; بِخَر - قیمت: {{product.price | number:0}} تومان\n    </button>\n    <ion-label *ngIf="!product.price || !product.in_stock" text-center block color="danger">\n      <b>نا موجود</b>\n    </ion-label>\n\n</ion-footer>'/*ion-inline-end:"D:\test-mmarket\src\pages\product-details\product-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_toast_toast_controller__["a" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["o" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__providers_woo_commerce_woo_commerce__["a" /* WooCommerceProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular_util_events__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_10_ionic_img_viewer__["a" /* ImageViewerController */]])
    ], ProductDetails);
    return ProductDetails;
}());

//# sourceMappingURL=product-details.js.map

/***/ })

});
//# sourceMappingURL=8.js.map