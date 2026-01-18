import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';

import { ProcessDataService, ProcessInfo } from '../../services/process-data.service';

@Component({
  selector: 'app-sin-wizard',
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDividerModule,
  ],
  templateUrl: './sin-wizard.html',
  styleUrl: './sin-wizard.css',
})
export class SinWizard {
  process: ProcessInfo;

  // ✅ Initialize forms safely
  step1: FormGroup;
  step2: FormGroup;
  step3: FormGroup;
  step4: FormGroup;
  step5: FormGroup;

  constructor(private fb: FormBuilder, private processData: ProcessDataService) {
    this.process = this.processData.getProcessById('sin')!;

    // Step 1: basics + safety (checklist)
    this.step1 = this.fb.group({
      understandsSin: [false, Validators.requiredTrue],
      willKeepPrivate: [false, Validators.requiredTrue],
    });

    // Step 2: eligibility
    this.step2 = this.fb.group({
      statusType: ['', Validators.required], // citizen | pr | temp
      hasValidStatusDocs: [false, Validators.requiredTrue],
    });

    // Step 3: documents readiness (simple checklist)
    this.step3 = this.fb.group({
      hasOriginalDocs: [false, Validators.requiredTrue],
      nameMatchesDocs: [false, Validators.requiredTrue],
    });

    // Step 4: application method
    this.step4 = this.fb.group({
      applicationMethod: ['', Validators.required], // online | inPerson | mail
      preferredProvince: ['ON'], // optional (keeps consistent UX; you can remove if you want)
    });

    // Step 5: final review + next actions
    this.step5 = this.fb.group({
      reviewedSteps: [false, Validators.requiredTrue],
      knowsWhoToShareWith: [false, Validators.requiredTrue],
    });
  }

  // Helpers for final summary (optional but nice)
  get statusLabel(): string {
    const v = this.step2.get('statusType')?.value;
    if (v === 'citizen') return 'Canadian citizen';
    if (v === 'pr') return 'Permanent resident';
    if (v === 'temp') return 'Temporary resident (permit holder)';
    return 'Not selected';
  }

  get methodLabel(): string {
    const v = this.step4.get('applicationMethod')?.value;
    if (v === 'online') return 'Online';
    if (v === 'inPerson') return 'In person';
    if (v === 'mail') return 'By mail';
    return 'Not selected';
  }
}
