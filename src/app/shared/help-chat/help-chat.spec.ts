import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpChat } from './help-chat';

describe('HelpChat', () => {
  let component: HelpChat;
  let fixture: ComponentFixture<HelpChat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpChat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpChat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
