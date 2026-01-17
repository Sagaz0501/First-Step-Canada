import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sin } from './sin';

describe('Sin', () => {
  let component: Sin;
  let fixture: ComponentFixture<Sin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
