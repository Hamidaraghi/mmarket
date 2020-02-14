import { BrowserTab } from '@ionic-native/browser-tab';
import { AppVersion } from '@ionic-native/app-version';
import { Network } from '@ionic-native/network';
import { NetworkInterface } from '@ionic-native/network-interface';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Tab } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Deeplinks } from '@ionic-native/deeplinks';

import { MyApp } from './app.component';

import { Cart } from '../pages/cart/cart';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WooCommerceProvider } from '../providers/woo-commerce/woo-commerce';
import {OneSignal} from '@ionic-native/onesignal';
import { IonicImageViewerModule } from 'ionic-img-viewer';


@NgModule({
  declarations: [
    MyApp,
    Cart
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    IonicImageViewerModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Cart    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser,    
    Deeplinks,
    WooCommerceProvider,
    OneSignal,
    Network,
    NetworkInterface,
    AppVersion,
    BrowserTab,
  ]
})
export class AppModule {}
