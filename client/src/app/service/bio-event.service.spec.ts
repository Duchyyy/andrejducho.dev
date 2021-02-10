import { TestBed } from '@angular/core/testing';

import { BioEventService } from './bio-event.service';

describe('BioEventService', () => {
  let service: BioEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BioEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
