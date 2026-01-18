import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';

import { ProcessDataService, ProcessInfo } from '../../services/process-data.service';

@Component({
  selector: 'app-sin-overview',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatStepperModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './sin-overview.html',
  styleUrl: './sin-overview.css',
})
export class SinOverview {
  process: ProcessInfo;

  constructor(private processData: ProcessDataService) {
    // Pull the SIN content from the shared service
    this.process = this.processData.getProcessById('sin')!;
  }
}
