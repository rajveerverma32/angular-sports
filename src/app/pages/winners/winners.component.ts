import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon'; // ✅ Required
import { InViewDirective } from '../../shared/directives/in-view.directive';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-winners',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule, // ✅ Required for <mat-icon>
    InViewDirective
  ],
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.css'],
  animations: [
    trigger('scrollAnimation', [
      transition('* => true', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'none' }))
      ])
    ])
  ]
})
export class WinnersComponent {
  winners = [
    { name: 'Rajveer Verma', game: 'Chess' },
   
  ];

  inViewStates: boolean[] = Array(this.winners.length).fill(false);

  updateInView(index: number, isInView: boolean) {
    this.inViewStates[index] = isInView;
  }
}
