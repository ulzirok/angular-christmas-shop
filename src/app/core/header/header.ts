import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BurgerMenu } from '../../shared/burger-menu/burger-menu';

@Component({
  selector: 'app-header',
  imports: [RouterLink, BurgerMenu],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
