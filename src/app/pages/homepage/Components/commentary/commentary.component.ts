import { Component } from '@angular/core';
import { commentaryText } from './commentaryCard';

@Component({
  selector: 'app-commentary',
  templateUrl: './commentary.component.html',
  styleUrl: './commentary.component.css',
})
export class CommentaryComponent {
  commentary: commentaryText[] = [
    {
      image:
        'https://imgs.search.brave.com/4jpxI3LL5VswRSLsJaV1JpYQvkui2P2j3Fg-qxtrSl8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtZ2xvYmFsLndl/YnNpdGUtZmlsZXMu/Y29tLzVlYzdkYWQy/ZTZmNjI5NWE5ZTJh/MjNkZC81ZWRmYTdj/NmY5NzhlNzUzNzJk/YzMzMmVfcHJvZmls/ZXBob3RvMS5qcGVn',
      name: 'Nattash Mith',
      city: 'sydney, USA',
      commentary:
        'Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.',
    },
    {
      image:
        'https://imgs.search.brave.com/uKJWrPay-aXrHz80maPaGiiNLZ2kYAv79ZxJ-34RAT0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtZ2xvYmFsLndl/YnNpdGUtZmlsZXMu/Y29tLzVlYzdkYWQy/ZTZmNjI5NWE5ZTJh/MjNkZC81ZWRmYTdj/NjYwNGM3N2IxYjRi/ZDY1OGFfcHJvZmls/ZXBob3RvNS5qcGVn',
      name: 'Raymond Galario',
      city: 'sydney, australia',
      commentary:
        'Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.',
    },
    {
      image:
        'https://imgs.search.brave.com/z1sFg0Ji_J9jTjF4vhoG8RuZqQverdjNI8WbN1uhA8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtZ2xvYmFsLndl/YnNpdGUtZmlsZXMu/Y29tLzVlYzdkYWQy/ZTZmNjI5NWE5ZTJh/MjNkZC81ZWRmYTdj/NzQxZTFjZDBiM2Y0/YTc3MTJfcHJvZmls/ZXBob3RvX2dvb2Rj/cm9wLmpwZWc',
      name: 'Benny roll',
      city: 'Sydney, new york',
      commentary:
        'Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.',
    },
  ];
}
