import { Injectable } from '@angular/core';
import { IGift } from '../models/gift-model';
import { ICartItem } from '../models/cart-item-model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private gifts: ICartItem[] = []; //создаем массив, чтобы добавлять товары
  
  private cartItemsSubject = new BehaviorSubject<ICartItem[]>([]); //создаем массив (поток) cartItemsSubject, чтобы получить массив с актуальными данными (товарами)
  cartItems$ = this.cartItemsSubject.asObservable() 
  
  private cartCountSubject = new BehaviorSubject<number>(0) //создаем переменную (поток) cartCountSubject, чтобы получить актуальное общее кол-во quantity
  cartCount$ = this.cartCountSubject.asObservable(); //сохраняем его значение в переменную, чтобы на него подписываться и получить это значение (в иконке Корзины)
  
  constructor() {
    this.loadFromStorage()
  }
  
  private saveToStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this.gifts))
  }
  
  private loadFromStorage(): void {
    const data = localStorage.getItem('cart')
    if (data) {
      this.gifts = JSON.parse(data)
      this.cartItemsSubject.next([...this.gifts])
    }
  }
  
  addItem(addedGift: IGift) {
    const existingGift = this.gifts.find((gift) => gift.id === addedGift.id) //проверяем в массиве gifts есть ли этот только что добавленный товар
    if (existingGift) { //если такой товар уже есть в массиве
      existingGift.quantity++ //кол-во товара увеличиваем
    } else {
      this.gifts.push({ ...addedGift, quantity: 1 }); //иначе, выбранный товар добавляем в массив gifts
    }
    this.updateCart()
    this.saveToStorage()
  }
  
  increaseQuantity(id: number):void {
    const increasingGift = this.gifts.find((item) => item.id === id);

    if (increasingGift) {
      increasingGift.quantity++;
      this.updateCart()
      this.saveToStorage()
    }
  }
  
  decreaseQuantity(id: number): void {
    const decreasingGift = this.gifts.find((item) => item.id === id)
    
    if (decreasingGift) {
      
      if (decreasingGift.quantity > 1) {
        decreasingGift.quantity--
      } else {
        this.gifts = this.gifts.filter((item) => item.id !== id)
      }
      this.updateCart() 
      this.saveToStorage()
    }
  }
  
  getTotal(): number {
    return this.gifts.reduce((sum, item) => sum + (item.quantity * item.price), 0)
  }
  
  private updateCart() {
    const totalCount = this.gifts.reduce((acc, gift) => acc + gift.quantity, 0); //находим общее кол-во всех товаров
    this.cartCountSubject.next(totalCount); //записываем актуальное общее кол-во в переменную (поток), чтобы отобразить в иконке
    this.cartItemsSubject.next([...this.gifts]); //записываем массив gifts в массив cartItemsSubject (поток), чтобы потом брать товары с актуальными quantity
  }

}
