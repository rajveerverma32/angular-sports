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
      player: 'Virat Kohli',
      title: 'ICC Cricketer of the Year',
      year: '2018',
      description: 'Recognized for consistent performance across all formats of cricket.',
      image: 'https://i.pinimg.com/736x/2c/55/47/2c55473cb85ef2aac99522d1e89c3e8e.jpg'
    },
    {
      player: 'MS Dhoni',
      title: 'Padma Bhushan',
      year: '2018',
      description: 'Awarded for his service to Indian cricket and leadership as captain.',
      image: 'https://i.pinimg.com/736x/f8/dc/25/f8dc25cf1a29a65cc7d37c40e971ad42.jpg'
    },
    {
      player: 'Sachin Tendulkar',
      title: 'Bharat Ratna',
      year: '2014',
      description: 'India’s highest civilian award for unmatched cricket achievements.',
      image: 'https://i.pinimg.com/1200x/b7/94/c5/b794c5f3d44fd531064b367e96258a98.jpg'
    }
  ];
}
