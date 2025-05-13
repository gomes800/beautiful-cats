import { TestBed } from '@angular/core/testing';

import { CatContentService } from './cat-content.service';

describe('CatContentService', () => {
  let service: CatContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
