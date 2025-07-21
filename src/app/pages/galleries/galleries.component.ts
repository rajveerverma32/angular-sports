import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-galleries',
  standalone: true,
  imports: [MatCardModule, NgFor],
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.css']
})
export class GalleriesComponent {
  trophies = [
    {
      name: 'ICC World Cup Trophy',
      year: '2011',
      description: 'India won the ICC Cricket World Cup after 28 years, defeating Sri Lanka in the final.',
      image: 'https://i.pinimg.com/736x/98/a6/cb/98a6cb8aea0c838338574b5a187f7169.jpg'
    },
    {
      name: 'FIFA World Cup Trophy',
      year: '2022',
      description: 'Argentina won the FIFA World Cup in Qatar, led by Lionel Messi.',
      image: 'https://i.pinimg.com/1200x/ac/fd/30/acfd30a8d579116e1ea35bac95948639.jpg'
    },
    {
      name: 'T20 world cup ',
      year: '2024',
      description: 'India have won 2024 T20 world cup.',
      image: 'https://i.pinimg.com/736x/c0/99/06/c09906b7a8630b85d34194a4eba7c294.jpg'
    }
  ];
}
