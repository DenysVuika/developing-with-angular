import { TestBed, inject } from '@angular/core/testing';

import { CustomLogService } from './custom-log.service';

describe('CustomLogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomLogService]
    });
  });

  it('should be created', inject([CustomLogService], (service: CustomLogService) => {
    expect(service).toBeTruthy();
  }));
});
