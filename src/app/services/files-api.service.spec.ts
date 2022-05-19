import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FilesAPIService } from './files-api.service';

describe('FilesAPIService', () => {
  let service: FilesAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilesAPIService],
      imports: [BrowserDynamicTestingModule, RouterTestingModule],
      providers: [{ provide: HttpClient, useValue: {} }],
    }).compileComponents();
  });

  it('should be created', () => {
    expect(service).toBeUndefined();
  });
});
