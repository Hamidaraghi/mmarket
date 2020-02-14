import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import * as WC from 'woocommerce-api';
import { RequestOptions, Http, Headers } from '@angular/http';
import { resolveDefinition } from '@angular/core/src/view/util';

/*
  Generated class for the WooCommerceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WooCommerceProvider {
  WooCommerce: any;
  WooCommerce3: any;
  uapRestUrlV1 = "https://mmarket.ir/wp-json/ultimate-affiliates-pro/v1";
  uapRestUser = "affiliate";
  uapRestPassword = "YpBUadO@r#CdD(r^&dha54j1";

  TerminalId = 0;
  sepCallBackUrl = '';
  sepUrl = '';
  sepMerchantPassword = 0;

  productSlider = "https://mmarket.ir/wp-json/wooslider/product/getslider";

  constructor(private storage: Storage, private http: Http) {

    // let headers = new Headers();
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // headers.append('Accept', 'application/json');
    // headers.append('Authorization', 'Basic ' + token);

    // let options = new RequestOptions({ headers: headers });

    // this.http.get("url", options)
    //   .map(response => response)

    this.WooCommerce = WC({
      url: "https://mmarket.ir",
      consumerKey: "ck_bd53f75be04d6545552260c09a78c3e4ccad6afa",
      consumerSecret: "cs_b92b582450149a070d4bd7c7aefc4bcde2ff47c7",

      // consumerKey: "ck_ee78b1f4c5db7f296b06ba1758e19b6296578002",
      // consumerSecret: "cs_9677bda22e2d56c70d49ea6b87a188e2f27afa71",
      wpAPI: true,
      version: 'wc/v2',
    });

    this.WooCommerce3 = WC({
      url: "https://mmarket.ir",
      consumerKey: "ck_bd53f75be04d6545552260c09a78c3e4ccad6afa",
      consumerSecret: "cs_b92b582450149a070d4bd7c7aefc4bcde2ff47c7",

      // consumerKey: "ck_ee78b1f4c5db7f296b06ba1758e19b6296578002",
      // consumerSecret: "cs_9677bda22e2d56c70d49ea6b87a188e2f27afa71",
      wpAPI: true,
      version: 'wc/v3',
    });


    this.WooCommerce3.getAsync("sep/v1/get-sep-vars").then((data) => {
      data = JSON.parse(data.body);
      console.log("DDDDDDDDDDDDDDDD", data.sepUrl);
      this.TerminalId = data.TerminalId;
      this.sepCallBackUrl = data.sepCallBackUrl;
      this.sepUrl = data.sepUrl;
      this.sepMerchantPassword = data.sepMerchantPassword;
    })


  }

  getUser(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storage.get("userLoginInfo").then((user) => {
        resolve(user);
      }, (error) => { reject(error); console.log("Get User info failed from storage") })
    })
  } // End Get user()

  setUser(userLoginInfo): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storage.set("userLoginInfo", userLoginInfo)
    })
  }

  init() {
    return this.WooCommerce;
  }

  getSepUrl() {
    return this.sepUrl;
  }

  async getAffiliateRankDetails(affiliateId: number): Promise<any> {
    return new Promise((resolve, reject) => {


      let headers = new Headers();

      headers.append('authorization', 'Basic ' + btoa(this.uapRestUser + ':' + this.uapRestPassword));

      this.http.get(this.uapRestUrlV1 + "/get-affiliate-rank-details/" + affiliateId, { headers: headers })
        .map(res => res.json()).subscribe(data => {
          console.log("GET AFFILIATE RANK DETAILS:::::::========:::::::::", ((JSON.parse(data))))

          resolve(JSON.parse(data))
          JSON.parse(data);
        })
    })

  }


  addReferral(addReferralData: any): Promise<any> {

    return new Promise((resolve, reject) => {

      //search if affiliateId is exist or not

      // let addReferralData = { "refferal_wp_uid": referralWpUid , "campaign": "", "affiliate_id": this.affiliateId, "visit_id": "", "description": "register user via app",
      // "source": "اپلیکیشن", "reference": "q", "reference_details": "app-register", "parent_referral_id": "", "child_referral_id": "",
      // "amount": "", "currency": "IRT", "status": 1, "payment": 0 }

      if (!addReferralData.affiliate_id) { console.log("there is no affiliate!"); reject("no affiliate id is provided") }

      let headers = new Headers();
      headers.append('authorization', 'Basic ' + btoa(this.uapRestUser + ':' + this.uapRestPassword));

      this.http.put(this.uapRestUrlV1 + "/add-referral", addReferralData, { headers: headers })
        .map(res => res.json()).subscribe(data => {
          console.log("add-referral:::::::========:::::::::", ((JSON.parse(data))))

          resolve(JSON.parse(data));
        })
    })

  }

  // get affiliate of woocommerce customer
  getUserReferrer(userId: number): Promise<any>{
    return new Promise ((resolve, reject)=>{
      this.WooCommerce3.postAsync("sep/v1/get-referrer-id?", {"referral_wp_uid": userId}).then(data=>{
        console.log('REFERRER ID IS:::::::::::::::::::::',data.body);
        resolve(data.body)
      }, error=>{console.log(error); reject(error)})

    })
  }

  addAffiliateRelation(affiliateId, referralWpUid): Promise<any> {
    return new Promise((resolve, reject) => {
      //add relation between this new user and its affiliate
      let insertAffiliateReferralUserNewRelationData = ({ "affiliate_id": affiliateId, "referral_wp_id": referralWpUid })
      this.WooCommerce3.postAsync('sep/v1/insert-affiliate-referral-user-new-relation', insertAffiliateReferralUserNewRelationData).then(relation => {
        console.log("RELATION IS: $$$$$$$$$$$$$$$$$$$$", relation);
        resolve(relation)
      }, error => { console.log(error); reject(error) })
    })
  }
  
}
