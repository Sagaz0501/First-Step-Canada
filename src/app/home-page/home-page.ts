import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { ProcessDataService } from '../services/process-data.service';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})

export class HomePage {
  constructor(public processData: ProcessDataService) {}

  getTags(id: string): string[] {
    switch (id) {
      case 'sin':
        return ['documents', 'work'];
      case 'taxes':
        return ['tax', 'cra'];
      case 'g-license':
        return ['driving', 'ontario'];
      default:
        return [];
    }
  }
}
