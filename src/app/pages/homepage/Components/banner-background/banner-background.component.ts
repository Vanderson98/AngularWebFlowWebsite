import { Component, Input } from '@angular/core';

@Component({
  selector: 'banner-background',
  templateUrl: './banner-background.component.html',
  styleUrls: [
    './banner-background.component.css',
    './banner-background-mobile.component.css',
  ],
})
export class BannerBackgroundComponent {
  @Input()
  bannerImage: string = '';
}
