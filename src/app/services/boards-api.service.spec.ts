import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BoardsAPIService } from './boards-api.service';

describe('BoardsAPIService', () => {
  let service: BoardsAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserDynamicTestingModule, RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();
    service = TestBed.inject(BoardsAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
