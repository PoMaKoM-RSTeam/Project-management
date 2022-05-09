import { TestBed } from '@angular/core/testing';

import { ColumnsAPIService } from './columns-api.service';

describe('ColumnsAPIService', () => {
  let service: ColumnsAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColumnsAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
