import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IGift } from '../../../models/gift-model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gift-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './gift-details.html',
  styleUrl: './gift-details.scss',
})
export class GiftDetails {
  @Input() gift?: IGift;
  @Input() quantity = 0;
  @Output() modalClosed = new EventEmitter<void>();
  @Output() addedToCart = new EventEmitter<IGift>();
  @Output() quantityIncreased = new EventEmitter<IGift>();
  @Output() quantityDecreased = new EventEmitter<IGift>();

  closeModal() {
    this.modalClosed.emit();
  }

  addToCart() {
    this.addedToCart.emit(this.gift);
  }

  increaseQuantity() {
    if (this.gift) {
      this.quantityIncreased.emit(this.gift);
    }
  }

  decreaseQuantity() {
    if (this.gift) {
      this.quantityDecreased.emit(this.gift);
    }
  }
}
