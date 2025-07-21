import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-winners',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.css'],
  animations: [
    trigger('scrollAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class WinnersComponent {
  winners = [
    {
      name: 'Virat Kohli',
      sport: 'Cricket',
      description: 'Man of the Match - India vs Pakistan',
      image: 'https://i.pinimg.com/736x/11/13/11/111311c76e6078fbf0c6a511c5f8c2b7.jpg'
    },
    {
      name: 'PV Sindhu',
      sport: 'Badminton',
      description: 'Gold Medalist in Women\'s Singles',
      image: 'https://i.pinimg.com/736x/28/8b/5c/288b5c8967b0df1dc1240ca95a522b10.jpg'
    },
    {
      name: 'Viswanathan Anand',
      sport: 'Chess',
      description: 'Chess Gold Medalist',
      image: 'https://i.pinimg.com/736x/ec/ae/d5/ecaed5ebd7bc109f1ed3cfc954a95792.jpg'
    }
  ];
}
