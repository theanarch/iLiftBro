import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, NavParams, AlertController } from 'ionic-angular';

import { MainPage } from '../';
import { User } from '../../providers';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: '',
    password: ''
  };

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private afAuth: AngularFireAuth) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  displayAlert(alertTitle, alertSub) {
    let theAlert = this.alertCtrl.create({
      title: alertTitle,
      subTitle: alertSub,
      buttons: ['OK']
    });
    theAlert.present();
  }

  // Attempt to login in through our User service
  doLogin() {
    this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password)
      .then(res => this.navCtrl.setRoot(MainPage))
      .catch(err => this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      }).present());
  };
}
