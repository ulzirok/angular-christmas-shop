import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICartItem } from '../../../models/cart-item-model';
import { CommonModule, CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-cart-item',
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.scss',
})
export class CartItem {
  @Input() item!: ICartItem;
  @Output() quantityIncreased = new EventEmitter<ICartItem>();
  @Output() quantityDecreased = new EventEmitter<ICartItem>();

  increaseQuantity() {
    this.quantityIncreased.emit(this.item);
  }

  decreaseQuantity() {
    this.quantityDecreased.emit(this.item);
  }
}
