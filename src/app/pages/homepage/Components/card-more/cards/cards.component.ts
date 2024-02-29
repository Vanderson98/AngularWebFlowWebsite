import { Component, Input } from '@angular/core';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css', './cards-mobile.component.css'],
})
export class CardsComponent {
  @Input()
  title: string = '';

  @Input()
  paragraph: string = '';
}
