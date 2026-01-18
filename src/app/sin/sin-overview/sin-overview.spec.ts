import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinOverview } from './sin-overview';

describe('SinOverview', () => {
  let component: SinOverview;
  let fixture: ComponentFixture<SinOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
