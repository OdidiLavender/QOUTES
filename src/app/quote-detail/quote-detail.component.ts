import { Component, Input, OnInit ,Output,EventEmitter} from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  
  @Input() quote!:Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  incrementLikes(){
    let like = this.quote?.likes;
    like++;
    this.quote.likes = like;
  }

  incrementDislikes(){
    let dislike = this.quote.dislikes;
    dislike++;
    this.quote.dislikes = dislike;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
