import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './pages/shared/shared.module';
import { HomepageModule } from './pages/homepage/homepage.module'; // Import

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, HomepageModule], // Import components
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
