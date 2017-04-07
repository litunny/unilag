import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from "../dashboard/dashboard";

/**
 * Generated class for the SideMenu page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-side-menu',
  templateUrl: 'side-menu.html',
})
export class SideMenu {
  public rootPage : any = DashboardPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SideMenu');
  }
}
