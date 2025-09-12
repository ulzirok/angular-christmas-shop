import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { GIFT_CATEGORIES } from '../../../shared/constants/gift-categories';

@Component({
  selector: 'app-category-switcher',
  imports: [CommonModule],
  templateUrl: './category-switcher.html',
  styleUrl: './category-switcher.scss'
})
export class CategorySwitcher {
  categories = GIFT_CATEGORIES
  
  @Output() selectCategory = new EventEmitter<string>()
  
  selectedCategory(category: string) {
    // console.log(category);
    this.selectCategory.emit(category)
  }
}
