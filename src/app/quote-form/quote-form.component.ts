import { formatCurrency } from '@angular/common';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
// import * as EventEmitter from 'events';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote("","","",0,0,new Date());
  
  @Output() addQuote = new EventEmitter<Quote>();
 
  submitQuote(f:NgForm){
    if(f.valid){
      this.addQuote.emit(this.newQuote);
      this.newQuote = new Quote("","","",0,0, new Date());
    }else{
      alert("Please enter valid inputs")
    }

  }

  constructor() { }

  ngOnInit(): void {
  }
}
