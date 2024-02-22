import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderMenuComponent } from './Components/header-menu/header-menu.component';
import { BannerBackgroundComponent } from './Components/banner-background/banner-background.component';
import { CardMoreComponent } from './Components/card-more/card-more.component';
import { CardsComponent } from './Components/card-more/cards/cards.component';
import { AboutComponent } from './Components/about/about.component';
import { CommentaryComponent } from './Components/commentary/commentary.component';
import { CardsCommentaryComponent } from './Components/commentary/cards/cards.component';
import { ClientLogoComponent } from './Components/client-logo/client-logo.component';
import { FollowProjectsComponent } from './Components/follow-projects/follow-projects.component';

@NgModule({
  declarations: [
    HeaderMenuComponent,
    BannerBackgroundComponent,
    CardMoreComponent,
    CardsComponent,
    AboutComponent,
    CommentaryComponent,
    CardsCommentaryComponent,
    ClientLogoComponent,
    FollowProjectsComponent,
  ], // Declarations components
  exports: [
    HeaderMenuComponent,
    BannerBackgroundComponent,
    CardMoreComponent,
    CardsComponent,
    AboutComponent,
    CommentaryComponent,
    CardsCommentaryComponent,
    ClientLogoComponent,
    FollowProjectsComponent,
  ], // Exports components to app.module
  imports: [CommonModule],
})
export class HomepageModule {}
