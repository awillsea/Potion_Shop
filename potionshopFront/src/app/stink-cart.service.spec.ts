import { TestBed } from '@angular/core/testing';

import { StinkCartService } from './stink-cart.service';

describe('StinkCartService', () => {
  let service: StinkCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StinkCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
