import { TestBed, inject } from '@angular/core/testing';

import { TranslateService } from './translate.service';
import { HttpClientModule } from '@angular/common/http';

describe('TranslateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [TranslateService]
    });
  });

  it('should be created', inject([TranslateService], (service: TranslateService) => {
    expect(service).toBeTruthy();
  }));
});
