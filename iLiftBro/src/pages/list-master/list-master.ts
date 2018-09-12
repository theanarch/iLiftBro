import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';


@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html',
})
export class ListMasterPage {
  currentItems: Item[];
  public buttonColor: string = 'secondary';
  public buttonText: string = 'Done';

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController) {
    this.currentItems = this.items.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

  Done(event) {

    if (event != null) {
      var buttonElementId = event.path[1].id;

      var listElementId = "week" + buttonElementId.substring(6); //retrieving Id from button. "button" has 6 letters => starting from 6 
        if (listElementId != "week") {
        var listElement = document.getElementById(listElementId);
        var textDecoration = listElement.style.getPropertyValue("text-decoration"); // gets current text-decoration status
        var textColor;

        if (textDecoration != "line-through") {
          textDecoration = "line-through";
          textColor = "lightgreen";
          this.buttonColor = 'jonas-grey';
          this.buttonText = 'Undo';        
        } else {
          textDecoration = "";
          textColor = "";
          this.buttonColor = 'secondary';
          this.buttonText = 'Done';
        }
        listElement.style.webkitTextFillColor = textColor;
        listElement.style.setProperty("text-decoration", textDecoration);
      }
    }
  }
}

