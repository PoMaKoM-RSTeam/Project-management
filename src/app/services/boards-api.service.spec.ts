import { TestBed } from '@angular/core/testing';

import { BoardsAPIService } from './boards-api.service';

describe('BoardsAPIService', () => {
  let service: BoardsAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardsAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
