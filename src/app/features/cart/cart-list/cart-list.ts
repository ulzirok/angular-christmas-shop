import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart-item/cart-item';
import { CartSummary } from '../cart-summary/cart-summary';
import { CartService } from '../../../services/cart-service';
import { IGift } from '../../../models/gift-model';
import { ICartItem } from '../../../models/cart-item-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-list',
  imports: [CartItem, CartSummary, CommonModule, CartItem],
  templateUrl: './cart-list.html',
  styleUrl: './cart-list.scss'
})
export class CartList implements OnInit {
  constructor(private cartService: CartService) { }
  
  items: ICartItem[] = []
  
  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((cartItems) => {
      this.items = cartItems
    })
  }
  
  increaseQuantity(item: ICartItem) {
    this.cartService.increaseQuantity(item.id)
  }
  
  decreaseQuantity(item: ICartItem) {
    this.cartService.decreaseQuantity(item.id)
  }
  
}
