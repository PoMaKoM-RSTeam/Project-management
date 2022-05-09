import { TestBed } from '@angular/core/testing';

import { TasksAPIService } from './tasks-api.service';

describe('TasksAPIService', () => {
  let service: TasksAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
