import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';

import { ProcessDataService, ProcessInfo } from '../../../services/process-data.service';

@Component({
  selector: 'app-g1-overview',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatStepperModule, CommonModule, RouterModule],
  templateUrl: './g-license.html',
  styleUrl: './g-license.css',
})
export class GLicense {
  process: ProcessInfo;

  constructor(private processData: ProcessDataService) {
    this.process = this.processData.getProcessById('g-license')!;
  }
}
