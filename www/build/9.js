webpackJsonp([9],{

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordresetPagePageModule", function() { return PasswordresetPagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__passwordreset__ = __webpack_require__(932);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PasswordresetPagePageModule = /** @class */ (function () {
    function PasswordresetPagePageModule() {
    }
    PasswordresetPagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_0__passwordreset__["a" /* PasswordresetPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__passwordreset__["a" /* PasswordresetPage */])],
        })
    ], PasswordresetPagePageModule);
    return PasswordresetPagePageModule;
}());

//# sourceMappingURL=passwordreset.module.js.map

/***/ }),

/***/ 932:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordresetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular_components_toast_toast_controller__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_woo_commerce_woo_commerce__ = __webpack_require__(216);
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





var PasswordresetPage = /** @class */ (function () {
    function PasswordresetPage(navCtrl, navParams, WP, http, ngZone, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.WP = WP;
        this.http = http;
        this.ngZone = ngZone;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.WooCommerce = {};
        this.WooCommerce3 = {};
        this.userName = '';
        this.phone = null;
        this.maskedPhone = '';
        this.user = {};
        this.submitAttempt = false;
        this.sendCodeSubmitAttempt = false;
        this.secret = '';
        this.secretMatch = '';
        this.isLoading = false;
        this.newPassword = null;
        this.timer = 120;
        this.timeOut = {};
        this.interval = {};
        this.WooCommerce3 = WP.WooCommerce3;
        this.WooCommerce = this.WP.init();
    }
    PasswordresetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PasswordresetPage');
    };
    PasswordresetPage.prototype.resetPasswordByUserName = function (userName) {
        var _this = this;
        this.submitAttempt = true;
        var userData = { "field": "login", "value": userName };
        this.WooCommerce3.postAsync('sep/v1/get-user/', userData).then(function (data) {
            console.log(data);
            if (data.body == "null") {
                alert("هیچ کاربری با این شناسه یافت نشد!");
                _this.ngZone.run(function () {
                    _this.submitAttempt = false;
                    _this.isLoading = false;
                });
                return;
            }
            _this.isLoading = true;
            _this.submitAttempt = true;
            _this.timer = 120;
            var ID = JSON.parse(data.body);
            _this.user.id = ID;
            console.log(_this.user);
            _this.passwordResetByPhone(userName);
        });
    };
    /* checkEmail(email) {
      
      let validEmail = false;
      let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
      if (!reg.test(email)) {
        //email structure is ok
        validEmail = false;
        console.log(validEmail);
        this.toastCtrl.create({
          message: "ساختار ایمیل وارد شده معتبر نیست",
          showCloseButton: true,
          closeButtonText: "خب",
          cssClass: "rtl"
        }).present();
        return false
      } else { return true; }
  
    } */
    PasswordresetPage.prototype.passwordResetByPhone = function (phone) {
        var _this = this;
        this.timer = 120;
        this.ngZone.run(function () {
            _this.sendCodeSubmitAttempt = true;
        });
        this.secret = (Math.floor(Math.random() * 90000) + 10000).toString();
        console.log(this.secret);
        var smsData = { "to": phone, "msg": this.secret };
        this.WooCommerce3.postAsync("sep/v1/send-sms", smsData).then(function (res) {
            console.log(res);
            if (res.statusCode == 200) {
                //todo: statuscode 200 is not meaning successfull send
                _this.toastCtrl.create({
                    message: "پیامک حاوی کد تغییر رمز به شماره تلفن همراه شما ارسال شد.",
                    duration: 5000
                }).present();
                _this.timeOut = setTimeout(function () {
                    _this.sendCodeSubmitAttempt = false;
                    alert(' بازیابی رمز بیش از محدوده زمانی به طول انجامید، لطفا بعدا دوباره تلاش کنید.');
                    _this.secret = null;
                    _this.isLoading = false;
                    _this.submitAttempt = false;
                    clearInterval(_this.interval);
                }, _this.timer * 1000);
                clearInterval(_this.interval);
                _this.interval = setInterval(function () {
                    if (_this.timer >= 0)
                        _this.ngZone.run(function () {
                            _this.timer--;
                        });
                }, 1000);
            }
            else {
                _this.submitAttempt = false;
                _this.isLoading = false;
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
    PasswordresetPage.prototype.verifySecret = function (secretMatch) {
        if (secretMatch == this.secret) {
            //alert("your secret is True")
            clearInterval(this.interval);
            clearTimeout(this.timeOut);
            return true;
            //this.updateUser(this.user, this.newPassword);
        }
        else {
            alert("عدد وارد شده درست نمی باشد!");
            return false;
        }
    };
    PasswordresetPage.prototype.updateUserPassword = function (user, newPassword) {
        var _this = this;
        console.log(user);
        console.log(newPassword);
        var strongRegex = new RegExp("^(?=.{6,})");
        if (!strongRegex.test(newPassword)) {
            this.toastCtrl.create({
                message: "طول گذرواژه باید حداقل 6 کاراکتر باشد",
                cssClass: "rtl",
                showCloseButton: true,
                closeButtonText: "خب"
            }).present();
            return;
        }
        else {
            //بروزرسانی کاربر با رمز جدید
            var data = { "password": newPassword };
            this.WooCommerce3.put('customers/' + user.id, data, function (err, data, res) {
                console.log(res);
                console.log(data);
                if (data.statusCode == 200 && data.statusMessage == "OK") {
                    // successful password change
                    /*  clearInterval(this.interval);
                     clearTimeout(this.timeOut); */
                    _this.alertCtrl.create({
                        title: "تغییر گذرواژه",
                        message: "گذرواژه شما با موفقیت تغییر یافت. لطفا وارد حساب کاربری خود شوید",
                        cssClass: "rtl",
                        buttons: [{
                                text: "ورود", handler: function () {
                                    _this.navCtrl.pop();
                                },
                            }]
                    }).present();
                }
                else {
                    clearInterval(_this.interval);
                    clearTimeout(_this.timeOut);
                    console.log(data);
                    alert('خطایی رخ داده است. لطفا بعدا دوباره تلاش کنید');
                }
            });
        }
    };
    PasswordresetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-passwordreset',template:/*ion-inline-start:"D:\test-mmarket\src\pages\passwordreset\passwordreset.html"*/'<!--\n  Generated template for the PasswordresetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>بازیابی گذرواژه</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content dir="rtl">\n  <ion-list>\n    <!-- If user knows his/her email-->\n    <div>\n      <ion-item>\n        <ion-label stacked>شماره تلفن همراه </ion-label>\n        <ion-input type="text" [(ngModel)]="userName" ></ion-input>\n      </ion-item>\n      <ion-item>\n        <button [disabled]="submitAttempt" type="submit" ion-button block round (click)="resetPasswordByUserName(userName)">ارسال کد بازیابی گذرواژه</button>\n      </ion-item>\n      <ion-spinner class="button-spinner" *ngIf="((!user) && submitAttempt)" name="ios"></ion-spinner>\n<!--       <ion-item *ngIf="submitAttempt" text-wrap>\n        <p dir="rtl">ارسال کد بازیابی رمز از طریق پیامک به شماره فوق</p>\n        \n        <button ion-button full round [disabled]="senCodeSubmitAttempt" (click)="passwordResetByPhone(phone)"> ارسال کد</button>\n      </ion-item> -->\n      <div *ngIf="submitAttempt">\n        <ion-item>\n          <ion-label stacked>کد پیامکی دریافت شده را وارد نمایید: {{timer}} ثانیه</ion-label>\n          <ion-input [(ngModel)]="secretMatch" placeholder="مثال: 12345" #textInput type="text" (input)="textInput.value.length >= 5 && verifySecret(textInput.value)"></ion-input>\n      </ion-item>\n      </div>\n\n      <div *ngIf="secretMatch == secret && submitAttempt">\n        <ion-item>\n          <ion-label>گذرواژه جدید</ion-label>\n          <ion-input [(ngModel)]="newPassword" type="password" #pass> </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>تکرار گذرواژه جدید</ion-label>\n          <ion-input type="password" #repass> </ion-input>\n        </ion-item>\n        <ion-item>\n          <button ion-button #subPass [disabled]="(pass.value != repass.value) || (pass.value.length == 0)" (click)="updateUserPassword(user, newPassword)" round block >تغییر گذرواژه</button>\n        <ion-spinner *ngIf="subPass.pressed" ></ion-spinner>\n        </ion-item>\n      </div>\n\n      <ion-item *ngIf="!phone && !isLoading && submitAttempt" text-wrap>\n        <p>شماره تلفن همراه برای اکانت شما ثبت نشده است. بازیابی رمز از طریق ایمیل:</p>\n      </ion-item>\n    </div>\n\n\n    <!-- If user does not know email -->\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\test-mmarket\src\pages\passwordreset\passwordreset.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["r" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["r" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_woo_commerce_woo_commerce__["a" /* WooCommerceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_woo_commerce_woo_commerce__["a" /* WooCommerceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* NgZone */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular_components_toast_toast_controller__["a" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular_components_toast_toast_controller__["a" /* ToastController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */]) === "function" && _g || Object])
    ], PasswordresetPage);
    return PasswordresetPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=passwordreset.js.map

/***/ })

});
//# sourceMappingURL=9.js.map