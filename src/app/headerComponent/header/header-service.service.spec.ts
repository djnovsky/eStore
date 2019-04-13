import { TestBed } from '@angular/core/testing';

import { HeaderServiceService } from './header-service.service';

describe('HeaderServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeaderServiceService = TestBed.get(HeaderServiceService);
    expect(service).toBeTruthy();
  });
});
