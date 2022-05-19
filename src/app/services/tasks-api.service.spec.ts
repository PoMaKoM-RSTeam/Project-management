import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TasksAPIService } from './tasks-api.service';

describe('TasksAPIService', () => {
  let service: TasksAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [{ provide: HttpClient, useValue: {} }],
    }).compileComponents();
    service = TestBed.inject(TasksAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
