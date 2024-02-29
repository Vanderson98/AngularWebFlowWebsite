import { Component } from '@angular/core';
import { blogInterface } from './blogInterface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css', './blog-mobile.component.css'],
})
export class BlogComponent {
  articlesBlog: blogInterface[] = [
    {
      imageURL: '../../../../../assets/img/Homepage/blogImages/01.svg',
      tag: 'Kitchan Design',
      title: 'Let’s Get Solution For Building Construction Work.',
      date: '26 December,2022',
    },
    {
      imageURL: '../../../../../assets/img/Homepage/blogImages/02.svg',
      tag: 'Living Design',
      title: 'Low Cost Latest Invented Interior Designing Ideas.',
      date: '22 December,2022',
    },
    {
      imageURL: '../../../../../assets/img/Homepage/blogImages/03.svg',
      tag: 'Interior Design',
      title: 'Best For Any Office & Business Interior Solution.',
      date: '25 December,2022',
    },
  ];
}
