import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { Settings } from '../../providers';
import { TabsPage } from '../../pages/tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  options: any;
  bodySettings = { Height: "", Weight: "" };
  liftSettings = { Squat: "", Deadlift: "", BenchPress: "" };

  settingsReady = false;
  form: FormGroup;

  profileSettings = {
    page: 'profile',
    pageTitleKey: 'SETTINGS_PAGE_PROFILE'
  };

  page: string = 'main';
  pageTitleKey: string = 'SETTINGS_TITLE';
  pageTitle: string;

  subSettings: any = SettingsPage;
  pushPage: any;

  constructor(public navCtrl: NavController,
    public settings: Settings,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public translate: TranslateService,
    public loadingCtrl: LoadingController) {
    this.pushPage = TabsPage;
  }

  _buildForm() {
    let group: any = {
      option1: [this.options.option1],
      option2: [this.options.option2],
      option3: [this.options.option3]
    };

    switch (this.page) {
      case 'main':
        break;
      case 'profile':
        group = {
          option4: [this.options.option4]
        };
        break;
    }
    this.form = this.formBuilder.group(group);

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.settings.merge(this.form.value);
    });
  }


  ionViewWillEnter() {
    // Build an empty form for the template to render
    this.form = this.formBuilder.group({});

    this.page = this.navParams.get('page') || this.page;
    this.pageTitleKey = this.navParams.get('pageTitleKey') || this.pageTitleKey;

    this.translate.get(this.pageTitleKey).subscribe((res) => {
      this.pageTitle = res;
    })

    this.settings.load().then(() => {
      this.settingsReady = true;
      this.options = this.settings.allSettings;

      this._buildForm();
    });
  }

  private RoundTo(calcWeight: number, percentage: number): number {
    let roundTo = 2.5;
    return roundTo * Math.round((calcWeight * percentage) / roundTo);
  }

  saveResult() {
    localStorage.setItem("Height", this.bodySettings.Height);
    localStorage.setItem("Weight", this.bodySettings.Weight);
    localStorage.setItem("Squat", this.liftSettings.Squat);
    localStorage.setItem("Deadlift", this.liftSettings.Deadlift);
    localStorage.setItem("BenchPress", this.liftSettings.BenchPress);

    let RoundTo = (calcWeight: number, percentage: number): number => {
      let something = this.RoundTo(calcWeight, percentage);
      return something;
    }


    let filePath = "./assets/data/schedule.json";
    $.getJSON(filePath, function (json) {
      for (var i = 0; i < json.length; i++) {
        console.log(json[i]);
        let workoutDetail = json[i].workoutDetail;
        let percentage: number = json[i].percentage;
        localStorage.setItem("get"+workoutDetail, RoundTo(Number(localStorage.getItem("Squat")),
          Number(percentage)).toString());
      }
    });


    this.presentLoadingText();

  }

  loadData(filePath: string) {

  }

  presentLoadingText() {
    let loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: 'Processing data...',
      duration: 2000
    });

    loading.present();
  }

  ionViewDidLoad() {
    this.form = this.formBuilder.group({});
  }

  ngOnChanges() {
  }
}
