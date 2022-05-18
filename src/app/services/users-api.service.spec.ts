import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UsersAPIService } from './users-api.service';

describe('UsersAPIService', () => {
  let service: UsersAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [{ provide: HttpClient, useValue: {} }],
    }).compileComponents();
    service = TestBed.inject(UsersAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
