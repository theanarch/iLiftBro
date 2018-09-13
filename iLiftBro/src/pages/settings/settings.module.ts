import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { SettingsPage } from './settings';


@NgModule({
  declarations: [
    SettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingsPage),
    TranslateModule.forChild(),
    IonicStorageModule.forRoot()
  ],
  exports: [
    SettingsPage,
  ]
})
export class SettingsPageModule { }
