import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IGift } from '../../models/gift-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gift-card',
  imports: [CommonModule],
  templateUrl: './gift-card.html',
  styleUrl: './gift-card.scss'
})
export class GiftCard {
  @Input() gift?: IGift; //Получили объект gift от родителя и сохранили в переменную gift
  
  @Output() select = new EventEmitter<IGift>()  //Через @Output(передает польз.событие дочки родителю) создаем св-во select, его значение - экз класса EventEmitter
  selected() {
    this.select.emit(this.gift); //при клике передаем полученный объект gift родителю через метод emit ('эмитим объект)
  }
}
