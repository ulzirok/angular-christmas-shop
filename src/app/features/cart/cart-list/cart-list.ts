import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart-item/cart-item';
import { CartSummary } from '../cart-summary/cart-summary';
import { CartService } from '../../../services/cart-service';
import { IGift } from '../../../models/gift-model';
import { ICartItem } from '../../../models/cart-item-model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-list',
  imports: [CartItem, CartSummary, CommonModule, CartItem, RouterLink],
  templateUrl: './cart-list.html',
  styleUrl: './cart-list.scss'
})
export class CartList implements OnInit {
  constructor(private cartService: CartService) { }
  items: ICartItem[] = []
  total: number = 0
  success: boolean = false;
  
  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((cartItems) => {
      this.items = cartItems
      this.total = this.cartService.getTotal()
    })
  }
  
  increaseQuantity(item: ICartItem) {
    this.cartService.increaseQuantity(item.id)
  }
  
  decreaseQuantity(item: ICartItem) {
    this.cartService.decreaseQuantity(item.id)
  }

  onFormSubmitted() {
    this.success = true;

    setTimeout(() => this.success = false, 2500);
  }
  
}
