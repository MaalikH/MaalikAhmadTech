import { TestBed } from '@angular/core/testing';

import { PricingServiceService } from './pricing-service.service';

describe('PricingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PricingServiceService = TestBed.get(PricingServiceService);
    expect(service).toBeTruthy();
  });
});
