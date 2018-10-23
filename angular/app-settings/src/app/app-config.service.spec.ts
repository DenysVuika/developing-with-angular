import { TestBed, inject } from '@angular/core/testing';

import { AppConfigService } from './app-config.service';
import { HttpClientModule } from '@angular/common/http';

describe('AppConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AppConfigService]
    });
  });

  it('should be created', inject(
    [AppConfigService],
    (service: AppConfigService) => {
      expect(service).toBeTruthy();
    }
  ));
});
