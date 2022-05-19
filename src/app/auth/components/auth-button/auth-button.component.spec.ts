import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NZ_CONFIG } from 'ng-zorro-antd/core/config';
import { NzMessageService } from 'ng-zorro-antd/message';

import { AuthButtonComponent } from './auth-button.component';

describe('AuthButtonComponent', () => {
  let component: AuthButtonComponent;
  let fixture: ComponentFixture<AuthButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthButtonComponent],
      imports: [RouterTestingModule, BrowserDynamicTestingModule, MatDialogModule],
      providers: [{ provide: HttpClient, useValue: {} }, { provide: NZ_CONFIG, useValue: {} }, NzMessageService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
