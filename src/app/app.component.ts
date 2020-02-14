import { Events } from 'ionic-angular/util/events';
import { Component, ViewChild, NgZone } from '@angular/core';
import { Nav, Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';
import {App} from 'ionic-angular';

import { OneSignal } from '@ionic-native/onesignal';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = 'Menu';
  disconnect: boolean;
  ProductDetails = 'ProductDetails';
  ProductsByCategory = 'ProductsByCategory'

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    public oneSignal: OneSignal, public ngZone: NgZone, public Network: Network, public toastCtrl: ToastController,
    public events: Events, public InAppBrowser: InAppBrowser, public app: App) {
    this.initializeApp();

  }


  openLink(url: string, external: boolean = false) {
    if (!url) return;
    console.log("Slide url is: ", url)
    if (url.indexOf("link://") == 0) {
      url = url.replace("link://", "");
      console.log(url)
      let data = url.split("/");
      console.log(data);
      if (data[0] == "product") { this.app.getActiveNav().push(this.ProductDetails, { id: data[1] }) }

      else if (data[0] == "product-category") {this.app.getActiveNav().push(this.ProductsByCategory, { id: data[1] });}

    } else if (!external) {
      this.InAppBrowser.create(url, "_blank", "location=no");
      console.log(url);
    }
  }


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
     

   
      if (this.Network.type == "none") {
        this.toastCtrl.create({
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

      this.oneSignal.startInit('9b1578d0-ce98-4155-959e-ef9cd4f879a1', '806609752182');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe((handleNotificationReceived) => {
        // do something when notification is received
        console.log('handleNotificationReceived',handleNotificationReceived)
      });

      this.oneSignal.handleNotificationOpened().subscribe((handleNotificationOpened) => {
        // do something when a notification is opened
        let notLink = handleNotificationOpened.notification.payload.additionalData.link;
        console.log('handleNotificationOpened', notLink);
        if (notLink){this.openLink(notLink)}        
      });

      this.oneSignal.endInit();

    });
  }

}