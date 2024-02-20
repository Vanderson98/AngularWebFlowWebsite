import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderMenuComponent } from './Components/header-menu/header-menu.component';
import { BannerBackgroundComponent } from './Components/banner-background/banner-background.component';
import { CardMoreComponent } from './Components/card-more/card-more.component';
import { CardsComponent } from './Components/card-more/cards/cards.component';
import { AboutComponent } from './Components/about/about.component';
import { CommentaryComponent } from './Components/commentary/commentary.component';
@NgModule({
  declarations: [
    HeaderMenuComponent,
    BannerBackgroundComponent,
    CardMoreComponent,
    CardsComponent,
    AboutComponent,
    CommentaryComponent,
  ], // Declarations components
  exports: [
    HeaderMenuComponent,
    BannerBackgroundComponent,
    CardMoreComponent,
    CardsComponent,
    AboutComponent,
    CommentaryComponent,
  ], // Exports components to app.module
  imports: [CommonModule],
})
export class HomepageModule {}
