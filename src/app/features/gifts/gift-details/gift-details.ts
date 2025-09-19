import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IGift } from '../../../models/gift-model';
import { CommonModule } from '@angular/common';
import { ICartItem } from '../../../models/cart-item-model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gift-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './gift-details.html',
  styleUrl: './gift-details.scss'
})
export class GiftDetails {
  
  @Input() gift?: IGift; //Получили объект gift от родителя и сохранили в переменную gift
  @Input() quantity: number = 0
  @Output() close = new EventEmitter<void>(); //Через @Output(передает польз.событие дочки родителю) создаем св-во close, его значение - экз класса EventEmitter
  @Output() addToCart = new EventEmitter<IGift>()
  @Output() increase = new EventEmitter<IGift>()
  @Output() decrease = new EventEmitter<IGift>()
  
  closed() {
    this.close.emit(); //при клике эмитим close
  }
  
  onAddToCart() {
    this.addToCart.emit(this.gift)
  }
  
  onIncrease() {
    if (this.gift) {
      this.increase.emit(this.gift);
    }
  }
  
  onDecrease() {
    if (this.gift) {
      this.decrease.emit(this.gift);
    }
  }
}
