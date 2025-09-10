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
  isModalOpen: boolean = false
  selectedGift: any = null
  
  constructor(private giftsService: GiftsService) { }
  
  openModal(gift: any) { //gift - то, что эмитнуто в методе дочки (выбранный объект gift)
    this.selectedGift = gift 
    this.isModalOpen = true
  }
  
  closeModal() {
    this.isModalOpen = false
    this.selectedGift = null
  }

  
  ngOnInit(): void {
    this.giftsService.getRandom(12).subscribe((gifts) => {
      this.gifts = gifts
      
    })
  }
}
