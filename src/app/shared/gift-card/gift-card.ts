import { Component, Input } from '@angular/core';
import { IGift } from '../../models/gift-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gift-card',
  imports: [CommonModule],
  templateUrl: './gift-card.html',
  styleUrl: './gift-card.scss'
})
export class GiftCard {
  @Input() gift?: IGift
}
