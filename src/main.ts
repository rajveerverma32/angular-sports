import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/pages/home/home.component';
import { HonoursComponent } from './app/pages/honours/honours.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'honours', component: HonoursComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations()
  ]
});
