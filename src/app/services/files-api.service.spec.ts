import { TestBed } from '@angular/core/testing';

import { FilesAPIService } from './files-api.service';

describe('FilesAPIService', () => {
  let service: FilesAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilesAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
