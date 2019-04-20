import { TestBed } from '@angular/core/testing';

import { ContentLoadedService } from './content-loaded.service';

describe('ContentLoadedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContentLoadedService = TestBed.get(ContentLoadedService);
    expect(service).toBeTruthy();
  });
});
