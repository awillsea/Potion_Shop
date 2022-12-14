import { TestBed } from '@angular/core/testing';

import { PotionAndWizService } from './potion-and-wiz.service';

describe('PotionAndWizService', () => {
  let service: PotionAndWizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PotionAndWizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
