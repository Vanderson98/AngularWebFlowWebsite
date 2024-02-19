import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header-menu',
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.css',
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
}
