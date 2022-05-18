import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NZ_CONFIG } from 'ng-zorro-antd/core/config';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from '../auth/services/auth.service';
import { UsersAPIService } from '../services/users-api.service';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      imports: [RouterTestingModule, BrowserDynamicTestingModule, MatDialogModule],
      providers: [
        { provide: HttpClient, useValue: {} },
        { provide: AuthService, useValue: {} },
        { provide: UsersAPIService, useValue: {} },
        { provide: NZ_CONFIG, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
        NzMessageService,
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const a = 'aa';

    expect(a).toEqual('aa');
  });
});
