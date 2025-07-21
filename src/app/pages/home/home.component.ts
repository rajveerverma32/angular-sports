import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  template: `
    <div style="padding: 20px;">
      <h2 style="margin-bottom: 20px; text-align: left;">🏠 Welcome</h2>

      <div class="card-grid">
        <mat-card *ngFor="let item of featured">
          <mat-card-header>
            <mat-icon mat-card-avatar>{{ item.icon }}</mat-icon>
            <mat-card-title>{{ item.name }}</mat-card-title>
            <mat-card-subtitle>{{ item.subtitle }}</mat-card-subtitle>
          </mat-card-header>
          <img mat-card-image [src]="item.image" alt="{{ item.name }}" />
          <mat-card-content>
            <p>{{ item.description }}</p>
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

    mat-card {
      max-width: 100%;
    }

    h2 {
      font-size: 24px;
      font-weight: 600;
      color: #3f51b5;
    }
  `]
})
export class HomeComponent {
  featured = [
    {
      name: 'Top Game: Cricket',
      icon: 'sports_cricket',
      subtitle: 'Featured Sport',
      description: 'Cricket is a bat-and-ball game played between two teams.',
      image: 'https://i.pinimg.com/736x/1a/93/da/1a93da2f9d2de376bf5a370ca1f8f324.jpg'
    },
    {
      name: 'Top Player',
      icon: 'emoji_events',
      subtitle: 'Award Winner',
      description: 'Our best player this season with outstanding performance.',
      image: 'https://i.pinimg.com/736x/3b/84/85/3b8485d922dda9ff0df6b4c00a2f857e.jpg'
    },
    {
      name: 'Upcoming Match',
      icon: 'event',
      subtitle: 'Next Week',
      description: 'Get ready for the final showdown in the inter-school championship.',
      image: 'https://i.pinimg.com/736x/ac/34/d1/ac34d1e734d3ce5490f836a2836f4fbd.jpg'
    }
  ];
}
