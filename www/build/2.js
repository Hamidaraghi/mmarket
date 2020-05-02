webpackJsonp([2],{

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signup__ = __webpack_require__(937);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_0__signup__["a" /* Signup */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__signup__["a" /* Signup */])],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 917:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(13);
var map_1 = __webpack_require__(401);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 937:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_woo_commerce_woo_commerce__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_loading_loading_controller__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(917);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
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






var Signup = /** @class */ (function () {
    function Signup(navCtrl, navParams, toastCtrl, alertCtrl, loadingCtrl, formBuilder, wp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.wp = wp;
        this.newUser = {};
        this.submitAttempt = false;
        this.timer = 120;
        this.timeOut = {};
        this.interval = {};
        this.sendCodeSubmitAttempt = false;
        this.secret = '';
        this.secretMatch = '';
        //validating form
        this.signupValidator = formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[a-zA-Zء-ی ]*')])],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[a-zA-Zء-ی ]*')])],
            //email: ['', Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')],
            //postCode: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(10)])],
            userPhone: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('^09[0-9]*'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(11), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(11)])],
            //address: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(100)])],
            rules: ['false', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].requiredTrue],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6)])],
            //phone: ['', Validators.compose([Validators.pattern('[0-90-9]*'), Validators.maxLength(11), Validators.minLength(11)])],
            affiliateId: ['',]
        });
        this.newUser.billing = {};
        this.newUser.shipping = {};
        this.billing_shipping_same = true;
        this.WooCommerce = wp.WooCommerce;
        /* this.wp.WooCommerce3.getAsync('sep/v1/get-country-states').then((data)=>{
          let states = (JSON.parse(data.body))
    
            Object.keys(states).forEach(stateCode => {
            let stateName = states[stateCode];
            this.states.push({stateCode, stateName})
          });
    
          //console.log(this.states[0].stateName)
          
        }) */
    } // end constructor
    Signup.prototype.sendSms = function (phone) {
        var _this = this;
        this.timer = 120;
        this.sendCodeSubmitAttempt = true;
        this.secret = (Math.floor(Math.random() * 90000) + 10000).toString();
        //console.log(this.secret);
        var smsData = { "to": this.newUser.username, "code": this.secret, "pattern_code": "681", "input_data": { "code": "854", "company": "mm" } };
        this.wp.WooCommerce3.postAsync("sep/v1/send-sms", smsData).then(function (res) {
            console.log(res);
            if (res.status == 200) {
                _this.toastCtrl.create({
                    message: "پیامک حاوی کد تغییر رمز به شماره تلفن همراه شما ارسال شد.",
                    duration: 5000
                }).present();
                _this.timeOut = setTimeout(function () {
                    _this.sendCodeSubmitAttempt = false;
                    alert(' بازیابی رمز بیش از محدوده زمانی به طول انجامید، لطفا بعدا دوباره تلاش کنید.');
                    _this.secret = null;
                    clearInterval(_this.interval);
                }, _this.timer * 1000);
                _this.interval = setInterval(function () {
                    if (_this.timer >= 0)
                        _this.timer--;
                }, 1000);
            }
            else {
                _this.toastCtrl.create({
                    message: "ارسال پیامک تایید با خطا مواجه شد لطفا بعدا دوباره تلاش فرمایید.",
                    duration: 5000
                }).present();
            }
        }, function (error) {
            console.log(error);
            _this.toastCtrl.create({
                message: "ارسال پیامک تایید با خطا مواجه شد لطفا بعدا دوباره تلاش فرمایید.",
                duration: 5000
            }).present();
        });
    };
    Signup.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    Signup.prototype.setBillingToShipping = function () {
        this.billing_shipping_same = !this.billing_shipping_same;
    };
    Signup.prototype.signup = function () {
        var _this = this;
        console.log(this.signupValidator);
        this.submitAttempt = true;
        if (!this.signupValidator.valid) {
            alert("!لطفا ورودی ها را کنترل نمایید و موارد ستاره دار را به درستی تکمیل نمایید.");
            return;
        }
        this.showSpinner();
        var customerData = {
            "email": this.newUser.email,
            "first_name": this.newUser.first_name,
            "last_name": this.newUser.last_name,
            "username": this.newUser.username,
            "password": this.newUser.password,
            "confirm_password": this.newUser.confirm_password,
            "billing": {
                "first_name": this.newUser.first_name,
                "last_name": this.newUser.last_name,
            },
            "shipping": {
                "first_name": this.newUser.first_name,
                "last_name": this.newUser.last_name,
            }
        };
        if (this.billing_shipping_same) {
            this.newUser.shipping = this.newUser.billing;
        }
        //Validate affiliate
        this.wp.getAffiliateRankDetails(this.affiliateId).then(function (rankDetails) {
            console.log('Prommise resolved', rankDetails);
            _this.WooCommerce.postAsync('customers', customerData).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                var referralWpUid_1, message;
                return __generator(this, function (_a) {
                    if (data.statusCode == 201) {
                        // add signup referral and relation
                        if (this.affiliateId > 0) {
                            referralWpUid_1 = JSON.parse(data.body).id;
                            console.log("referralWpUid is:", referralWpUid_1);
                            //add relation between affiliate and referral
                            this.wp.addAffiliateRelation(this.affiliateId, referralWpUid_1).then(function () {
                                _this.wp.addSignupReferral(referralWpUid_1, rankDetails, _this.affiliateId);
                            });
                        }
                        //show success message
                        this.alertCtrl.create({
                            title: "حساب کاربری ساخته شد",
                            message: "حساب کاربری شما با موفقیت ساخته شد. لطفا برای ادامه، وارد شوید!",
                            cssClass: "rtl",
                            buttons: [{
                                    text: "ورود", handler: function () {
                                        _this.navCtrl.push('Login');
                                    },
                                }]
                        }).present();
                    }
                    else if (data.statusCode == 400) {
                        message = JSON.parse(data.body).message;
                        this.toastCtrl.create({
                            message: message,
                            showCloseButton: true,
                            closeButtonText: "خب",
                            cssClass: "rtl",
                        }).present();
                    }
                    this.hideSpinner();
                    return [2 /*return*/];
                });
            }); }, function (err) { console.log(err); _this.hideSpinner(); });
        }).catch(function (error) { console.log(error); alert("کد معرف معتبر نیست و یا همکار فروش نشده است"); _this.hideSpinner(); return; });
    };
    Signup.prototype.showSpinner = function () {
        this.spinner = this.loadingCtrl.create({});
        this.spinner.present();
    };
    Signup.prototype.hideSpinner = function () {
        this.spinner.dismiss();
    };
    Signup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"D:\test-mmarket\src\pages\signup\signup.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>ثبت نام</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div [formGroup]="signupValidator" >\n  <ion-list>\n    <ion-item-divider color="danger">مشخصات کاربر</ion-item-divider>\n    <ion-item>\n      <ion-label>نام</ion-label>\n      <ion-input type="text" [(ngModel)]="newUser.first_name" formControlName="firstName" ></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!signupValidator.controls.firstName.valid  && (signupValidator.controls.firstName.dirty || submitAttempt)">\n      <p style="color:red">لطفا یک نام معتبر وارد نمایید.</p>\n    </ion-item>\n    <ion-item>\n      <ion-label>نام خانوادگی</ion-label>\n      <ion-input type="text" [(ngModel)]="newUser.last_name" formControlName="lastName" ></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!signupValidator.controls.lastName.valid  && (signupValidator.controls.lastName.dirty || submitAttempt)">\n      <p style="color:red">لطفا یک نام خانوادگی معتبر وارد نمایید.</p>\n    </ion-item>\n    <ion-item>\n      <ion-label>* تلفن همراه</ion-label>\n      <ion-input [(ngModel)]="newUser.username" type="tel" clearInput formControlName="userPhone" placeholder="09XXXXXXXXX"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!signupValidator.controls.userPhone.valid  && (signupValidator.controls.userPhone.dirty || submitAttempt)">\n      <p style="color:red">یک شماره تلفن همراه معتبر 11 رقمی وارد نمایید. </p>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label>*گذرواژه</ion-label>\n      <ion-input #pass type="password" [(ngModel)]="newUser.password" formControlName="password" ></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!signupValidator.controls.password.valid  && (signupValidator.controls.password.dirty || submitAttempt)">\n      <p style="color:red">حداقل طول گذرواژه 6 کاراکتر باید باشد</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>*تکرار گذرواژه</ion-label>\n      <ion-input #repass type="password" [(ngModel)]="newUser.confirm_password" formControlName="password" ></ion-input>\n    </ion-item>\n    <ion-item *ngIf="pass.value != repass.value">\n      <p style="color:red">گذرواژه و تکرار آن یکسان نیستند</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>کد معرف (اختیاری)</ion-label>\n      <ion-input [(ngModel)]="affiliateId" clearInput formControlName="affiliateId" placeholder="شماره موبایل یا کد معرف"></ion-input>\n    </ion-item>\n <!--    <ion-item *ngIf="!signupValidator.controls.affiliateId.valid  && (signupValidator.controls.affiliateId.dirty || submitAttempt)">\n      <p style="color:red">لطفا برای کد معرف فقط عدد وارد کنید</p>\n    </ion-item> -->\n\n  </ion-list>\n  <ion-item>\n    <ion-label>قوانین و مقررات را می پذیرم</ion-label>\n    <ion-checkbox checked="false" formControlName="rules" [class.invalid]="!signupValidator.controls.rules.valid && (signupValidator.controls.rules.dirty || submitAttempt)"></ion-checkbox>\n  </ion-item>\n  <ion-item *ngIf="!signupValidator.controls.rules.valid  && (signupValidator.controls.rules.dirty || submitAttempt)">\n    <p style="color:red">شما برای ادامه می بایست قوانین را بپذیرید! </p>\n  </ion-item>\n\n</div>\n</ion-content>\n\n<ion-footer>\n  <button ion-button block round color="danger" (click)="signup()" [disabled]="pass.value != repass.value " >ثبت نام</button>\n</ion-footer>'/*ion-inline-end:"D:\test-mmarket\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["u" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_0__providers_woo_commerce_woo_commerce__["a" /* WooCommerceProvider */]])
    ], Signup);
    return Signup;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=2.js.map