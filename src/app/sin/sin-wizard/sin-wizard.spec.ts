import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinWizard } from './sin-wizard';

describe('SinWizard', () => {
  let component: SinWizard;
  let fixture: ComponentFixture<SinWizard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinWizard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinWizard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
