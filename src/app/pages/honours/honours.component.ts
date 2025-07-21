import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-honours',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './honours.component.html',
  styleUrls: ['./honours.component.css']
})
export class HonoursComponent {
  honours = [
    {
      title: 'ICC Men\'s Cricket World Cup',
      year: '1983',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/ICC_Cricket_World_Cup_Trophy.jpg/640px-ICC_Cricket_World_Cup_Trophy.jpg'
    },
    {
      title: 'ICC T20 World Cup',
      year: '2007',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/ICC_T20_World_Cup_2022_Trophy.jpg/640px-ICC_T20_World_Cup_2022_Trophy.jpg'
    },
    {
      title: 'ICC Champions Trophy',
      year: '2013',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Champions_Trophy_2013.jpg/640px-Champions_Trophy_2013.jpg'
    },
    {
      title: 'Asia Cup',
      year: '2018',
      image: 'https://upload.wikimedia.org/wikipedia/en/7/71/Asia_Cup_trophy.jpg'
    }
  ];
}
