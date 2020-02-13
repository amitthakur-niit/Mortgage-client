import { TestBed } from '@angular/core/testing';

import { PaymentDataResolverService } from './payment-data-resolver.service';

describe('PaymentDataResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaymentDataResolverService = TestBed.get(PaymentDataResolverService);
    expect(service).toBeTruthy();
  });
});
