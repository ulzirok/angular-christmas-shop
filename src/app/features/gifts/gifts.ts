import { Component } from '@angular/core';
import { CategorySwitcher } from './category-switcher/category-switcher';
import { GiftsList } from './gifts-list/gifts-list';
import { GiftsHeader } from './gifts-header/gifts-header';
import { ButtonUp } from '../../shared/button-up/button-up';

@Component({
  selector: 'app-gifts',
  imports: [GiftsHeader, GiftsList, ButtonUp],
  templateUrl: './gifts.html',
  styleUrl: './gifts.scss'
})
export class Gifts {
 
}
