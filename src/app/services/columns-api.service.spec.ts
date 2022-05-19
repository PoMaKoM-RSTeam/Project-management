import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthAPIService } from './auth-api.service';

import { ColumnsAPIService } from './columns-api.service';

describe('ColumnsAPIService', () => {
  let service: ColumnsAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserDynamicTestingModule, RouterTestingModule],
      providers: [{ provide: HttpClient, useValue: {} }],
    }).compileComponents();
    service = TestBed.inject(ColumnsAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
