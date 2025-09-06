import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Slider } from './slider/slider';
import { GiftsPreview } from './gifts-preview/gifts-preview';
import { Timer } from './timer/timer';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Slider, GiftsPreview, Timer],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
