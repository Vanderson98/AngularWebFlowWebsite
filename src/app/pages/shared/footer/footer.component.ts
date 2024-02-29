import { Component } from '@angular/core';
import { footerInterfaceLink } from './footerInterface';

@Component({
  selector: 'footer-menu',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css', './footer-mobile.component.css'],
})
export class FooterComponent {
  pagesLinks: footerInterfaceLink[] = [
    {
      linkName: 'about us',
      url: '#',
    },
    {
      linkName: 'Our projects',
      url: '#',
    },
    {
      linkName: 'our team',
      url: '#',
    },
    {
      linkName: 'contact team',
      url: '#',
    },
    {
      linkName: 'services',
      url: '#',
    },
  ];

  servicesLinks: footerInterfaceLink[] = [
    {
      linkName: 'kitchan',
      url: '#',
    },
    {
      linkName: 'living arena',
      url: '#',
    },
    {
      linkName: 'bathroom',
      url: '#',
    },
    {
      linkName: 'dinning hall',
      url: '#',
    },
    {
      linkName: 'bedroom',
      url: '#',
    },
  ];

  contactLinks: footerInterfaceLink[] = [
    {
      linkName: '55 East birchwood ave. brooklyn, new york 11201',
      url: '#',
    },
    {
      linkName: 'contact@interno.com',
      url: '#',
    },
    {
      linkName: '(123) 456-7890',
      url: '#',
    },
  ];
}
