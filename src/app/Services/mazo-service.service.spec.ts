import { TestBed } from '@angular/core/testing';

import { MazoServiceService } from './mazo-service.service';

describe('MazoServiceService', () => {
  let service: MazoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MazoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
