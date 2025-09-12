import { Pipe, PipeTransform } from '@angular/core';
import { IGift } from '../models/gift-model';


@Pipe({
  name: 'filterGiftsPipe'
})
export class FilterGiftsPipePipe implements PipeTransform {
  transform(gifts: IGift[], search: string): IGift[] {
    if (!gifts || !search) {
      return gifts;
    }
    const lowerSearch = search.toLowerCase();
    return gifts.filter(gift =>
      gift.name.toLowerCase().includes(lowerSearch)
    );
  }

}

