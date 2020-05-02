import { Events } from 'ionic-angular/util/events';
import { WooCommerceProvider } from './../../providers/woo-commerce/woo-commerce';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { Http } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Cart } from './../cart/cart';
import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, ModalController, IonicPage } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { ImageViewerController } from 'ionic-img-viewer';


@IonicPage({})
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetails {
  WooCommerce: any;
  WooCommerce3: any;
  product: any = {};
  reviews: any[] = [];
  qty: number = 1;
  productDetails: FormGroup;
  isRefreshing: boolean = true;
  newRating: number = null;
  review: string = '';
  reviewer: string = '';
  reviewerEmail: string = '';
  reviewValidator: FormGroup;
  submitAttempt: boolean = false;
  user: any = {};
  spinner: any;
  usPesllProducts: any[] = [];
  crossSellProducts: any[] = [];
  ProductDetails = 'ProductDetails';
  selectedOptions: any = {};
  requireOptions: boolean = true;
  productVariations: any[] = [];
  _imageViewerCtrl: ImageViewerController;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,
    public toastCtrl: ToastController, public modalCtrl: ModalController, public formBuilder: FormBuilder,
    public http: Http, public ngZone: NgZone, public loadingCtrl: LoadingController, public WP: WooCommerceProvider,
    public events: Events, imageViewerCtrl: ImageViewerController) {

    
    this.reviewValidator = formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(30), Validators.pattern('[a-zA-Zء-ی ]*')])],
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')])],
      review: ['می توانید دیدگاه خود را در این قسمت بنویسید. حداقل 10 نویسه...', Validators.compose([Validators.required, Validators.minLength(10)])]
    });

    this._imageViewerCtrl = imageViewerCtrl;

    this.WooCommerce = WP.WooCommerce

    this.newRating = null;
    if (this.navParams.get("product")){
      this.product =  this.navParams.get("product")
      console.log(this.product);
      this.WooCommerce.getAsync('products/' + this.product.id + '/reviews').then((data) => {
        console.log((data))
        this.reviews = JSON.parse(data.body);
        this.isRefreshing = false;
        console.log(this.reviews);
  
      }, (err) => {
        console.log(err);
      })

    } else if (this.navParams.get("id")){
      this.getProductById(this.navParams.get("id")).then(product=>{
        ngZone.run(()=>{
          this.product = product;
        })
        
        console.log(this.product);

        this.WooCommerce.getAsync('products/' + this.product.id + '/reviews').then((data) => {
          console.log(JSON.parse(data.body))
          this.reviews = JSON.parse(data.body);
          this.isRefreshing = false;
          console.log(this.reviews);    
        }, (err) => {
          console.log(err);
        })
      })

    }
    
    
    this.usPesllProducts = this.getUpSellProducts(this.product.upsell_ids);
    this.crossSellProducts = this.getUpSellProducts(this.product.cross_sell_ids);


    this.storage.get("userLoginInfo").then((userData) => {
      if (userData != null) {
        ngZone.run(() => {
          this.user = userData.user;
        });
      }
    })
    this.qty = 1;
    
    this.WooCommerce3 = WP.WooCommerce3

    
  } // end of constructor

  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
 
    //setTimeout(() => imageViewer.dismiss(), 1000);
    //imageViewer.onDidDismiss(() => alert('Viewer dismissed'));
  }

getUpSellProducts(ids: number[]){
  let upSellProducts :any [] = []
  if (ids && ids.length > 0){
    ids.forEach(element=>{
      this.getProductById(element).then(upSell=>{
        upSellProducts.push(upSell)
      })
    });

    return upSellProducts;    
  };
    
  return null;

}

  qtyVal() {

    if ((this.product.stock_quantity != null) && (this.qty >= this.product.stock_quantity)) {
      this.qty = this.product.stock_quantity;
      this.toastCtrl.create({
        message: "حداکثر موجودی",
        duration: 3000
      }).present();
    }


    console.log(this.qty);
  }

  //add to cart
  addToCart() {
    this.qtyVal();
    this.storage.get('cart').then((data) => {

      if (data == null || data.length == 0) {
        console.log("بی ناموس");

        data = [];
        data.push({
          "product": this.product,
          "qty": this.qty
        });
      } else {

        let added = 0;
        for (let i = 0; i < data.length; i++) {
          console.log(this.product.id);
          console.log(data[i].product.id);
          if (this.product.id == data[i].product.id) {
            console.log("Product already exists in your cart")
            data[i].qty = parseInt(data[i].qty) + parseInt(this.qty.toString());
            added = 1;


          }
        }
        if (added == 0) {
          data.push({
            "product": this.product,
            "qty": this.qty

          });
        }

      }

      this.storage.set("cart", data).then(() => {
        this.events.publish('cart', data)
        console.log("Cart updated");
        console.log(data);
        this.toastCtrl.create({
          message: "به سبد خرید شما افزوده شد",
          duration: 2000,
          cssClass: 'rtl'
        }).present();

      })

    })
  }
  openCart() {
    //this.modalCtrl.create(Cart).present();
    this.navCtrl.push(Cart);
  }

  changeQty(change) {

    //if decreasing 1 single product
    if (change < 0 && this.qty * -1 >= change) {
      return;
    }

    //if request amount is grater than stock quantity
    if (change > parseInt(this.product.stock_quantity) && this.product.stock_quantity != null) {
      change = this.product.stock_quantity;
      alert("درخواست شما بیش از حداکثر موجودی انبار می باشد. مقدار درخواستی شما به بیشترین مقدار موجود اصلاح شد.");
    }

    if (this.qty >= this.product.stock_quantity && change > 0 && this.product.stock_quantity != null) {
      this.qty = this.product.stock_quantity;

      alert("درخواست شما بیش از حداکثر موجودی انبار می باشد. مقدار درخواستی شما به بیشترین مقدار موجود اصلاح شد.");
      return;
    }

    this.qty += change;
  }

  postReview() {
    this.submitAttempt = true;
    if (!this.reviewValidator.valid) {
      alert("!لطفا ورودی ها را کنترل نمایید و موارد ستاره دار را به درستی تکمیل نمایید.");
      this.ngZone.run(()=>{
        this.submitAttempt = false;
      })
      
      return;
    }
  
    var data = {
      product_id: this.product.id,
      review: this.review,
      reviewer: this.user.displayname,
      reviewer_email: this.user.email,
      rating: this.newRating,
      status: 'hold'
    };
 

    let regExp = /<[^\w<>]*(?:[^<>"'\s]*:)?[^\w<>]*(?:\W*s\W*c\W*r\W*i\W*p\W*t|\W*f\W*o\W*r\W*m|\W*s\W*t\W*y\W*l\W*e|\W*s\W*v\W*g|\W*m\W*a\W*r\W*q\W*u\W*e\W*e|(?:\W*l\W*i\W*n\W*k|\W*o\W*b\W*j\W*e\W*c\W*t|\W*e\W*m\W*b\W*e\W*d|\W*a\W*p\W*p\W*l\W*e\W*t|\W*p\W*a\W*r\W*a\W*m|\W*i?\W*f\W*r\W*a\W*m\W*e|\W*b\W*a\W*s\W*e|\W*b\W*o\W*d\W*y|\W*m\W*e\W*t\W*a|\W*i\W*m\W*a?\W*g\W*e?|\W*v\W*i\W*d\W*e\W*o|\W*a\W*u\W*d\W*i\W*o|\W*b\W*i\W*n\W*d\W*i\W*n\W*g\W*s|\W*s\W*e\W*t|\W*i\W*s\W*i\W*n\W*d\W*e\W*x|\W*a\W*n\W*i\W*m\W*a\W*t\W*e)[^>\w])|(?:<\w[\s\S]*[\s\0\/]|['"])(?:formaction|style|background|src|lowsrc|ping|on(?:d(?:e(?:vice(?:(?:orienta|mo)tion|proximity|found|light)|livery(?:success|error)|activate)|r(?:ag(?:e(?:n(?:ter|d)|xit)|(?:gestur|leav)e|start|drop|over)?|op)|i(?:s(?:c(?:hargingtimechange|onnect(?:ing|ed))|abled)|aling)|ata(?:setc(?:omplete|hanged)|(?:availabl|chang)e|error)|urationchange|ownloading|blclick)|Moz(?:M(?:agnifyGesture(?:Update|Start)?|ouse(?:PixelScroll|Hittest))|S(?:wipeGesture(?:Update|Start|End)?|crolledAreaChanged)|(?:(?:Press)?TapGestur|BeforeResiz)e|EdgeUI(?:C(?:omplet|ancel)|Start)ed|RotateGesture(?:Update|Start)?|A(?:udioAvailable|fterPaint))|c(?:o(?:m(?:p(?:osition(?:update|start|end)|lete)|mand(?:update)?)|n(?:t(?:rolselect|extmenu)|nect(?:ing|ed))|py)|a(?:(?:llschang|ch)ed|nplay(?:through)?|rdstatechange)|h(?:(?:arging(?:time)?ch)?ange|ecking)|(?:fstate|ell)change|u(?:echange|t)|l(?:ick|ose))|m(?:o(?:z(?:pointerlock(?:change|error)|(?:orientation|time)change|fullscreen(?:change|error)|network(?:down|up)load)|use(?:(?:lea|mo)ve|o(?:ver|ut)|enter|wheel|down|up)|ve(?:start|end)?)|essage|ark)|s(?:t(?:a(?:t(?:uschanged|echange)|lled|rt)|k(?:sessione|comma)nd|op)|e(?:ek(?:complete|ing|ed)|(?:lec(?:tstar)?)?t|n(?:ding|t))|u(?:ccess|spend|bmit)|peech(?:start|end)|ound(?:start|end)|croll|how)|b(?:e(?:for(?:e(?:(?:scriptexecu|activa)te|u(?:nload|pdate)|p(?:aste|rint)|c(?:opy|ut)|editfocus)|deactivate)|gin(?:Event)?)|oun(?:dary|ce)|l(?:ocked|ur)|roadcast|usy)|a(?:n(?:imation(?:iteration|start|end)|tennastatechange)|fter(?:(?:scriptexecu|upda)te|print)|udio(?:process|start|end)|d(?:apteradded|dtrack)|ctivate|lerting|bort)|DOM(?:Node(?:Inserted(?:IntoDocument)?|Removed(?:FromDocument)?)|(?:CharacterData|Subtree)Modified|A(?:ttrModified|ctivate)|Focus(?:Out|In)|MouseScroll)|r(?:e(?:s(?:u(?:m(?:ing|e)|lt)|ize|et)|adystatechange|pea(?:tEven)?t|movetrack|trieving|ceived)|ow(?:s(?:inserted|delete)|e(?:nter|xit))|atechange)|p(?:op(?:up(?:hid(?:den|ing)|show(?:ing|n))|state)|a(?:ge(?:hide|show)|(?:st|us)e|int)|ro(?:pertychange|gress)|lay(?:ing)?)|t(?:ouch(?:(?:lea|mo)ve|en(?:ter|d)|cancel|start)|ime(?:update|out)|ransitionend|ext)|u(?:s(?:erproximity|sdreceived)|p(?:gradeneeded|dateready)|n(?:derflow|load))|f(?:o(?:rm(?:change|input)|cus(?:out|in)?)|i(?:lterchange|nish)|ailed)|l(?:o(?:ad(?:e(?:d(?:meta)?data|nd)|start)?|secapture)|evelchange|y)|g(?:amepad(?:(?:dis)?connected|button(?:down|up)|axismove)|et)|e(?:n(?:d(?:Event|ed)?|abled|ter)|rror(?:update)?|mptied|xit)|i(?:cc(?:cardlockerror|infochange)|n(?:coming|valid|put))|o(?:(?:(?:ff|n)lin|bsolet)e|verflow(?:changed)?|pen)|SVG(?:(?:Unl|L)oad|Resize|Scroll|Abort|Error|Zoom)|h(?:e(?:adphoneschange|l[dp])|ashchange|olding)|v(?:o(?:lum|ic)e|ersion)change|w(?:a(?:it|rn)ing|heel)|key(?:press|down|up)|(?:AppComman|Loa)d|no(?:update|match)|Request|zoom))[\s\0]*=/;
    if (regExp.test(this.review)){
      alert("متن دیدگاه شما حاوی عبارات غیر مجاز می باشد.");
      return;
    } 

    this.WooCommerce3.post('products/reviews', data, function (err, data, res) {
      console.log(JSON.parse(res));
      console.log(data);

      if (data.statusMessage == "Created") {
        alert("با سپاس، دیدگاه شما با موفقیت ثبت شد و پس از تایید مدیریت، به نمایش گذاشته خواهد شد.")
        this.submitAttempt = false;
      } else {
        // show data.error
        alert(JSON.parse(res).message.toString());
        this.submitAttempt = false;
      }

    });
  } // end of postReview()

  showSpinner() {
    this.spinner = this.loadingCtrl.create();
    this.spinner.present();
  }
  hideSpinner() {
    this.spinner.dismiss();
  }
  async getProductById(id): Promise<any>{
    return new Promise ((resolve, reject)=>{
      this.WooCommerce = this.WP.init();
      this.WooCommerce.getAsync("products/"+id).then(product=>{
        console.log(JSON.parse(product.body))
        this.hideSpinner;
        resolve(JSON.parse(product.body))
      }, error =>{console.log(error); this.hideSpinner() })
    })
  }

  async check(justSelectedAttribute){

    let count = 0;
    for (let k in this.selectedOptions) 
      if (this.selectedOptions.hasOwnProperty(k)) 
        count++;

    
    let count_ = 0;
    for (var index=0; index < this.product.attributes.length; index++) 
      if (this.product.attributes[index].variation) 
        count_++;


        //check if user select all required variation options

        if(count_ != count){
          this.requireOptions = true;
          return;
        } else {

          this.requireOptions = false;
          this.showSpinner();
          this.productVariations = JSON.parse((await this.WooCommerce3.getAsync('products/'+this.product.id+'/variations')).body)
          console.log(this.productVariations)
        }





  }

}