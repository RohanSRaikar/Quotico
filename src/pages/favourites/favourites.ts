import { Component } from '@angular/core';  
import { Quote } from '../../data/quotes.interface';
import { QuoteService } from '../../services/quotes.service';
import { ModalController } from 'ionic-angular';
import { QuotePage } from '../quote/quote';

@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {
  private quotes:Quote[];
   constructor(
     private quoteService:QuoteService,
     private modalCtrl:ModalController
   ){}
  //this will be executed before the page is loaded and even if the page is cached
  ionViewWillEnter(){
    this.quotes = this.quoteService.getFavQuotes(); 
  }

   onViewQuote(quote:Quote){
     const modal = this.modalCtrl.create(QuotePage,quote);
     modal.present();
 }
}
