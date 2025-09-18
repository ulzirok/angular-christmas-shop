import { Component } from '@angular/core';
import { CartItem } from '../cart-item/cart-item';
import { CartSummary } from '../cart-summary/cart-summary';

@Component({
  selector: 'app-cart-list',
  imports: [CartItem, CartSummary],
  templateUrl: './cart-list.html',
  styleUrl: './cart-list.scss'
})
export class CartList {

}
