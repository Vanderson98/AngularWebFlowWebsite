import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderMenuComponent } from './Components/header-menu/header-menu.component';
import { BannerBackgroundComponent } from './Components/banner-background/banner-background.component';
import { CardMoreComponent } from './Components/card-more/card-more.component';
import { CardsComponent } from './Components/card-more/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    BannerBackgroundComponent,
    CardMoreComponent,
    CardsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
