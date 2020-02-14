import { WooCommerceProvider } from './../../providers/woo-commerce/woo-commerce';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, ToastController, IonicPage } from 'ionic-angular';

@IonicPage({})
@Component({
  selector: 'page-query-result',
  templateUrl: 'query-result.html',
})
export class QueryResult {
 
  page: number = 2;
  showEmptyResault: boolean = false;
  spinner: any;
  query: string = this.navParams.get('query');
  pageTitle: string = this.navParams.get('pageTitle')
  WooCommerce: any;
  queryResultArray: any[]=[];
  ProductDetails = 'ProductDetails';
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
    public toastCtrl: ToastController, private ngZone: NgZone, public wp: WooCommerceProvider) {
    console.log('query:', this.query)
    //this.showSpinner();
    this.WooCommerce = wp.WooCommerce
    
     this.WooCommerce.getAsync(this.query).then((res) => {
      console.log(JSON.parse(res.body))
      
      this.ngZone.run(()=>{
        this.queryResultArray = (JSON.parse(res.body));
      })
      
      console.log('query result is:', this.query + ": " + this.queryResultArray);
      if (this.queryResultArray == null || this.queryResultArray.length<1){
        this.showEmptyResault = true;
      }
      //this.hideSpinner();
    }, (error) => { console.log(error) }) 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QueryResultPage');
  }

  showSpinner() {
    this.spinner = this.loadingCtrl.create({
      spinner: "dots",
      showBackdrop: false
    });
    this.spinner.present();
  }

  hideSpinner() {
    this.spinner.dismiss();
  }

  loadMoreProducts(event) {
    
    this.WooCommerce.getAsync(this.query + "&page=" + this.page).then((searchData) => {
      this.ngZone.run(()=>{
        this.queryResultArray = this.queryResultArray.concat(JSON.parse(searchData.body));
      });

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
  
  }// end loadMoreProducts

}
