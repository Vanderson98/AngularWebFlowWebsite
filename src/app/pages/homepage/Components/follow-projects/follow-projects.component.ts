import { Component } from '@angular/core';
import { ProjectsInformation } from './followProject';

@Component({
  selector: 'follow-projects',
  templateUrl: './follow-projects.component.html',
  styleUrl: './follow-projects.component.css',
})
export class FollowProjectsComponent {
  productsInformations: ProjectsInformation[] = [
    {
      URL: '../../../../../assets/img/Homepage/Projects/01.png',
      Name: 'Modern Kitchen',
      Subname: 'Decor / Architeture',
      Class: 'borderRightTop',
    },
    {
      URL: '../../../../../assets/img/Homepage/Projects/02.png',
      Name: 'Modern Kitchen',
      Subname: 'Decor / Architeture',
      Class: 'borderLeftTop',
    },
    {
      URL: '../../../../../assets/img/Homepage/Projects/03.png',
      Name: 'Modern Kitchen',
      Subname: 'Decor / Architeture',
      Class: 'borderRightBottom',
    },
    {
      URL: '../../../../../assets/img/Homepage/Projects/04.png',
      Name: 'Modern Kitchen',
      Subname: 'Decor / Architeture',
      Class: 'borderLeftBottom',
    },
  ];
}
