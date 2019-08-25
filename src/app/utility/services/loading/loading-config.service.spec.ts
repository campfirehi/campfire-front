import { TestBed } from '@angular/core/testing';

import { LoadingConfigService } from './loading-config.service';

describe('LoadingConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadingConfigService = TestBed.get(LoadingConfigService);
    expect(service).toBeTruthy();
  });
});
