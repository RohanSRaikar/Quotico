import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quotes.interface';
import { QuoteService } from '../../services/quotes.service';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html', 
})
export class QuotesPage implements OnInit {
  ngOnInit(): void {
    this.quoteGroup = this.navParams.data;
    console.log(this.quoteGroup);
  }
  quoteGroup:{category:string, quote:Quote[], icon:string};
  constructor( 
    private navParams:NavParams,
    private alrtCtrl:AlertController,
    private quoteService:QuoteService
    ){
  }
  onAddToFavourite(selectedQuote:Quote){
    const alert = this.alrtCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            console.log("OK");
            this.quoteService.addQuoteToFav(selectedQuote)
          }
        },
        {
          text: 'No, i changed my mind.',
          role:'cancel',
          handler: () => {
            console.log("Cancelled")
          }
        }
      ]
    });
    alert.present();
  }

  onRemoveToFav(quote:Quote){
    const alert = this.alrtCtrl.create({
      title: 'Remove Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to remove quote from favourite?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            console.log("OK");
            this.quoteService.removeQuoteFromFav(quote);
          }
        },
        {
          text: 'No, i changed my mind.',
          role:'cancel',
          handler: () => {
            console.log("Cancelled")
          }
        }
      ]
    });
    alert.present();
      
  }

  isFavourite(quote:Quote){
      return this.quoteService.isQuoteFavourite(quote);
  }
  
}
