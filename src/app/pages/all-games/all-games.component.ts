import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-all-games',
  standalone: true,
  encapsulation: ViewEncapsulation.None,  // 👉 disables Shadow DOM to allow global CSS
  imports: [CommonModule, MatCardModule, MatIconModule],
  template: `
    <div style="padding: 20px;">
      <h2 class="games-title">🏆 All Games</h2>

      <div class="card-grid">
        <mat-card *ngFor="let game of games" class="game-card">
          <mat-card-header>
            <mat-icon mat-card-avatar>{{ game.icon }}</mat-icon>
            <mat-card-title>{{ game.name }}</mat-card-title>
            <mat-card-subtitle>{{ game.venue }}</mat-card-subtitle>
          </mat-card-header>

          <img mat-card-image [src]="game.image" alt="{{ game.name }}" class="game-img" />

          <mat-card-content>
            <p>{{ game.description }}</p>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
    }

    .game-card {
      height: 350px;
      overflow: hidden;
    }

    .game-img {
      height: 150px !important;
      width: 100% !important;
      object-fit: cover;
      display: block;
    }

    .games-title {
      margin-bottom: 20px;
      font-size: 24px;
      font-weight: bold;
      color: #3f51b5;
      text-align: left;
    }

    mat-card-title {
      font-size: 18px;
      font-weight: bold;
    }

    mat-card-subtitle {
      font-size: 12px;
    }

    mat-card-content {
      font-size: 14px;
    }
  `]
})
export class AllGamesComponent {
  games = [
    {
      name: 'Basketball',
      icon: 'sports_basketball',
      venue: 'Court A',
      description: 'Fast-paced court game played between two teams.',
      image: 'https://i.pinimg.com/736x/ac/34/d1/ac34d1e734d3ce5490f836a2836f4fbd.jpg'
    },
    {
      name: 'Cricket',
      icon: 'sports_cricket',
      venue: 'Field B',
      description: 'A bat-and-ball game with teams of 11 players.',
      image: 'https://i.pinimg.com/736x/1a/93/da/1a93da2f9d2de376bf5a370ca1f8f324.jpg'
    },
    {
      name: 'Football',
      icon: 'sports_soccer',
      venue: 'Main Ground',
      description: 'The world’s most popular team sport.',
      image: 'https://i.pinimg.com/736x/3b/84/85/3b8485d922dda9ff0df6b4c00a2f857e.jpg'
    },
    {
      name: 'Chess',
      icon: 'sports_esports',
      venue: 'Indoor Hall',
      description: 'A game of strategy played on a checkered board.',
      image: 'https://i.pinimg.com/1200x/02/34/16/023416445ae0c8267977cc2822fb7ded.jpg'
    },
    {
      name: 'Volleyball',
      icon: 'sports_volleyball',
      venue: 'Court B',
      description: 'A net game with two teams and a flying ball.',
      image: 'https://i.pinimg.com/736x/f7/78/1e/f7781ea39e9e9ee6f66e609c7ae4bc9e.jpg'
    },
    {
      name: 'Badminton',
      icon: 'sports_tennis',
      venue: 'Indoor Hall',
      description: 'Fast-paced racket sport with shuttlecock, agility, precision, and strategy.',
      image: 'https://i.pinimg.com/736x/23/1a/b1/231ab1ad7761163944343c96deed7b56.jpg'
    }
  ];
}
