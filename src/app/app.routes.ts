import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AllGamesComponent } from './pages/all-games/all-games.component';
import { WinnersComponent } from './pages/winners/winners.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'games', component: AllGamesComponent },
  { path: 'winners', component: WinnersComponent },
];
