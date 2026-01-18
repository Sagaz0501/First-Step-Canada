import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GLicense } from './g-license';

describe('GLicense', () => {
  let component: GLicense;
  let fixture: ComponentFixture<GLicense>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GLicense]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GLicense);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
