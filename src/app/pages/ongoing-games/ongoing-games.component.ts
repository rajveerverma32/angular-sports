import { Component } from '@angular/core';

@Component({
  selector: 'app-ongoing-games',
  standalone: true,
  template: `
    <div class="p-6">
      <h2 class="text-2xl font-bold mb-4">Ongoing Games</h2>
      <div class="space-y-4">
        <div *ngFor="let game of ongoingGames" class="p-4 bg-yellow-100 border-l-4 border-yellow-500">
          <h3 class="font-semibold">{{ game.name }}</h3>
          <p>Started at: {{ game.time }}</p>
        </div>
      </div>
    </div>
  `,
})
export class OngoingGamesComponent {
  ongoingGames = [
    { name: 'Cricket', time: '09:00 AM' },
    { name: 'Tennis', time: '10:15 AM' },
  ];
}
