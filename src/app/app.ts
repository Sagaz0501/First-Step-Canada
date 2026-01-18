import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { HelpChat } from './shared/help-chat/help-chat';

import { trigger, transition, style, animate, query, group } from '@angular/animations';

const routeAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':leave', [
      animate('160ms ease', style({ opacity: 0, transform: 'translateY(6px)' }))
    ], { optional: true }),

    query(':enter', [
      style({ opacity: 0, transform: 'translateY(10px)' }),
      animate('260ms cubic-bezier(.2,.9,.2,1)', style({ opacity: 1, transform: 'translateY(0)' }))
    ], { optional: true }),
  ]),
]);


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, HelpChat],
  templateUrl: './app.html',
  styleUrl: './app.css',
  animations: [routeAnimations],
})
export class App {
  protected readonly title = signal('First_Canada_CA');

  getRouteKey(outlet: any) {
    return outlet?.activatedRouteData?.['anim'] ?? 'root';
  }

}
