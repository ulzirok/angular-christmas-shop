import { Component, EventEmitter, Input, Output, Pipe } from '@angular/core';
import { IGift } from '../../../models/gift-model';
import { ICartItem } from '../../../models/cart-item-model';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-item',
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.scss'
})
export class CartItem {
  @Input() item!: ICartItem
  
  @Output() increase = new EventEmitter<ICartItem>()
  @Output() decrease = new EventEmitter<ICartItem>()
  
  onIncrease() {
    this.increase.emit(this.item)
  }
  
  onDecrease() {
    this.decrease.emit(this.item)
  }
  

}
