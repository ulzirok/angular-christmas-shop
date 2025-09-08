import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-burger-menu',
  imports: [RouterLink, CommonModule],
  templateUrl: './burger-menu.html',
  styleUrl: './burger-menu.scss'
})
export class BurgerMenu {
  isMenuOpen: boolean = false

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen
  }
}
