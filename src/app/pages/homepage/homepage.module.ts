import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderMenuComponent } from '../../Components/Homepage/header-menu/header-menu.component';
import { BannerBackgroundComponent } from '../../Components/Homepage/banner-background/banner-background.component';
import { CardMoreComponent } from '../../Components/Homepage/card-more/card-more.component';
import { CardsComponent } from '../../Components/Homepage/card-more/cards/cards.component';

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
