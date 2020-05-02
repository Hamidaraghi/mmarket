webpackJsonp([11],{

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyaccountPageModule", function() { return MyaccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myaccount__ = __webpack_require__(928);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyaccountPageModule = /** @class */ (function () {
    function MyaccountPageModule() {
    }
    MyaccountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__myaccount__["a" /* MyaccountPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__myaccount__["a" /* MyaccountPage */]),
            ],
        })
    ], MyaccountPageModule);
    return MyaccountPageModule;
}());

//# sourceMappingURL=myaccount.module.js.map

/***/ }),

/***/ 928:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyaccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular_util_events__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_woo_commerce_woo_commerce__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyaccountPage = /** @class */ (function () {
    function MyaccountPage(navCtrl, navParams, toastCtrl, alertCtrl, loadingCtrl, formBuilder, storage, wp, ngZone, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.wp = wp;
        this.ngZone = ngZone;
        this.events = events;
        this.WooCommerce = {};
        this.newUser = {};
        this.submitAttempt = false;
        this.passChange = false;
        this.states = [];
        //validating form
        this.updateUserValidator = formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[a-zA-Zء-ی ]*')])],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[a-zA-Zء-ی ]*')])],
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])],
            postCode: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(10)])],
            phone: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(11), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(11)])],
            address: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(100)])],
            rules: ['false', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].requiredTrue],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6)])]
        });
        this.WooCommerce = wp.init();
        this.newUser.billing = {};
        this.newUser.shipping = {};
        console.log(this.WooCommerce);
        this.storage.get("userLoginInfo").then(function (userData) {
            var id = userData.user.id;
            console.log(id);
            _this.WooCommerce.getAsync('customers/' + id).then(function (customer) {
                ngZone.run(function () {
                    _this.newUser = JSON.parse(customer.body);
                    console.log("USER iS:  ********", _this.newUser);
                });
            }, function (error) { console.log(error); });
        }, function (error) { console.log(error); });
        this.billing_shipping_same = true;
        this.wp.WooCommerce3.getAsync('sep/v1/get-country-states').then(function (data) {
            var states = (JSON.parse(data.body));
            Object.keys(states).forEach(function (stateCode) {
                var stateName = states[stateCode];
                _this.states.push({ "code": stateCode, "name": stateName });
            });
            console.log(_this.states);
            //console.log(this.states[0].stateName)
        });
    } // end constructor
    MyaccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    MyaccountPage.prototype.setBillingToShipping = function () {
        this.billing_shipping_same = !this.billing_shipping_same;
    };
    MyaccountPage.prototype.checkPassword = function () {
        var strongRegex = new RegExp("^(?=.{6,})");
        if (this.newUser.password && !strongRegex.test(this.newUser.password)) {
            this.toastCtrl.create({
                message: "طول گذرواژه باید حداقل 6 کاراکتر باشد",
                cssClass: "rtl",
                showCloseButton: true,
                closeButtonText: "خب"
            }).present();
            return false;
        } // end if(!strongRegex.test(this.newUser.password))
        else {
            if (this.newUser.password != this.newUser.confirm_password) {
                this.toastCtrl.create({
                    message: "گذرواژه و تکرار آن یکسان نیستند!",
                    showCloseButton: true,
                    cssClass: "rtl",
                    closeButtonText: "خب"
                }).present();
                console.log("password missmach");
                return false;
            }
            console.log('password strong');
            return true;
        }
    }; //end of checkPassword()
    MyaccountPage.prototype.checkEmail = function () {
        var validEmail = false;
        var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!reg.test(this.newUser.email)) {
            //email structure is ok     
            validEmail = false;
            console.log(validEmail);
            this.toastCtrl.create({
                message: "ساختار ایمیل وارد شده معتبر نیست",
                showCloseButton: true,
                closeButtonText: "خب",
                cssClass: "rtl"
            }).present();
            return false;
        }
        else {
            return true;
        }
    };
    MyaccountPage.prototype.signup = function () {
        var _this = this;
        console.log(this.updateUserValidator);
        this.submitAttempt = true;
        if (!this.updateUserValidator.valid) {
            alert("!لطفا ورودی ها را کنترل نمایید و موارد ستاره دار را به درستی تکمیل نمایید.");
            return;
        }
        this.showSpinner();
        var customerData = {
            "email": this.newUser.email,
            "first_name": this.newUser.first_name,
            "last_name": this.newUser.last_name,
            "username": this.newUser.username,
            "password": (this.newUser.password) ? this.newUser.password : null,
            "billing": {
                "first_name": this.newUser.first_name,
                "last_name": this.newUser.last_name,
                "company": this.newUser.billing.company,
                "address_1": this.newUser.billing.address_1,
                "address_2": this.newUser.billing.address_2,
                "city": this.newUser.billing.city,
                "state": this.newUser.billing.state,
                "postcode": this.newUser.billing.postcode,
                "country": this.newUser.billing.country,
                "email": this.newUser.email,
                "phone": this.newUser.billing.phone
            },
            "shipping": {
                "first_name": this.newUser.first_name,
                "last_name": this.newUser.last_name,
                "company": this.newUser.shipping.company,
                "address_1": this.newUser.shipping.address_1,
                "address_2": this.newUser.shipping.address_2,
                "city": this.newUser.shipping.city,
                "state": this.newUser.shipping.state,
                "postcode": this.newUser.shipping.postcode,
                "country": this.newUser.shipping.country
            }
        };
        if (this.billing_shipping_same) {
            this.newUser.shipping = this.newUser.billing;
        }
        /* this.WooCommerce.post('customers', customerData, function(err, data, res) {
              console.log(JSON.parse(res));
            }); */
        this.WooCommerce.putAsync('customers/' + this.newUser.id, customerData).then(function (data) {
            console.log("Raw Data", data);
            console.log(JSON.parse(data.body));
            if (data.statusCode == 200) {
                /* this.events.publish('userLoginInfo', false, null);
                this.storage.remove('cart');
                this.storage.remove("userLoginInfo").then(() => {
                  console.log("User logged Out...");
                }, ) */
                _this.alertCtrl.create({
                    title: "بروزرسانی",
                    message: "اطلاعات شما با موفقیت بروزرسانی شد",
                    cssClass: "rtl",
                    buttons: [{ text: "خب" }]
                }).present();
            }
            else {
                var message = JSON.parse(data.body).message;
                _this.toastCtrl.create({
                    message: message,
                    showCloseButton: true,
                    closeButtonText: "خب",
                    cssClass: "rtl",
                }).present();
            }
            _this.hideSpinner();
        }, function (err) { console.log(err); _this.hideSpinner(); });
    };
    MyaccountPage.prototype.showSpinner = function () {
        this.spinner = this.loadingCtrl.create({
            spinner: "dots"
        });
        this.spinner.present();
    };
    MyaccountPage.prototype.hideSpinner = function () {
        this.spinner.dismiss();
    };
    MyaccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["m" /* Component */])({
            selector: 'page-myaccount',template:/*ion-inline-start:"D:\test-mmarket\src\pages\myaccount\myaccount.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>ویرایش اطلاعات کاربر</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div [formGroup]="updateUserValidator">\n    <ion-list>\n      <ion-item-divider color="danger">مشخصات کاربر</ion-item-divider>\n      <ion-item>\n        <ion-label>نام</ion-label>\n        <ion-input type="text" [(ngModel)]="newUser.first_name" formControlName="firstName"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="!updateUserValidator.controls.firstName.valid  && (updateUserValidator.controls.firstName.dirty || submitAttempt)">\n        <p style="color:red">لطفا یک نام معتبر وارد نمایید.</p>\n      </ion-item>\n      <ion-item>\n        <ion-label>نام خانوادگی</ion-label>\n        <ion-input type="text" [(ngModel)]="newUser.last_name" formControlName="lastName"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="!updateUserValidator.controls.lastName.valid  && (updateUserValidator.controls.lastName.dirty || submitAttempt)">\n        <p style="color:red">لطفا یک نام خانوادگی معتبر وارد نمایید.</p>\n      </ion-item>\n      <ion-item>\n        <ion-label>*ایمیل</ion-label>\n        <ion-input type="email" [(ngModel)]="newUser.email" placeholder="example@gmail.dom :مثال" (blur)="checkEmail()" formControlName="email"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="!updateUserValidator.controls.email.valid  && (updateUserValidator.controls.email.dirty || submitAttempt)">\n        <p style="color:red">لطفا یک ایمیل معتبر وارد نمایید.</p>\n      </ion-item>\n      <ion-item>\n        <ion-label>تغییر گذرواژه</ion-label>\n        <ion-checkbox checked="false" [(ngModel)]="passChange" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n      </ion-item>\n      <div *ngIf="passChange">\n        <ion-item>\n          <ion-label>*گذرواژه جدید</ion-label>\n          <ion-input #pass type="password" [(ngModel)]="newUser.password" formControlName="password"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="!updateUserValidator.controls.password.valid  && (updateUserValidator.controls.password.dirty || submitAttempt)">\n          <p style="color:red">حداقل طول گذرواژه 6 کاراکتر باید باشد</p>\n        </ion-item>\n        <ion-item>\n          <ion-label>*تکرار گذرواژه جدید</ion-label>\n          <ion-input #repass type="password" [(ngModel)]="newUser.confirm_password" formControlName="password"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="pass?.value != repass?.value">\n          <p style="color:red">گذرواژه و تکرار آن یکسان نیستند</p>\n        </ion-item>\n      </div>\n\n\n      <ion-item-divider color="danger"> آدرس ارسال صورتحساب سفارش</ion-item-divider>\n      <ion-item>\n        <ion-label>شرکت</ion-label>\n        <ion-input [(ngModel)]="newUser.billing.company" type="text" [ngModelOptions]="{standalone: true}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>آدرس 1 *</ion-label>\n        <ion-textarea [(ngModel)]="newUser.billing.address_1" type="text" max-length="80" formControlName="address"></ion-textarea>\n      </ion-item>\n      <ion-item *ngIf="!updateUserValidator.controls.address.valid  && (updateUserValidator.controls.address.dirty || submitAttempt)">\n        <p style="color:red">طول آدرس نباید کمتر از 10 نویسه و بیشتر از 100 نویسه باشد.</p>\n      </ion-item>\n      <ion-item>\n        <ion-label>آدرس 2</ion-label>\n        <ion-textarea [(ngModel)]="newUser.billing.address_2" type="text" max-length="80" [ngModelOptions]="{standalone: true}"></ion-textarea>\n      </ion-item>\n      <ion-item hidden>\n        <ion-label>کشور</ion-label>\n        <ion-select [(ngModel)]="newUser.billing.country" [ngModelOptions]="{standalone: true}">\n          <ion-option value="Iran" selected="true">ایران</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>استان-شهر</ion-label>\n        <ion-select [(ngModel)]="newUser.billing.state" [ngModelOptions]="{standalone: true}" interface="action-sheet">\n          <ion-option *ngFor="let state of states" value={{state.code}} >{{state.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>کد پستی یا پلاک *</ion-label>\n        <ion-input [(ngModel)]="newUser.billing.postcode" type="number" clearInput formControlName="postCode"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="!updateUserValidator.controls.postCode.valid  && (updateUserValidator.controls.postCode.dirty || submitAttempt)">\n        <p style="color:red">لطفا یک کد پستی یا پلاک معتبر وارد نمایید. حداکثر 10 رقم</p>\n      </ion-item>\n      <ion-item>\n        <ion-label>* تلفن همراه</ion-label>\n        <ion-input [(ngModel)]="newUser.billing.phone" type="tel" clearInput formControlName="phone"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="!updateUserValidator.controls.phone.valid  && (updateUserValidator.controls.phone.dirty || submitAttempt)">\n        <p style="color:red">یک شماره تماس معتبر حداکثر تا 11 رقم وارد نمایید. </p>\n      </ion-item>\n      <ion-item>\n        <ion-label>سفارش، به آدرس فوق ارسال شود</ion-label>\n        <ion-checkbox checked="true" (ionChange)="setBillingToShipping()"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n    <ion-item>\n      <ion-label>قوانین و مقررات را می پذیرم</ion-label>\n      <ion-checkbox checked="false" formControlName="rules" [class.invalid]="!updateUserValidator.controls.rules.valid && (updateUserValidator.controls.rules.dirty || submitAttempt)"></ion-checkbox>\n    </ion-item>\n    <ion-item *ngIf="!updateUserValidator.controls.rules.valid  && (updateUserValidator.controls.rules.dirty || submitAttempt)">\n      <p style="color:red">شما برای ادامه می بایست قوانین را بپذیرید! </p>\n    </ion-item>\n\n\n    <!-- Shipping Address -->\n\n    <ion-list *ngIf="!billing_shipping_same">\n      <ion-item-divider color="danger">آدرس ارسال کالای سفارش</ion-item-divider>\n\n      <ion-item>\n        <ion-label>شرکت</ion-label>\n        <ion-input [(ngModel)]="newUser.shipping.company" type="text" [ngModelOptions]="{standalone: true}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>آدرس 1</ion-label>\n        <ion-textarea [(ngModel)]="newUser.shipping.address_1" type="text" [ngModelOptions]="{standalone: true}"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label>آدرس 2</ion-label>\n        <ion-textarea [(ngModel)]="newUser.shipping.address_2" type="text" max-length="80" [ngModelOptions]="{standalone: true}"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label>کشور</ion-label>\n        <ion-select [(ngModel)]="newUser.shipping.country" [ngModelOptions]="{standalone: true}">\n          <ion-option value="Iran" selected="true">ایران</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>استان</ion-label>\n        <ion-select>\n          <ion-option value="Golestan" selected="true"> گلستان</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>شهر</ion-label>\n        <ion-input [(ngModel)]="newUser.shipping.city" type="text" [ngModelOptions]="{standalone: true}"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>کد پستی یا پلاک *</ion-label>\n        <ion-input [(ngModel)]="newUser.shipping.postcode" type="number" [ngModelOptions]="{standalone: true}" clearInput></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>تلفن</ion-label>\n        <ion-input [(ngModel)]="newUser.shipping.phone" type="tel" [ngModelOptions]="{standalone: true}" clearInput></ion-input>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <button ion-button block round color="danger" (click)="signup()" [disabled]="newUser.password != newUser.confirm_password ">ذخیره</button>\n</ion-footer>'/*ion-inline-end:"D:\test-mmarket\src\pages\myaccount\myaccount.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["u" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1__providers_woo_commerce_woo_commerce__["a" /* WooCommerceProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular_util_events__["a" /* Events */]])
    ], MyaccountPage);
    return MyaccountPage;
}());

//# sourceMappingURL=myaccount.js.map

/***/ })

});
//# sourceMappingURL=11.js.map