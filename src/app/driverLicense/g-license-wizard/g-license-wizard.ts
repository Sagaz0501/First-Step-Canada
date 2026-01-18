import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { ProcessDataService, ProcessInfo } from '../../services/process-data.service';


type Step = { title: string; text: string };

@Component({
  selector: 'app-g1-wizard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  templateUrl: './g-license-wizard.html',
  styleUrl: './g-license-wizard.css',
})
export class G1Wizard {
  startForm = new FormGroup({
    startPoint: new FormControl<'new' | 'foreign' | 'g1' | 'g2' | ''>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    city: new FormControl<string>('', { nonNullable: true }),
  });

  goalsForm = new FormGroup({
    goalSteps: new FormControl<boolean>(true, { nonNullable: true }),
    goalDocs: new FormControl<boolean>(true, { nonNullable: true }),
    goalCosts: new FormControl<boolean>(false, { nonNullable: true }),
  });

  resultSteps: Step[] = [];
  resultNote = '';
  error = '';
  cityText = '';

  @ViewChild('resultBox') resultBox?: ElementRef<HTMLDivElement>;

  buildResult() {
    this.error = '';

    if (this.startForm.invalid) {
      this.error = 'Please complete Step 1 before viewing the checklist.';
      return;
    }

    const startPoint = this.startForm.controls.startPoint.value;
    const city = this.startForm.controls.city.value.trim();
    this.cityText = city ? `in ${city}` : '';

    const base: Record<string, { steps: Step[]; note: string }> = {
      new: {
        steps: [
          { title: 'Prepare for the G1 knowledge test', text: 'Review Ontario driving rules and road signs.' },
          { title: 'Take the G1 test', text: 'Go to an Ontario test centre and complete the knowledge test.' },
          { title: 'Practice and book the G2 road test', text: 'After G1, practice and schedule your G2 road test.' },
          { title: 'Book the G road test', text: 'After the required waiting period, schedule the final road test.' },
        ],
        note: 'Rules, fees, and waiting periods can change. Verify official details when booking.',
      },
      foreign: {
        steps: [
          { title: 'Check if your licence can be exchanged', text: 'Some countries have exchange agreements. Bring your licence and required documents.' },
          { title: 'If no exchange: start with G1', text: 'Take the knowledge test and follow the standard pathway.' },
          { title: 'Use a driving school if needed', text: 'It can help with practice and road test readiness.' },
        ],
        note: 'Foreign licence rules depend on your country and documentation.',
      },
      g1: {
        steps: [
          { title: 'Practice driving with a qualified driver', text: 'Focus on safe habits and common road test skills.' },
          { title: 'Book your G2 road test', text: 'Schedule when you feel ready and meet waiting requirements.' },
        ],
        note: 'Practice consistently and plan ahead for booking availability.',
      },
      g2: {
        steps: [
          { title: 'Practice highway and advanced skills', text: 'Work on merging, lane changes, and safe following distances.' },
          { title: 'Book your G road test', text: 'Schedule the final test after the required waiting period.' },
        ],
        note: 'If you are unsure, consider a lesson focused on test routes and common mistakes.',
      },
    };

    const pack = base[startPoint] ?? { steps: [], note: '' };
    this.resultSteps = pack.steps;
    this.resultNote = pack.note;

    queueMicrotask(() => {
      const el = this.resultBox?.nativeElement;
      if (el) el.focus();
    });
  }

  resetAll() {
    this.startForm.reset({ startPoint: '', city: '' });
    this.goalsForm.reset({ goalSteps: true, goalDocs: true, goalCosts: false });

    this.resultSteps = [];
    this.resultNote = '';
    this.error = '';
    this.cityText = '';
  }
}
