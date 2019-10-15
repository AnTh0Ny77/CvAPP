import { TestBed } from '@angular/core/testing';

import { DynaProfilService } from './dyna-profil.service';

describe('DynaProfilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynaProfilService = TestBed.get(DynaProfilService);
    expect(service).toBeTruthy();
  });
});
