import { TestBed } from '@angular/core/testing';

import { ContentFulService } from './content-ful.service';

describe('ContentFulService', () => {
  let service: ContentFulService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentFulService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
