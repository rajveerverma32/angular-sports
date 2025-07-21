import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [MatCardModule, NgFor],
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent {
  matches = [
    {
      title: 'India vs Pakistan',
      date: 'July 10, 2025',
      score: 'India 350/2 (50 overs) - Pakistan 140/10 (28.3 overs)',
      winner: 'India won by 200 runs',
      image: 'https://i.pinimg.com/1200x/c2/ab/5c/c2ab5c012bc2055c3d41a786c9a4f72c.jpg'
    },
    {
      title: 'Argentina vs France',
      date: 'June 28, 2025',
      score: 'Argentina 3 - 2 France',
      winner: 'Argentina won in extra time',
      image: 'https://i.pinimg.com/1200x/16/7a/3e/167a3e30670247017741650e23d188e4.jpg'
    },
    {
      title: 'Roger Federer vs Nadal',
      date: 'May 15, 2025',
      score: 'Federer 6-4, 3-6, 7-6',
      winner: 'Federer wins in 3 sets',
      image: 'https://i.pinimg.com/1200x/35/ac/54/35ac5434a92c9b52120e36313a858695.jpg'
    }
  ];
}
