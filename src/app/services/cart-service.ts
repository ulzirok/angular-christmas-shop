import { Injectable } from '@angular/core';
import { IGift } from '../models/gift-model';
import { ICartItem } from '../models/cart-item-model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private gifts: ICartItem[] = []
  
  private cartCountSubject = new BehaviorSubject<number>(0)
  cartCount$ = this.cartCountSubject.asObservable()
  
  addItem(addedGift: IGift) {
    const existingGift = this.gifts.find((gift) => gift.id === addedGift.id)
    
    if (existingGift) {
      existingGift.quantity++
    } else {
      this.gifts.push({ ...addedGift, quantity: 1 })
    }
    
    const totalCount = this.gifts.reduce((acc, item) => acc + item.quantity, 0);
    this.cartCountSubject.next(totalCount);
    
    console.log(this.gifts);
    
  }
  
}
