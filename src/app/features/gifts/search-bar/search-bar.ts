import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss'
})
export class SearchBar {
  searchTerm: string = '';
  @Output() searchChange = new EventEmitter<string>()
  
  onInput(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value
    this.searchChange.emit(inputValue)
  }
}
