import { TestBed } from '@angular/core/testing';

import { SendstatusService } from './sendstatus.service';

describe('SendstatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendstatusService = TestBed.get(SendstatusService);
    expect(service).toBeTruthy();
  });
});
