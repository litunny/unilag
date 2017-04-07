import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
import { Academic } from "../academic/academic";
import { Payment } from "../payment/payment";
import { Vas } from "../vas/vas";
import { News } from "../news/news";

/**
 * Generated class for the Dashboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
  providers: [Toast]
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Dashboard');
  }

  public Update () : void {
     let toast = this.toastCtrl.create({
        message: 'Yet to be implemented',
        duration: 3000,
        showCloseButton: true,

      });
      toast.present();
  }

  public Academic () : void {
    this.navCtrl.push(Academic);
  }

  public Payment () : void {
    this.navCtrl.push(Payment);
  }

  public Vas() : void {
    this.navCtrl.push(Vas);
  }

  public News () : void {
    this.navCtrl.push(News);
  }
}
