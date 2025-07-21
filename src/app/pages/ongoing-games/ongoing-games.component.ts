import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-ongoing-games',
  standalone: true,
  imports: [MatCardModule, NgFor],
  templateUrl: './ongoing-games.component.html',
  styleUrls: ['./ongoing-games.component.css']
})
export class OngoingGamesComponent {
  ongoingGames = [
    {
      title: 'India vs Australia',
      sport: 'Cricket',
      time: 'Live - 2nd Innings',
      image: 'https://i.pinimg.com/736x/42/d6/6e/42d66e2076bb5998ff5c9afb8b950f24.jpg'
    },
    {
      title: 'Football: Real Madrid vs Barcelona',
      sport: 'Football',
      time: 'Live - 35th Minute',
      image: 'https://i.pinimg.com/736x/f4/26/9a/f4269a7d17bef1a11fe95d187f797ab4.jpg'
    },
    {
      title: 'Tennis: Nadal vs Djokovic',
      sport: 'Tennis',
      time: 'Live - Set 2',
      image: 'https://i.pinimg.com/736x/b7/13/0c/b7130c48ef87597813d4551794391235.jpg'
    }
  ];
}
