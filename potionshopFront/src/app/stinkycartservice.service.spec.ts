import { TestBed } from '@angular/core/testing';

import { StinkycartserviceService } from './stinkycartservice.service';

describe('StinkycartserviceService', () => {
  let service: StinkycartserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StinkycartserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
