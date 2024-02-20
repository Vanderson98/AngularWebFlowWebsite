import { Component, Input } from '@angular/core';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  @Input()
  title: string = '';

  @Input()
  paragraph: string = '';
}
