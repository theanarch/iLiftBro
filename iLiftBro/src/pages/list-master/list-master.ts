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
    var buttonElementId = event.path[1].id;

    var listElementId = "week" + buttonElementId.substring(6); //retrieving Id from button. "button" has 6 letters => starting from 6 
    var listElement = document.getElementById(listElementId);
    // var buttonElement = document.getElementById(buttonElementId);

    // instanstiating new variables
    var textColor;
    var textDecoration;
    var listElementTextColor;
    // var buttonElementHTML;
    // var buttonBackgroundColor;

    // if (this.buttonColor === 'secondary') {
    //   buttonElement.innerHTML = "Undone";
    //   textColor = 'lightgreen';
    //   this.buttonColor = 'primary';
    //   textDecoration = "line-through";
    // }
    // else {
    //   buttonElement.innerHTML = 'Done';
    //   this.buttonColor = 'secondary';
    //   textDecoration = "";
    //   textColor = "";
    // }

    if (textDecoration != 'line-through') {
        textDecoration = 'line-through';
        listElementTextColor = '#32db64'; //secondary(grön)
        // buttonElementHTML = "<span class='button-inner'>"+"Undone"+"<span>";
        // buttonBackgroundColor = '#488aff'; //primary(blå)
    } else {
      textDecoration = '';
      listElementTextColor = ''; //
      // buttonElementHTML = "<span class='button-inner'>"+"Done"+"<span>";
      // buttonBackgroundColor = '#32db64';
    }
    
    listElement.style.setProperty("text-decoration", listElementTextColor);
    listElement.style.webkitTextFillColor = textColor;
    // buttonElement.style.setProperty("background-color", buttonBackgroundColor);
    // buttonElement.innerHTML = buttonElementHTML;
    // $('buttonElementId')
  }


}
