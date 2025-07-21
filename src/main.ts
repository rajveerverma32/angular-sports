import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AppComponent } from './app/app.component';

// Import all standalone components
import { HomeComponent } from './app/pages/home/home.component';
import { MatchesComponent } from './app/pages/matches/matches.component';
import { HonoursComponent } from './app/pages/honours/honours.component';
import { GalleriesComponent } from './app/pages/galleries/galleries.component';
import { AllGamesComponent } from './app/pages/all-games/all-games.component';
import { OngoingGamesComponent } from './app/pages/ongoing-games/ongoing-games.component';
import { WinnersComponent } from './app/pages/winners/winners.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'matches', component: MatchesComponent },
  { path: 'honours', component: HonoursComponent },
  { path: 'galleries', component: GalleriesComponent },
  { path: 'games', component: AllGamesComponent },
  { path: 'ongoing', component: OngoingGamesComponent },
  { path: 'winners', component: WinnersComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations()
  ]
});
