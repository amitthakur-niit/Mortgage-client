import { TestBed } from '@angular/core/testing';

import { PropertyDataResolverService } from './property-data-resolver.service';

describe('PropertyDataResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PropertyDataResolverService = TestBed.get(PropertyDataResolverService);
    expect(service).toBeTruthy();
  });
});
