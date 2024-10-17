import { TestBed } from '@angular/core/testing';

import { SingleproidService } from './singleproid.service';

describe('SingleproidService', () => {
  let service: SingleproidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleproidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
