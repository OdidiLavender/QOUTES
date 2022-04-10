import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote("natalie"," William shakespeare","Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them.",490,4,new Date(2022,1,12)),
    new Quote("stacy","Albert einstein","We cannot solve our problems with the same thinking we used when we created them.",309,5,new Date(2022,2,17)),
    new Quote("kim","martin luther king jr","Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",353,10, new Date(2022,12,12))
  ];

  get sortQuotes(){
   return this.quotes.sort((a,b) => {
      return b.likes - a.likes;
    })
  }

  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
  
    this.quotes.push(quote);
  }

  deleteQuote(isComplete:any,index:any){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete a quote by ${this.quotes[index].author}?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
    }

  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
