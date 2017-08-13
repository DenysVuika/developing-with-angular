import { TestBed, inject } from '@angular/core/testing';

import { CompositeLogService } from './composite-log.service';

describe('CompositeLogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompositeLogService]
    });
  });

  it('should be created', inject([CompositeLogService], (service: CompositeLogService) => {
    expect(service).toBeTruthy();
  }));
});
