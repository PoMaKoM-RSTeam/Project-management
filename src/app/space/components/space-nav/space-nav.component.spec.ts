import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SpaceNavComponent } from './space-nav.component';

describe('SpaceNavComponent', () => {
  let component: SpaceNavComponent;
  let fixture: ComponentFixture<SpaceNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpaceNavComponent],
      imports: [RouterTestingModule, BrowserDynamicTestingModule],
      providers: [{ provide: HttpClient, useValue: {} }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
