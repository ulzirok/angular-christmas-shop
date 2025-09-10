import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IGift } from '../../../models/gift-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gift-details',
  imports: [CommonModule],
  templateUrl: './gift-details.html',
  styleUrl: './gift-details.scss'
})
export class GiftDetails {
  @Input() gift?: IGift; //Получили объект gift от родителя и сохранили в переменную gift
  @Output() close = new EventEmitter<void>(); //Через @Output(передает польз.событие дочки родителю) создаем св-во close, его значение - экз класса EventEmitter
  
  closed() {
    this.close.emit(); //при клике эмитим close
  }
}
