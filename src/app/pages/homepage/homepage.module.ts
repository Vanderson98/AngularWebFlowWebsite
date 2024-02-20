import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderMenuComponent } from './Components/header-menu/header-menu.component';
import { BannerBackgroundComponent } from './Components/banner-background/banner-background.component';
import { CardMoreComponent } from './Components/card-more/card-more.component';
import { CardsComponent } from './Components/card-more/cards/cards.component';
@NgModule({
  declarations: [
    HeaderMenuComponent,
    BannerBackgroundComponent,
    CardMoreComponent,
    CardsComponent,
  ], // Declarations components
  exports: [
    HeaderMenuComponent,
    BannerBackgroundComponent,
    CardMoreComponent,
    CardsComponent,
  ], // Exports components to app.module
  imports: [CommonModule],
})
export class HomepageModule {}
