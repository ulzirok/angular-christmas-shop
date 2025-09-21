import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { GIFT_CATEGORIES } from '../../../shared/constants/gift-categories';
@Component({
  selector: 'app-category-switcher',
  imports: [CommonModule],
  templateUrl: './category-switcher.html',
  styleUrl: './category-switcher.scss',
})
export class CategorySwitcher {
  categories = GIFT_CATEGORIES;
  @Output() categorySelected = new EventEmitter<string>();

  selectCategory(category: string) {
    this.categorySelected.emit(category);
  }
}
