import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  author: string;
  text: string;
   constructor(private viewCtrl:ViewController, private navParams: NavParams){}
  
  /*
   *  View Controller controls the current page which is active
   * This method is used to remove quote from favourite
   */
   onClose(remove = false){
     this.viewCtrl.dismiss(remove);
   }
   //when page is created
   ionViewDidLoad(){
      this.author = this.navParams.get("person");
      this.text = this.navParams.get("text");
   }
}