import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import * as WC from 'woocommerce-api';
import { Http, Headers } from '@angular/http';


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
      //consumerKey: "ck_41d95c94400748d34e1a74a74290587cbc0c12a8",
      //consumerSecret: "cs_589c304a69d875aef7610a7b2418e52c691a6bf2",

      consumerKey: "ck_bd53f75be04d6545552260c09a78c3e4ccad6afa",
      consumerSecret: "cs_b92b582450149a070d4bd7c7aefc4bcde2ff47c7",

      wpAPI: true,
      version: 'wc/v2',
      queryStringAuth: true,
    });

    this.WooCommerce3 = WC({
      url: "https://mmarket.ir",
      // consumerKey: "ck_41d95c94400748d34e1a74a74290587cbc0c12a8",
      // consumerSecret: "cs_589c304a69d875aef7610a7b2418e52c691a6bf2",

      consumerKey: "ck_bd53f75be04d6545552260c09a78c3e4ccad6afa",
      consumerSecret: "cs_b92b582450149a070d4bd7c7aefc4bcde2ff47c7",
      wpAPI: true,
      version: 'wc/v3',
      queryStringAuth: true,
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

  async getAffiliateRankDetails(affiliateId?): Promise<any> {



    return new Promise((resolve, reject) => {

      if (!affiliateId) { console.log("No affiliate code added"); resolve("No affiliate entered") }

      console.log(affiliateId);

      let headers = new Headers();

      headers.append('authorization', 'Basic ' + btoa(this.uapRestUser + ':' + this.uapRestPassword));
      //headers.append('queryStringAuth', 'true')

      this.http.get(this.uapRestUrlV1 + "/get-affiliate-rank-details/" + affiliateId, { headers: headers })
        .map(res => res.json())
        .subscribe(data => {
          console.log("GET AFFILIATE RANK DETAILS:::===:::", ((JSON.parse(data))));
          let affRankDetail = JSON.parse(data)
          if (affRankDetail.id > 0) {
            resolve(affRankDetail);
          } else { reject({ errorCode: "-1", "error._body": "Affiliate is not affiliate!..." }) }
        },

          error => { console.log(error); reject(error) })

    })

  }


  addOrderReferral(userId, reference, orderTotal, currency): Promise<any> {
    /*
    @params: orderId , orderTotal, userId    
    */

    console.log(userId)

    return new Promise((resolve, reject) => {
      /////////////////////////////////
      // add referral
      //get rank amount and other affiliate data
      this.getUserReferrer(userId).then(async affiliateId => {
        console.log("############", affiliateId)
        if (affiliateId > 0) { // affiliate exist

          let rankDetails = await this.getAffiliateRankDetails(affiliateId);
          console.log(rankDetails)

          // if (rankDetails.id <= 0){
          //   reject({errorCode:-1, "erro._body":"affiliate rank is not true or exist!"})
          // }

          console.log(affiliateId)
          //get rank amount and other affiliate data
          console.log("@@@@@@@@@@@@", rankDetails)

          let referralAmount
          let addReferralData

          // add referral for customer order
          if (rankDetails.lifetime_amount_type == "percentage") {

            referralAmount = orderTotal * rankDetails.lifetime_amount_value / 100
            console.log(referralAmount);

          } else if (rankDetails.lifetime_amount_type == "flat") {

            referralAmount = rankDetails.lifetime_amount_value

          }

          addReferralData =
          {
            "refferal_wp_uid": userId, "campaign": "", "affiliate_id": affiliateId, "visit_id": "", "description": "", "source": "woo",
            "reference": reference, "reference_details": "App", "parent_referral_id": "", "child_referral_id": "", "amount": referralAmount,
            "currency": currency, "status": 1, "payment": 0
          }



          let headers = new Headers();
          headers.append('authorization', 'Basic ' + btoa(this.uapRestUser + ':' + this.uapRestPassword));

          this.http.put(this.uapRestUrlV1 + "/add-referral", addReferralData, { headers: headers })
            .map(res => res.json()).subscribe(data => {
              console.log("add-referral:::::::========:::::::::", ((JSON.parse(data))))

              resolve(JSON.parse(data));
            })



        } else { reject({ 'error': "affiliate does not exist", 'description': "همکار فروش با این کد وجود ندارد." }) }

      }).catch(error => { console.log(error) })


    })

  }


  addSignupReferral(userId, rankDetails, affiliateId) {


    if (rankDetails.sign_up_amount_value < 0) { //user signup referral is disabled in site
      return ({ "erro": "user signup referral is disabled in uap settings." });
    }

    let addReferralData =
    {
      "refferal_wp_uid": userId, "campaign": "", "affiliate_id": affiliateId, "visit_id": "", "description": "register user via app",
      "source": "app signup", "reference": "userSignup:" + userId, "reference_details": "app-register", "parent_referral_id": "", "child_referral_id": "",
      "amount": rankDetails.sign_up_amount_value, /* "currency": "IRT", */ "status": 1, "payment": 0
    }


    let headers = new Headers();
    headers.append('authorization', 'Basic ' + btoa(this.uapRestUser + ':' + this.uapRestPassword));

    this.http.put(this.uapRestUrlV1 + "/add-referral", addReferralData, { headers: headers })
      .map(res => res.json()).subscribe(data => {
        console.log("add-referral:::::::========:::::::::", ((JSON.parse(data))))
      })

  }



  // get affiliate of woocommerce customer
  getUserReferrer(userId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.WooCommerce3.postAsync("sep/v1/get-referrer-id?", { "referral_wp_uid": userId }).then(data => {
        console.log(data)
        console.log('REFERRER ID IS:::::::::::::::::::::', data.body);
        resolve(data.body)
      }, error => { console.log(error); reject(error) })

    })
  }


  //  async validateaAffiliate(affId){

  //    let affRank = await this.WooCommerce3.getAsync('sep/v1/get-affiliate-rank/' + affId)

  //       console.log(affRank);

  //       if (affRank.statusCode != 200){ console.log("error getting aff rank"); return({ error: "Error geting aff rank", errorDescription:"کد معرف معتبر نیست یا هنوز همکار فروش نشده است" })}

  //       return(JSON.parse(affRank.body));

  //     //}, error => { console.log(error); reject({ error: "Error geting aff rank" }) })

  //   }


  async addAffiliateRelation(affiliateId, referralWpUid): Promise<any> {

    let res = await this.getAffiliateRankDetails(affiliateId)
    if (!res) return;

    console.log(res);
    if (res.error) { // affiliate rank not found
      alert(res.errorDescription);
      return;
    }

    return new Promise((resolve, reject) => {

      //add relation between this new user and its affiliate
      let insertAffiliateReferralUserNewRelationData = ({ "affiliate_id": affiliateId, "referral_wp_id": referralWpUid })
      this.WooCommerce3.postAsync('sep/v1/insert-affiliate-referral-user-new-relation', insertAffiliateReferralUserNewRelationData).then(relation => {
        console.log("RELATION IS: $$$$$$$$$$$$$$$$$$$$", relation);
        resolve(relation)
      }, error => { console.log(error); reject(error) })




    })
  }



  ////for test only
  // test(affiliateId) {
  //   return new Promise((resolve, reject) => {

  //     let headers = new Headers();
  //     headers.append('authorization', 'Basic ' + btoa(this.uapRestUser + ':' + this.uapRestPassword));
  //     this.http.get(this.uapRestUrlV1 + "/get-user-data/" + affiliateId, { headers: headers })
  //       .map(res => res.json())
  //       .subscribe(data => {
  //         console.log("User Date is:::===:::", ((JSON.parse(data))));
  //         resolve(JSON.parse(data))
  //       },

  //         error => { console.log(error); reject(error) })
  //   })

  // }

}
