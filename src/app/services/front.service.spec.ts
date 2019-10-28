import { TestBed } from '@angular/core/testing';

import { FrontService } from './front.service';

describe('FrontService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FrontService = TestBed.get(FrontService);
    expect(service).toBeTruthy();
  });
});
