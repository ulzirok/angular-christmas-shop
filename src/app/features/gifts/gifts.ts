import { Component } from '@angular/core';
import { CategorySwitcher } from './category-switcher/category-switcher';
import { GiftsList } from './gifts-list/gifts-list';
import { GiftCard } from '../../shared/gift-card/gift-card';
import { GiftDetails } from './gift-details/gift-details';
import { GiftsHeader } from './gifts-header/gifts-header';
import { ButtonUp } from '../../shared/button-up/button-up';

@Component({
  selector: 'app-gifts',
  imports: [GiftsHeader, CategorySwitcher, GiftsList, GiftCard, GiftDetails, ButtonUp],
  templateUrl: './gifts.html',
  styleUrl: './gifts.scss'
})
export class Gifts {

}
