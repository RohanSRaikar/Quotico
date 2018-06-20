import { Component, OnInit } from '@angular/core';
import { Quote } from '../../data/quotes.interface';
import  quote  from '../../data/quotes';
import { QuotesPage } from '../quotes/quotes';


@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  quotesPage = QuotesPage;
 quoteCollection : {category:string, quote:Quote[], icon:string}[];
 ngOnInit() {
  this.quoteCollection = quote;
}

}
