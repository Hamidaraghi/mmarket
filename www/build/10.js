webpackJsonp([10],{

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSummaryPageModule", function() { return OrderSummaryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_summary__ = __webpack_require__(931);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderSummaryPageModule = /** @class */ (function () {
    function OrderSummaryPageModule() {
    }
    OrderSummaryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__order_summary__["a" /* OrderSummaryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order_summary__["a" /* OrderSummaryPage */]),
            ],
        })
    ], OrderSummaryPageModule);
    return OrderSummaryPageModule;
}());

//# sourceMappingURL=order-summary.module.js.map

/***/ }),

/***/ 931:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderSummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_woo_commerce_woo_commerce__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(219);
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







/**
 * Generated class for the OrderSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderSummaryPage = /** @class */ (function () {
    function OrderSummaryPage(navCtrl, navParams, formBuilder, alertCtrl, wp, ngZone, storage, loadingCtrl, inAppbrowser) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.wp = wp;
        this.ngZone = ngZone;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.inAppbrowser = inAppbrowser;
        this.order = {};
        this.products = {};
        this.couponLines = [];
        this.paymentMethods = [];
        this.submitAttempt = false;
        this.userId = 0;
        this.selectOptions = {
            cssClass: 'rtl'
        };
        //validating form
        this.checkoutValidator = formBuilder.group({
            paymentMethod: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            rules: ['false', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].requiredTrue]
        });
        this.order = this.navParams.get("order");
        console.log(this.order);
        this.userId = this.navParams.get("userId");
        console.log(this.userId);
        this.products = this.order.line_items;
        this.wp.WooCommerce3.getAsync('payment_gateways').then(function (gateways) {
            console.log('Gateways:', JSON.parse(gateways.body));
            _this.paymentMethods = JSON.parse(gateways.body);
            //Delet disabled payment gateways:
            for (var index = 0; index < _this.paymentMethods.length; index++) {
                if (!_this.paymentMethods[index].enabled) {
                    _this.paymentMethods.splice(index, 1);
                    index--;
                }
            }
            console.log(_this.paymentMethods);
            _this.ngZone.run(function () {
                _this.paymentMethods;
            });
        });
    }
    OrderSummaryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderSummaryPage');
    };
    OrderSummaryPage.prototype.openProductPage = function (product) {
        this.navCtrl.push('ProductDetails', { "id": product });
        console.log('PRRRRRRR', product);
    };
    OrderSummaryPage.prototype.addOff = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'افزودن کد تخفیف',
            message: "کد تخفیف خود را وارد کنید",
            inputs: [
                {
                    name: 'code',
                    placeholder: 'کد تخفیف'
                },
            ],
            buttons: [
                {
                    text: 'لغو',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'ارسال',
                    handler: function (data) {
                        console.log('Saved clicked', data);
                        _this.couponLines.push(data);
                        console.log(_this.order.coupon_lines);
                        console.log(_this.couponLines);
                        _this.updateOrder(_this.order.id, { "coupon_lines": _this.couponLines }).then(function (updatedOrder) {
                            console.log(updatedOrder);
                            //update order totals:
                            _this.ngZone.run(function () {
                                _this.order = updatedOrder;
                                console.log(updatedOrder);
                                console.log(_this.order);
                            });
                        }, function (error) {
                            console.log(error);
                            alert(error.description);
                            _this.couponLines.pop();
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    OrderSummaryPage.prototype.updateOrder = function (orderId, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        console.log(orderId, data);
                        _this.wp.WooCommerce3.putAsync('orders/' + orderId, data).then(function (putedOrder) {
                            console.log("Puted Order::: ", putedOrder);
                            //console.log(JSON.parse(putedOrder.body).message)
                            var updatedOrder = JSON.parse(putedOrder.body);
                            if (putedOrder.statusCode != 200) {
                                //this.order.coupon_lines.pop();
                                console.log("Error updating order!");
                                reject({ error: "-1", description: updatedOrder.message });
                            }
                            else {
                                resolve(updatedOrder);
                            }
                            console.log(updatedOrder);
                            console.log(_this.order);
                        }, function (error) { console.log(error); });
                    })];
            });
        });
    };
    OrderSummaryPage.prototype.removeCoupon = function (i) {
        var _this = this;
        console.log(i);
        this.couponLines.splice(i, 1);
        console.log(this.couponLines);
        this.updateOrder(this.order.id, { "coupon_lines": this.couponLines }).then(function (updatedOrder) {
            _this.ngZone.run(function () {
                _this.order = updatedOrder;
            });
        });
    };
    //     // add referral
    //     //get rank amount and other affiliate data
    //     this.wp.getUserReferrer(this.userInfo.id).then(affiliateId => {
    //       console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@", affiliateId)
    //       if (affiliateId > 0){ // affiliate exist
    //           //get rank amount and other affiliate data
    //           this.wp.getAffiliateRankDetails(affiliateId).then(data => {
    //             console.log("@@@@@@@@@@@@@@@@@@@", data)
    //             let rankDetails = data;
    //             let referralAmount
    //             if (rankDetails.lifetime_amount_type == "percentage"){
    //               referralAmount = orderData.total * rankDetails.lifetime_amount_value / 100
    //               console.log (referralAmount);
    //             } else if (rankDetails.lifetime_amount_type == "flat"){
    //               referralAmount = rankDetails.lifetime_amount_value
    //             }
    //               let addReferralData = 
    //               { "refferal_wp_uid": this.userInfo.id, "campaign": "", "affiliate_id": affiliateId, "visit_id": "", "description": "", "source": "woo",
    //                "reference": orderData.id, "reference_details": "App", "parent_referral_id": "", "child_referral_id": "", "amount": referralAmount, 
    //                "currency": orderData.currency, "status": 1, "payment": 0 }
    //              this.wp.addReferral(addReferralData)
    //           })
    //       }
    //     })
    OrderSummaryPage.prototype.placeOrder = function (orderData) {
        var _this = this;
        console.log(this.paymentMethod);
        this.showSpinner();
        this.submitAttempt = true;
        if (!this.checkoutValidator.valid) {
            alert("!لطفا ورودی ها را کنترل نمایید و موارد ستاره دار را به درستی تکمیل نمایید.");
            this.hideSpinner();
            return;
        }
        console.log(orderData);
        if (this.paymentMethod == "WC_Saman_Gateway") {
            this.payWithSepGateway(orderData).then(function (paymentRes) {
                console.log(paymentRes);
                if (paymentRes) {
                    _this.wp.addOrderReferral(_this.userId, _this.order.id, _this.order.total, _this.order.currency)
                        .then(function (referral) { console.log(referral); }).catch(function (error) { console.log(error); });
                    _this.storage.remove('cart');
                    if (_this.spinner)
                        _this.hideSpinner();
                    _this.orderFinalMessage(_this.order, true);
                }
            }).catch(function (error) { console.log(error); });
        }
        else {
            //in case zarinpal not selected: it means Pay On Delivery
            this.wp.WooCommerce3.putAsync('orders/' + orderData.id, { status: 'processing' }).then(function (order) {
                _this.storage.remove('cart');
                console.log(JSON.parse(order.body));
                console.log(_this.order.total);
                //if (this.spinner) this.hideSpinner();
                _this.wp.addOrderReferral(_this.userId, _this.order.id, _this.order.total, _this.order.currency);
                _this.orderFinalMessage(orderData, true);
                return Promise.resolve(orderData);
            }, function (error) { console.log(error); });
        }
    };
    OrderSummaryPage.prototype.payWithSepGateway = function (order) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var amount = order.total;
                        if (order.currency = 'IRT') {
                            amount = amount * 10;
                        }
                        //get token
                        _this.wp.WooCommerce3.getAsync('sep/v1/get-token/?Action=Token&TerminalId=' + _this.wp.TerminalId +
                            '&RedirectUrl=' + _this.wp.sepCallBackUrl + '&ResNum=' + order.id +
                            '&Amount=' + amount + '&CellNumber=' + order.billing.phone.toString()).then(function (sepData) {
                            var sepToken = (JSON.parse(sepData.body));
                            var _a = JSON.parse(sepToken), status = _a.status, token = _a.token;
                            if (!status) {
                                alert('خطا در دریافت توکن از درگاه سامان');
                                alert(JSON.parse(sepToken).errorDesc);
                                _this.hideSpinner();
                                _this.spinner.onDidDismiss(function () {
                                    reject(-1);
                                });
                            }
                            var pageContent = '<html><head></head><body><form id="loginForm" action="' + _this.wp.sepUrl + '" method="post">' +
                                '<input type="hidden" name="Token" value=' + token + '>' +
                                '</form> <script type="text/javascript">document.getElementById("loginForm").submit();</script></body></html>';
                            var pageContentUrl = 'data:text/html;base64,' + btoa(pageContent);
                            var browserRef = _this.inAppbrowser.create(pageContentUrl, "_blank");
                            _this.hideSpinner();
                            browserRef.on('loadstart').subscribe(function (event) {
                                if (event.url.startsWith(_this.wp.sepCallBackUrl)) {
                                    browserRef.on('loadstop').subscribe(function (loadstop) {
                                        var scriptCode = "document.getElementById('sep').value;";
                                        browserRef.executeScript({ code: scriptCode }).then(function (value) {
                                            var sep = JSON.parse(value[0]);
                                            browserRef.close();
                                            _this.showSpinner();
                                            if (sep.State != 'OK' || sep.Status != 2) {
                                                _this.wp.WooCommerce3.postAsync('orders/' + order.id + '/notes', { note: "وضعیت تراکنش درگاه سامان اوکی نمیباشد" + sep.State });
                                                _this.wp.WooCommerce3.putAsync('orders/' + order.id, { status: 'cancelled' }).then(function (data) {
                                                    console.log(data);
                                                    console.log(JSON.parse(data.body));
                                                }, function (error) { console.log(error); });
                                                alert(" خطا در پرداخت. شماره خطا: " + sep.Status);
                                                _this.wp.WooCommerce3.postAsync('orders/' + order.id + '/notes', { note: " خطا در پرداخت. شماره خطا: " + sep.Status });
                                                _this.wp.WooCommerce3.putAsync('orders/' + order.id, { status: 'cancelled' }).then(function (data) {
                                                    console.log(data);
                                                    console.log(JSON.parse(data.body));
                                                }, function (error) { console.log(error); });
                                                _this.hideSpinner();
                                                reject(-2);
                                            }
                                            else {
                                                // Check if refnum is used or not and then save it
                                                var seveRefNumData = { State: sep.State, Status: sep.Status, RefNum: sep.RefNum, ResNum: sep.ResNum, TerminalId: sep.TerminalId, TraceNo: sep.TraceNo };
                                                _this.wp.WooCommerce3.postAsync('sep/v1/save-RefNum', seveRefNumData).then(function (data) {
                                                    var res = (JSON.parse(data.body));
                                                    console.log(res);
                                                    if (res.error) {
                                                        console.log(res.error);
                                                        _this.wp.WooCommerce3.postAsync('orders/' + order.id + '/notes', { note: res.error_description });
                                                        _this.wp.WooCommerce3.putAsync('orders/' + order.id, { status: 'cancelled' }).then(function (data) {
                                                            console.log(data);
                                                            console.log(JSON.parse(data.body));
                                                        }, function (error) { console.log(error); });
                                                        alert(res.error_description);
                                                        _this.hideSpinner();
                                                        _this.spinner.onDidDismiss(function () {
                                                            reject(-3);
                                                        });
                                                    }
                                                    if (res.inserted) {
                                                        // refnum is not used; do Verify
                                                        //this.sepVerify();
                                                        var verifyArgs = { RefNum: sep.RefNum, MID: sep.TerminalId, amount: amount, password: _this.wp.sepMerchantPassword };
                                                        _this.sepVerify(verifyArgs).then(function (verifyData) {
                                                            if (verifyData.error) {
                                                                _this.wp.WooCommerce3.postAsync('orders/' + order.id + '/notes', { note: "خطا: " + JSON.stringify(verifyData.description) });
                                                                _this.wp.WooCommerce3.putAsync('orders/' + order.id, { status: 'cancelled' }).then(function (data) {
                                                                    console.log(data);
                                                                    console.log(JSON.parse(data.body));
                                                                }, function (error) { console.log(error); });
                                                                _this.hideSpinner();
                                                                reject(-4);
                                                            }
                                                            else {
                                                                // place order
                                                                //Successfull payment => Send order to woocommerce.
                                                                // Updating order status to prccessing:
                                                                _this.wp.WooCommerce3.postAsync('orders/' + order.id + '/notes', { note: "وریفای موفق؛ کد پیگیری: " + sep.TraceNo.toString() });
                                                                _this.wp.WooCommerce3.putAsync('orders/' + order.id, { set_paid: true, status: 'processing', transaction_id: sep.RefNum.toString() }).then(function (order) {
                                                                });
                                                                resolve(true);
                                                            }
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    });
                                }
                            });
                        });
                    })];
            });
        });
    };
    OrderSummaryPage.prototype.sepVerify = function (verifyArgs) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.wp.WooCommerce3.postAsync('sep/v1/sep-verify', verifyArgs).then(function (verifyData) {
                verifyData = JSON.parse(verifyData.body);
                if (verifyData.error) {
                    // verify unsuccessfull
                    console.log("Unsuccessful verify: " + JSON.stringify(verifyData.description));
                    resolve({ error: 1, description: verifyData.description });
                }
                else {
                    // successfull verify
                    console.log('Successfull verify');
                    resolve({ success: verifyData.verify_code, description: verifyData.description, RefNum: verifyArgs.RefNum });
                }
            });
        });
    };
    OrderSummaryPage.prototype.orderFinalMessage = function (orderData, success) {
        var _this = this;
        if (success) {
            this.alertCtrl.create({
                title: "سفارش ثبت شد",
                cssClass: 'rtl',
                message: "سفارش شما با موفقیت ثبت شد. شماره سفارش شما: " + orderData.id,
                buttons: [{
                        text: "تایید",
                        handler: function () {
                            _this.navCtrl.push('OrderDetails', { "order": orderData }).then(function () {
                                var count = _this.navCtrl.getActive().index - 1;
                                _this.navCtrl.remove(1, count).then(function (data) {
                                    console.log(data);
                                    _this.hideSpinner();
                                });
                            });
                        }
                    }]
            }).present();
        }
        else {
            this.alertCtrl.create({
                title: "پرداخت ناموفق",
                cssClass: 'rtl',
                message: "پرداخت سفارش شما ناموفق بود. شماره سفارش: " + orderData.id,
                buttons: [{
                        text: "تایید",
                        handler: function () {
                            _this.navCtrl.push('OrderDetails', { "order": orderData }).then(function () {
                                var count = _this.navCtrl.getActive().index - 1;
                                _this.navCtrl.remove(1, count).then(function (data) {
                                    console.log(data);
                                    _this.hideSpinner();
                                });
                            });
                        }
                    }]
            }).present();
        }
    };
    OrderSummaryPage.prototype.showSpinner = function () {
        this.spinner = this.loadingCtrl.create();
        this.spinner.present();
    };
    OrderSummaryPage.prototype.hideSpinner = function () {
        this.spinner.dismiss();
    };
    OrderSummaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order-summary',template:/*ion-inline-start:"D:\test-mmarket\src\pages\order-summary\order-summary.html"*/'<!--\n  Generated template for the OrderSummaryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>خلاصه سفارش</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n \n\n\n    <ion-list class = "order_list">\n      <ion-item *ngFor="let product of products; let i=index" text-wrap\n        (click)="openProductPage(product.product_id)">\n        <h2>{{product.name}}</h2>\n        <p>{{product.quantity}} * {{product.price | number}} =\n          {{product.quantity * product.price | number}} تومان </p>\n      </ion-item>\n    </ion-list>\n    \n<ion-list>\n\n  <ion-item >\n    <p>\n      <strong>هزینه حمل: </strong>\n      <span *ngIf="order.shipping_total">{{ order.shipping_total | number }} تومان</span>\n    </p>\n    <p color="danger">\n      <strong>سایر تخفیف ها: </strong>\n      <span *ngIf="order.total">{{ order.discount_total | number }} تومان </span>\n    </p>\n    <p color="danger">\n      <strong>مجموع سفارش: </strong>\n      <span *ngIf="order.total">{{ order.total | number }} تومان</span>\n    </p>\n  </ion-item>\n</ion-list>\n\n <ion-list class="order_list">\n  <ion-item *ngFor="let coupon of order.coupon_lines; let i=index" >\n    <p>\n      <span>کد کوپن: {{coupon.code}}</span><br>\n      <span>تخفیف: {{coupon.discount | number}} تومان</span>\n    </p>\n    <button ion-button  clear color="danger" item-end (click)="removeCoupon(i)">\n      <ion-icon name="remove-circle" item-end></ion-icon>\n    </button>\n  </ion-item>\n\n  <ion-item>\n    <button ion-item (click)="addOff()">کد تخفیف دارید؟</button>\n  </ion-item>\n</ion-list>\n\n<ion-list [formGroup]="checkoutValidator">\n \n  <ion-item-divider color="danger">شیوه پرداخت</ion-item-divider>\n  <ion-item>\n    <ion-label>* شیوه پرداخت</ion-label>\n    <ion-spinner ></ion-spinner>\n    <ion-select *ngIf="paymentMethods.length > 0" formControlName="paymentMethod" [selectOptions]="selectOptions" [(ngModel)]="paymentMethod"\n      class="rtl" interface="action-sheet" cancelText="لغو"\n      [class.invalid]="!checkoutValidator.controls.paymentMethod.valid && (checkoutValidator.controls.paymentMethod.dirty || submitAttempt)">\n      <ion-option *ngFor="let p of paymentMethods" value={{p.id}}>{{p.title}}</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item *ngIf="!checkoutValidator.controls.paymentMethod.valid &&  submitAttempt">\n    <p style="color:red">لطفا یک روش پرداخت انتخاب نمایید</p>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>* قوانین و مقررات را می پذیرم</ion-label>\n    <ion-checkbox checked=\'false\' formControlName="rules"\n      [class.invalid]="!checkoutValidator.controls.rules.valid && (checkoutValidator.controls.rules.dirty || submitAttempt)">\n    </ion-checkbox>\n  </ion-item>  \n  <ion-item\n    *ngIf="!checkoutValidator.controls.rules.valid  && (checkoutValidator.controls.rules.dirty || submitAttempt)">\n    <p style="color:red">شما برای ادامه می بایست قوانین را بپذیرید! </p>\n  </ion-item>\n</ion-list>\n\n<ion-footer>\n  <button ion-button block round color="danger" (click)="placeOrder(order)" >تکمیل سفارش و پرداخت</button>\n</ion-footer>\n</ion-content>\n'/*ion-inline-end:"D:\test-mmarket\src\pages\order-summary\order-summary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_woo_commerce_woo_commerce__["a" /* WooCommerceProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], OrderSummaryPage);
    return OrderSummaryPage;
}());

//# sourceMappingURL=order-summary.js.map

/***/ })

});
//# sourceMappingURL=10.js.map