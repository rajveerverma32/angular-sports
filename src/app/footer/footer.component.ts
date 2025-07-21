import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbarModule],
  template: `
    <mat-toolbar color="primary" style="justify-content: space-between; padding: 10px; font-size: 14px;">
      <span>© 2025 Rajveer Verma. All rights reserved.</span>
      <span style="margin-right: 16px;"> rajveer&#64;gmail.com</span>
    </mat-toolbar>
  `,
})
export class FooterComponent {}
