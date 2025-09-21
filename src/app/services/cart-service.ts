import { Injectable } from '@angular/core';
import { IGift } from '../models/gift-model';
import { ICartItem } from '../models/cart-item-model';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private gifts: ICartItem[] = []; 
  private cartItemsSubject = new BehaviorSubject<ICartItem[]>([]); 
  cartItems$ = this.cartItemsSubject.asObservable();
  private cartCountSubject = new BehaviorSubject<number>(0); 
  cartCount$ = this.cartCountSubject.asObservable(); 

  constructor() {
    this.loadFromStorage();
  }

  private saveToStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this.gifts));
  }

  private loadFromStorage(): void {
    const data = localStorage.getItem('cart');
    if (data) {
      this.gifts = JSON.parse(data);
      this.updateCart();
    }
  }

  addItem(addedGift: IGift) {
    const existingGift = this.gifts.find((gift) => gift.id === addedGift.id); 
    if (existingGift) {
      existingGift.quantity++;
    } else {
      this.gifts.push({ ...addedGift, quantity: 1 }); 
    }
    this.updateCart();
    this.saveToStorage();
  }

  increaseQuantity(id: number): void {
    const increasingGift = this.gifts.find((item) => item.id === id);

    if (increasingGift) {
      increasingGift.quantity++;
      this.updateCart();
      this.saveToStorage();
    }
  }

  decreaseQuantity(id: number): void {
    const decreasingGift = this.gifts.find((item) => item.id === id);

    if (decreasingGift) {
      if (decreasingGift.quantity > 1) {
        decreasingGift.quantity--;
      } else {
        this.gifts = this.gifts.filter((item) => item.id !== id);
      }
      this.updateCart();
      this.saveToStorage();
    }
  }

  getTotal(): number {
    return this.gifts.reduce((sum, item) => sum + item.quantity * item.price, 0);
  }

  private updateCart() {
    const totalCount = this.gifts.reduce((acc, gift) => acc + gift.quantity, 0); 
    this.cartCountSubject.next(totalCount); 
    this.cartItemsSubject.next([...this.gifts]);
  }
}
