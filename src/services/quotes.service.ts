import { Quote } from "../data/quotes.interface";

export class QuoteService{
    private favQuotes:Quote[]=[];

    addQuoteToFav(quote : Quote){
        this.favQuotes.push(quote);
        console.log(this.favQuotes);
    }

    removeQuoteFromFav(quote:Quote){
        const position = this.favQuotes.findIndex((quoteEl:Quote) => {
            return quoteEl.id == quote.id;
        });
        this.favQuotes.splice(position,1);
    }

    getFavQuotes(){
        return this.favQuotes.slice();
    }
}