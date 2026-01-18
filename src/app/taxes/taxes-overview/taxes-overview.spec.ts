import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxesOverview } from './taxes-overview';

describe('TaxesOverview', () => {
  let component: TaxesOverview;
  let fixture: ComponentFixture<TaxesOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxesOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxesOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
