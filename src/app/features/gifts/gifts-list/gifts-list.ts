import { Component, Input, OnInit } from '@angular/core';
import { GiftCard } from '../../../shared/gift-card/gift-card';
import { GiftDetails } from '../gift-details/gift-details';
import { IGift } from '../../../models/gift-model';
import { CommonModule } from '@angular/common';
import { GiftsService } from '../../../services/gifts-service';
import { CategorySwitcher } from '../category-switcher/category-switcher';
import { SearchBar } from '../search-bar/search-bar';
import { FilterGiftsPipePipe } from '../../../pipes/filter-gifts-pipe-pipe';
import { CartService } from '../../../services/cart-service';
import { ICartItem } from '../../../models/cart-item-model';

@Component({
  selector: 'app-gifts-list',
  imports: [GiftCard, GiftDetails, CommonModule, CategorySwitcher, SearchBar, FilterGiftsPipePipe],
  templateUrl: './gifts-list.html',
  styleUrl: './gifts-list.scss'
})
export class GiftsList implements OnInit {
  gifts: IGift[] = []
  isModalOpen: boolean = false
  selectedGift: IGift | undefined;
  searchTerm: any = ''
  
  items: ICartItem[] = []
  
  constructor(
    private giftsService: GiftsService,
    private cartService: CartService
  ) { }
  
  selectedCategory(category: string) {
    this.giftsService.getFiltered(12, category).subscribe(filteredGifts => this.gifts = filteredGifts);
  }
  
  openModal(gift: IGift) { //gift - то, что эмитнуто в методе дочки (выбранный объект gift)
    this.selectedGift = gift 
    this.isModalOpen = true
  }
  
  closeModal() {
    this.isModalOpen = false
    this.selectedGift = undefined
  }

  addToCart(gift: IGift) {
    this.cartService.addItem(gift)
  }
  
  increaseQuantity(gift: IGift) {
    const item = this.items.find((item) => item.id === gift.id)
    if (item) {
      this.cartService.increaseQuantity(item.id);
    } else {
      this.cartService.addItem(gift)
    }
  }
  
  decreaseQuantity(gift: IGift) {
    const item = this.items.find((item) => item.id === gift.id)
    if (item) {
      this.cartService.decreaseQuantity(item.id)
    }
  }
  
  getQuantity(id: number | undefined): number {
    if (!id) return 0
    const item = this.items.find((item) => item.id === id)
    return item ? item.quantity : 0
  }
  
  ngOnInit(): void {
    this.giftsService.getRandom(12).subscribe((gifts) => {
      this.gifts = gifts
      
      this.cartService.cartItems$.subscribe((cartItems) => {
        this.items = cartItems;
      })
    })
  }
}
