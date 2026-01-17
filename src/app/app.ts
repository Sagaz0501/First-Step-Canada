import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { HomePage } from './home-page/home-page';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, HomePage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('First_Canada_CA');
}
