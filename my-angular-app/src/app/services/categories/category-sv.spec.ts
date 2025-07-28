import { TestBed } from '@angular/core/testing';

import { CategorySV } from './category-sv';

describe('CategorySV', () => {
  let service: CategorySV;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorySV);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
