import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GLicenseWizard } from './g-license-wizard';

describe('GLicenseWizard', () => {
  let component: GLicenseWizard;
  let fixture: ComponentFixture<GLicenseWizard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GLicenseWizard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GLicenseWizard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
