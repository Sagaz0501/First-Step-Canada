import { TestBed } from '@angular/core/testing';

import { FaqChat } from './faq-chat';

describe('FaqChat', () => {
  let service: FaqChat;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaqChat);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
