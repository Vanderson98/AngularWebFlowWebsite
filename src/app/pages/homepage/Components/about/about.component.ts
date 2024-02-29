import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', './about-mobile.component.css'],
})
export class AboutComponent {
  @Input()
  imagePhone: string = '';

  @Input()
  imageAbout: string = '';
}
