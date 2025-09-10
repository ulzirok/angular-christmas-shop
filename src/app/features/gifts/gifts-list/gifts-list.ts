import { Component, Input, OnInit } from '@angular/core';
import { GiftCard } from '../../../shared/gift-card/gift-card';
import { GiftDetails } from '../gift-details/gift-details';
import { IGift } from '../../../models/gift-model';
import { CommonModule } from '@angular/common';
import { GiftsService } from '../../../services/gifts-service';

@Component({
  selector: 'app-gifts-list',
  imports: [GiftCard, GiftDetails, CommonModule],
  templateUrl: './gifts-list.html',
  styleUrl: './gifts-list.scss'
})
export class GiftsList implements OnInit {
  gifts: IGift[] = []
  
  constructor(private giftsService: GiftsService) {  }
  
  ngOnInit(): void {
    this.giftsService.getAll().subscribe((gifts) => {
      this.gifts = gifts
      
    })
  }
}
