import { Component } from '@angular/core';
import { GiftCard } from '../../../shared/gift-card/gift-card';

@Component({
  selector: 'app-gifts-list',
  imports: [GiftCard],
  templateUrl: './gifts-list.html',
  styleUrl: './gifts-list.scss'
})
export class GiftsList {

}
