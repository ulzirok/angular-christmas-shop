import { Component } from '@angular/core';
import { CartList } from './cart-list/cart-list';
import { CartSummary } from './cart-summary/cart-summary';

@Component({
  selector: 'app-cart',
  imports: [CartList],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {

}
