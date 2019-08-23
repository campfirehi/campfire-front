import { TestBed } from '@angular/core/testing';

import { DtTrackService } from './dt-track.service';

describe('DtTrackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DtTrackService = TestBed.get(DtTrackService);
    expect(service).toBeTruthy();
  });
});
