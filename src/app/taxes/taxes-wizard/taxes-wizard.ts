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

@Component({
  selector: 'app-taxes-wizard',
  imports: [    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDividerModule,],
  templateUrl: './taxes-wizard.html',
  styleUrl: './taxes-wizard.css',
})
export class TaxesWizard {
  // ✅ Initialize forms safely (no "used before initialized")
  step1: FormGroup;
  step2: FormGroup;
  step3: FormGroup;
  step4: FormGroup;
  step5: FormGroup;

  constructor(private fb: FormBuilder) {
    this.step1 = this.fb.group({
      hasSin: [false, Validators.requiredTrue],
      hasAddress: [false, Validators.requiredTrue],
      hasT4orIncome: [false, Validators.requiredTrue],
      understandsDeadline: [false, Validators.requiredTrue],
    });

    this.step2 = this.fb.group({
      taxYear: ['2025', Validators.required],
      employmentIncome: [0, [Validators.required, Validators.min(0)]],
      otherIncome: [0, [Validators.min(0)]],
      taxWithheld: [0, [Validators.min(0)]],
    });

    this.step3 = this.fb.group({
      rrsp: [0, [Validators.min(0)]],
      tuition: [0, [Validators.min(0)]],
      movingExpenses: [0, [Validators.min(0)]],
    });

    this.step4 = this.fb.group({
      filingMethod: ['software', Validators.required], // software | clinic | accountant
      craAccount: ['no', Validators.required], // yes | no
    });

    this.step5 = this.fb.group({
      reviewedInfo: [false, Validators.requiredTrue],
      savedCopy: [false, Validators.requiredTrue],
    });
  }

  // Helper: safe number conversion
  private n(v: unknown): number {
    const num = Number(v);
    return Number.isFinite(num) ? num : 0;
  }

  get totalIncome(): number {
    return this.n(this.step2.get('employmentIncome')?.value) + this.n(this.step2.get('otherIncome')?.value);
  }

  get totalDeductions(): number {
    return (
      this.n(this.step3.get('rrsp')?.value) +
      this.n(this.step3.get('tuition')?.value) +
      this.n(this.step3.get('movingExpenses')?.value)
    );
  }

  get taxableIncomeEstimate(): number {
    return Math.max(0, this.totalIncome - this.totalDeductions);
  }

  get estimatedTaxRate(): number {
    const t = this.taxableIncomeEstimate;
    if (t <= 15000) return 0.05;
    if (t <= 50000) return 0.12;
    return 0.18;
  }

  get estimatedTaxPayable(): number {
    return Math.round(this.taxableIncomeEstimate * this.estimatedTaxRate);
  }

  get withheld(): number {
    return this.n(this.step2.get('taxWithheld')?.value);
  }

  get estimatedRefundOrOwing(): number {
    return Math.round(this.withheld - this.estimatedTaxPayable);
  }

  get refundLabel(): string {
    const val = this.estimatedRefundOrOwing;
    if (val > 0) return `Estimated refund: $${val}`;
    if (val < 0) return `Estimated amount owing: $${Math.abs(val)}`;
    return 'Estimated result: $0 (break-even)';
  }
}
