import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';



@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
     MatListModule
  ],
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav #sidenav mode="over">
        <mat-nav-list>
          <a mat-list-item routerLink="/" (click)="sidenav.close()">🏠 Home</a>
          <a mat-list-item routerLink="/games" (click)="sidenav.close()">🎮 Games</a>
          <a mat-list-item routerLink="/winners" (click)="sidenav.close()">🏆 Winners</a>
        </mat-nav-list>
      </mat-sidenav>

      <mat-sidenav-content>
        <mat-toolbar color="primary" class="toolbar">
  <button mat-icon-button (click)="sidenav.toggle()">
    <mat-icon>menu</mat-icon>
  </button>
  <span class="title">🏫 School Sports</span>

  <!-- Search Bar -->
  <mat-form-field appearance="outline" class="search-bar">
    <mat-label>Search</mat-label>
    <input matInput placeholder="Search games" />
    <button mat-icon-button matSuffix>
      <mat-icon>search</mat-icon>
    </button>
  </mat-form-field>
</mat-toolbar>

        <ng-content></ng-content>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [`
    .toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #5213dcff; /* dark navbar */
  padding: 0 16px;
}

.title {
  margin-left: 12px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  flex-grow: 1;
}

.search-bar {
  background: transparent;
  margin-left: auto;
  margin-right: 8px;
  color: white;
}

.search-bar .mat-form-field-outline {
  display: none; /* Removes border */
}

.search-bar .mat-form-field-flex {
  background: transparent;
}

.search-bar input {
  color: white;
}

  `]
})
export class ToolbarComponent {
  searchQuery = '';
}
