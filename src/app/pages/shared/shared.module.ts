import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderMenuComponent, FooterComponent],
  exports: [HeaderMenuComponent, FooterComponent],
  imports: [CommonModule],
})
export class SharedModule {}
