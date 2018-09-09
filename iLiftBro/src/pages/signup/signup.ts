import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, NavParams, AlertController } from 'ionic-angular';

import { User, Settings } from '../../providers';
import { Tab3Root } from '../';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account = {
    name: '',
    email: '',
    password: ''
  };

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private afAuth: AngularFireAuth) {
  }

  displayAlert(alertTitle, alertSub) {
    let theAlert = this.alertCtrl.create({
      title: alertTitle,
      subTitle: alertSub,
      buttons: ['OK']
    });
    theAlert.present();
  }

  signUpAccount() {
    if (this.account.password == "") {
      this.displayAlert('Password problem!', 'Cannot use an empty password...');
      this.account.password = '';
    }
    else {
      this.afAuth.auth.createUserWithEmailAndPassword(this.account.email, this.account.password)
        .then(res => this.signUpSuccess())
        .catch(err => this.displayAlert('Error!', err));
    }
  }

  async signUpSuccess() {
    this.displayAlert('Your account was', ' registered for this email address');
    await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password)
      .then(res => this.navCtrl.setRoot(Tab3Root))
      .catch(err => this.displayAlert('Error!', err));

    let user = firebase.auth().currentUser;
    user.sendEmailVerification();
  }
}
