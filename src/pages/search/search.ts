import { WooCommerceProvider } from './../../providers/woo-commerce/woo-commerce';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, ToastController, IonicPage } from 'ionic-angular';
import { NetworkInterface } from '@ionic-native/network-interface';
import { Storage } from '@ionic/storage';

@IonicPage({})
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  spinner: any;
  searchQuery: string = "";
  WooCommerce: any = {};
  products: any[] = [];
  page: number = 2;
  showEmptyResault: boolean = false;
  userId:number = 0;
  userIp: string ='';


  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public navParams: NavParams,
    public loadingCtrl: LoadingController, private ngZone: NgZone, public wp: WooCommerceProvider, private storage: Storage,
    private networkInterface: NetworkInterface) {

    console.log(this.navParams.get("searchQuery"));
    this.searchQuery = this.navParams.get("searchQuery");

    this.WooCommerce = wp.WooCommerce;


    var promises = [];
    
    //get wifi ip
    promises.push(this.networkInterface.getWiFiIPAddress()
    .then(address => {
      console.info(`WifiIP: ${address.ip}, Subnet: ${address.subnet}`)
      this.userIp += `WifiIp: ${address.ip}, Subnet: ${address.subnet}`

    })
    .catch(error => console.error(`Unable to get IP: ${error}`)));
    //get carrierIp
    promises.push(this.networkInterface.getCarrierIPAddress()
    .then(address =>{
      console.info(`CarrierIP: ${address.ip}, Subnet: ${address.subnet}`)
      this.userIp += `CarrierIP: ${address.ip}, Subnet: ${address.subnet}`
    })
    .catch(error => console.error(`Unable to get IP: ${error}`)));

    
promises.push( this.storage.get("userLoginInfo").then((userLoginInfo) => {
      if (userLoginInfo != null) {
        this.userId = userLoginInfo.user.id

      } else {
        console.log("No user logged in");
        this.userId = 0;
      }
    }));

    Promise.all(promises).then(()=>{
      var saveSearchData = {search_term :this.searchQuery,user_id : this.userId ,ip : this.userIp }

      this.wp.WooCommerce3.postAsync('sep/v1/search-stats', saveSearchData).then((data) => {
        console.log('MMMMMMMMMMM', data.body)
        let res = (JSON.parse(data.body));
        console.log('SSSSSSSSEEEEEEEEEEEEEERRRRRRRRR',res);
      })
    })
    

    this.WooCommerce.getAsync("products?search=" + this.searchQuery).then((searchdata => {
      this.ngZone.run(() => {
        this.products = JSON.parse(searchdata.body);
      })

      if (this.products.length == 0 || this.products.length == null) {
        this.ngZone.run(() => {
          this.showEmptyResault = true;
        })

      }
    }), (error) => {
      console.log(error);
    }); // end of this.WooCommerce.getAsync

  }// end of constructor

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  loadMoreProducts(event) {

    this.WooCommerce.getAsync("products?search=" + this.searchQuery + "&page=" + this.page).then((searchData) => {
      this.ngZone.run(() => {
        this.products = this.products.concat(JSON.parse(searchData.body));
      })

      if (JSON.parse(searchData.body).length < 10) {
        event.enable(false);

        this.toastCtrl.create({
          message: "پایان ...",
          duration: 5000
        }).present();
      }
      event.complete();
      this.page++;
    });
  }

  openProductPage(product) {
    this.navCtrl.push('ProductDetails', { "product": product });

  }

}
