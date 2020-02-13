import { TestBed } from '@angular/core/testing';

import { ValuationDataResolverService } from './valuation-data-resolver.service';

describe('ValuationDataResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValuationDataResolverService = TestBed.get(ValuationDataResolverService);
    expect(service).toBeTruthy();
  });
});
