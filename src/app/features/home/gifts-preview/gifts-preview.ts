import { Component, OnInit } from '@angular/core';
import { GiftCard } from '../../../shared/gift-card/gift-card';
import { IGift } from '../../../models/gift-model';
import { GiftsService } from '../../../services/gifts-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gifts-preview',
  imports: [GiftCard, CommonModule],
  templateUrl: './gifts-preview.html',
  styleUrl: './gifts-preview.scss'
})
export class GiftsPreview implements OnInit {
  gifts: IGift[] = []
  
  constructor(private giftsService: GiftsService) { }
  
  ngOnInit(): void {
    this.giftsService.getRandom(4).subscribe((gifts) => {
      this.gifts = gifts
    })
  }
}
