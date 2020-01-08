import { TestBed } from '@angular/core/testing';

import { FormlistService } from './formlist.service';

describe('FormlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormlistService = TestBed.get(FormlistService);
    expect(service).toBeTruthy();
  });
});
