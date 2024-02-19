import { Component, Input } from '@angular/core';

@Component({
  selector: 'banner-background',
  templateUrl: './banner-background.component.html',
  styleUrl: './banner-background.component.css',
})
export class BannerBackgroundComponent {
  @Input()
  bannerImage: string = '';
}
