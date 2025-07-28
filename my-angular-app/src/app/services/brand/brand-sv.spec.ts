import { TestBed } from '@angular/core/testing';

import { BrandSV } from './brand-sv';

describe('BrandSV', () => {
  let service: BrandSV;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandSV);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
