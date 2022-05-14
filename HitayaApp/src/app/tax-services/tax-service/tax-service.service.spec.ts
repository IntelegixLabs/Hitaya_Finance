import { TestBed } from '@angular/core/testing';

import { TaxServiceService } from './tax-service.service';

describe('TaxServiceService', () => {
  let service: TaxServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
