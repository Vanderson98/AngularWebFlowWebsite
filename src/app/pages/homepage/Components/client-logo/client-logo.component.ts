import { Component } from '@angular/core';
import { clientLogoURL } from './clientLogo';

@Component({
  selector: 'app-client-logo',
  templateUrl: './client-logo.component.html',
  styleUrl: './client-logo.component.css',
})
export class ClientLogoComponent {
  urlsImage: clientLogoURL[] = [
    {
      URL: '../../../../../assets/img/Homepage/ClienteLogo/01.svg',
    },
    {
      URL: '../../../../../assets/img/Homepage/ClienteLogo/02.svg',
    },
    {
      URL: '../../../../../assets/img/Homepage/ClienteLogo/03.svg',
    },
    {
      URL: '../../../../../assets/img/Homepage/ClienteLogo/04.svg',
    },
    {
      URL: '../../../../../assets/img/Homepage/ClienteLogo/05.svg',
    },
  ];
}
