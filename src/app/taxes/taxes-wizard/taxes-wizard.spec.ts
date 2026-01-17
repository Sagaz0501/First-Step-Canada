import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxesWizard } from './taxes-wizard';

describe('TaxesWizard', () => {
  let component: TaxesWizard;
  let fixture: ComponentFixture<TaxesWizard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxesWizard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxesWizard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
