import { Component, Input, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: [
    './header-menu.component.css',
    './header-menu-mobile.component.css',
  ],
})
export class HeaderMenuComponent implements OnInit {
  // Name buttons header
  btnLinks: string[] = [
    'Home',
    'Pages',
    'Services',
    'Project',
    'Blog',
    'Contact',
  ];

  @Input()
  logoImage: string = '';
  @Input()
  imageSearch: string = '';

  ngOnInit(): void {}

  // Em desenvolvimento :)
  actionMenu(action: string) {
    // Open and Close menu
    $('.btnMobile').toggleClass('btnOpen');

    // View menu mobile
    $('.buttonsLink').toggleClass('buttonView');

    // Body hidden scroll
    $('body').toggleClass('bodyNoMove');

    if ($('searchNav')) {
      $('.searchNav').remove();
    }
  }
}
