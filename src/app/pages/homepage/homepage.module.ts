import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Component main
import { HomepageComponent } from './homepage.component';

// Components childs
import { BannerBackgroundComponent } from './Components/banner-background/banner-background.component';
import { CardMoreComponent } from './Components/card-more/card-more.component';
import { CardsComponent } from './Components/card-more/cards/cards.component';
import { AboutComponent } from './Components/about/about.component';
import { CommentaryComponent } from './Components/commentary/commentary.component';
import { CardsCommentaryComponent } from './Components/commentary/cards/cards.component';
import { ClientLogoComponent } from './Components/client-logo/client-logo.component';
import { FollowProjectsComponent } from './Components/follow-projects/follow-projects.component';
import { CounterComponent } from './Components/counter/counter.component';
import { BlogComponent } from './Components/blog/blog.component';
import { ContactComponent } from './Components/contact/contact.component';

@NgModule({
  declarations: [
    HomepageComponent,
    BannerBackgroundComponent,
    CardMoreComponent,
    CardsComponent,
    AboutComponent,
    CommentaryComponent,
    CardsCommentaryComponent,
    ClientLogoComponent,
    FollowProjectsComponent,
    CounterComponent,
    BlogComponent,
    ContactComponent,
  ],
  exports: [HomepageComponent],
  imports: [CommonModule],
})
export class HomepageModule {}
