import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/header/header';
import { Footer } from './core/footer/footer';
import { ButtonUp } from './shared/button-up/button-up';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, ButtonUp],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-christmas-shop');
}
