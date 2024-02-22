import { Component, Input } from '@angular/core';
import { CounterInterface } from './counterObj';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  counterInformations: CounterInterface[] = [
    {
      Year: 12,
      Text: 'Years of experience',
    },
    {
      Year: null,
      Text: '',
      Class: 'bar',
    },
    {
      Year: 85,
      Text: 'Sucess project',
    },
    {
      Year: null,
      Text: '',
      Class: 'bar',
    },
    {
      Year: 15,
      Text: 'Active Project',
    },
    {
      Year: null,
      Text: '',
      Class: 'bar',
    },
    {
      Year: 95,
      Text: 'Happy customers',
    },
  ];
}
