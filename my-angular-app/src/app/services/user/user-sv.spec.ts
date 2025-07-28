import { TestBed } from '@angular/core/testing';

import { UserSV } from './user-sv';

describe('UserSV', () => {
  let service: UserSV;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSV);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
