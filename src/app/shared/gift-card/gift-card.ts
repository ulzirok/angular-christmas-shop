import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IGift } from '../../models/gift-model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-gift-card',
  imports: [CommonModule],
  templateUrl: './gift-card.html',
  styleUrl: './gift-card.scss',
})
  
export class GiftCard {
  @Input() showButtons = true;
  @Input() gift?: IGift; 
  @Output() detailsViewed = new EventEmitter<IGift>(); 
  @Output() addedToCart = new EventEmitter<IGift>();

  viewDetails() {
    this.detailsViewed.emit(this.gift); 
  }

  addToCart() {
    this.addedToCart.emit(this.gift);
  }
}
