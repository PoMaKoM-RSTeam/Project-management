import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { NZ_CONFIG } from 'ng-zorro-antd/core/config';
import { NzMessageService } from 'ng-zorro-antd/message';

import { AuthAPIService } from './auth-api.service';

describe('AuthAPIService', () => {
  let service: AuthAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, MatDialogModule],
      providers: [{ provide: HttpClient, useValue: {} }, { provide: NZ_CONFIG, useValue: {} }, NzMessageService],
    }).compileComponents();
    service = TestBed.inject(AuthAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
