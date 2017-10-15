import { TestBed, inject } from '@angular/core/testing';

import { ClickCounterService } from './click-counter.service';

describe('ClickCounterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClickCounterService]
    });
  });

  it('should be created', inject([ClickCounterService], (service: ClickCounterService) => {
    expect(service).toBeTruthy();
  }));
});
