import { TestBed } from '@angular/core/testing';

import { ScriptLoadingService } from './script-loading.service';

describe('ScriptLoadingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScriptLoadingService = TestBed.get(ScriptLoadingService);
    expect(service).toBeTruthy();
  });
});
