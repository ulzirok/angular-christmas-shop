import { Component, inject } from '@angular/core';
import { CartService } from '../../../services/cart-service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-cart-icon',
  imports: [CommonModule, RouterLink],
  templateUrl: './cart-icon.html',
  styleUrl: './cart-icon.scss',
})
export class CartIcon {
  count = 0;
  private cartService = inject(CartService)
  constructor() {
    this.cartService.cartCount$.subscribe((value) => {
      this.count = value;
    });
  }
}
