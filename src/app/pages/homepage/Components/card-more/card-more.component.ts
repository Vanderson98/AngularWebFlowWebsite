import { Component, Input, OnInit } from '@angular/core';
import { TextCard } from './textCard'; // Import interface

@Component({
  selector: 'card-more',
  templateUrl: './card-more.component.html',
  styleUrl: './card-more.component.css',
})
export class CardMoreComponent {
  textsCard: TextCard[] = [
    {
      Title: 'Project Plan',
      Paragraph:
        'There are many variations of the passages of lorem Ipsum from available, majority.',
    },
    {
      Title: 'Interior Work',
      Paragraph:
        'There are many variations of the passages of lorem Ipsum from available, majority.',
    },
    {
      Title: 'Realization',
      Paragraph:
        'There are many variations of the passages of lorem Ipsum from available, majority.',
    },
  ];
}
