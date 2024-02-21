import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsCommentaryComponent {
  @Input()
  imageProfile: string = '';

  @Input()
  name: string = '';

  @Input()
  city: string = '';

  @Input()
  commentary: string = '';
}
