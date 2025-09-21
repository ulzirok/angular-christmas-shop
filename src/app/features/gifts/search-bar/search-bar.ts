import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartIcon } from '../../cart/cart-icon/cart-icon';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule, CartIcon],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
})
export class SearchBar {
  searchTerm = '';
  @Output() valueChanged = new EventEmitter<string>();

  onInput(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.valueChanged.emit(inputValue);
  }
}
