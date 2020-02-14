webpackJsonp([13],{

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login__ = __webpack_require__(926);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_0__login__["a" /* Login */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__login__["a" /* Login */])],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 926:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(217);
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




var Login = /** @class */ (function () {
    function Login(events, navCtrl, navParams, http, toastController, storage, alertController) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastController = toastController;
        this.storage = storage;
        this.alertController = alertController;
        this.searchQuery = '';
        this.Signup = 'Signup';
        this.PasswordresetPage = 'PasswordresetPage';
        this.username = "";
        this.password = "";
    }
    Login.prototype.passwordReset = function () {
        var _this = this;
        var secret = Math.floor(Math.random() * 90000) + 10000;
        /*   var url = "http://panel.websmspanel.ir/post/send.asmx";
          let postData = new FormData();
          postData.append('from', '50001333885200');
          postData.append('to', '9117966486');
          postData.append('text', secret.toString());
          postData.append('password', 'hamidvahid2012');
          postData.append('username', 'h_araghi');
          postData.append('UDH', '');
          postData.append('IsFlash', 'false');
          postData.append('recId', '');
          postData.append('status', '');
          
          this.http.post(url, postData).subscribe(res=>{
            console.log(res);
          }) */
        this.http.post("http://panel.websmspanel.ir/post/sendsms.ashx?from=50001333885200&to=9117966486&text=" + secret + "&password=hamidvahid2012&username=h_araghi", "SendSms")
            .subscribe(function (res) {
            console.log(res);
            if (res.ok) {
                _this.toastController.create({
                    message: "پیامک حاوی کد تغییر رمز به شماره تلفن همراه شما ارسال شد.",
                    duration: 5000
                }).present();
                return;
            }
        });
    };
    Login.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    Login.prototype.login = function () {
        var _this = this;
        this.http.get("https://mmarket.ir/api/auth/generate_auth_cookie/?insecure=cool&username=" + this.username + "&password=" + this.password)
            .subscribe(function (res) {
            console.log(res.json());
            var response = res.json();
            if (response.error) {
                var error = "";
                if (error.indexOf("Invalid username")) {
                    error = "نام کاربری یا کلمه عبور اشتباه است";
                }
                else {
                    error = response.error;
                }
                _this.toastController.create({
                    message: error,
                    duration: 5000,
                    cssClass: 'rtl'
                }).present();
                return;
            }
            // Bublishing login user
            _this.events.publish('userLoginInfo', true, response);
            _this.storage.set("userLoginInfo", response).then(function (data) {
                _this.alertController.create({
                    title: "ورود موفق",
                    message: "شما با موفقیت وارد شده اید.",
                    buttons: [{
                            text: "خب",
                            handler: function () {
                                if (_this.navParams.get("next")) {
                                    _this.navCtrl.push(_this.navParams.get("next"));
                                }
                                else {
                                    _this.navCtrl.popToRoot();
                                }
                            }
                        }],
                    cssClass: 'rtl'
                }).present();
            }, function (err) { return console.log(err); });
        });
    };
    Login.prototype.onSearch = function (event) {
        if (this.searchQuery.length > 0) {
            this.navCtrl.push('SearchPage', { "searchQuery": this.searchQuery });
        }
    };
    Login = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\mmarket\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>ورود به حساب کاربری</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n  <ion-card dir="rtl">\n    <img src="https://mmarket.ir/logo-wide.png" style="background-color:darkmagenta" />\n  </ion-card>\n  <ion-list>\n  <ion-item>\n    <ion-label floating>شماره موبایل</ion-label>\n    <ion-input [(ngModel)]="username" type="text"></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-label floating>گذرواژه (رمز):</ion-label>\n      <ion-input [(ngModel)]="password" type="password"></ion-input>\n    </ion-item>\n  </ion-list>\n<button ion-button color="danger" round block (click)="login()" >ورود</button>\n<button ion-button round block outline [navPush]="Signup" >ثبت نام</button>\n<button ion-button block clear outline [navPush]="PasswordresetPage" >گذرواژه خود را فراموش کرده اید؟ بازیابی گذرواژه</button>\n</ion-content>'/*ion-inline-end:"C:\mmarket\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* Events */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["u" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
    ], Login);
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=13.js.map