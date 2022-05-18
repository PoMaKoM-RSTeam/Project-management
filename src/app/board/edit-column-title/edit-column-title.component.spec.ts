import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EditColumnTitleComponent } from './edit-column-title.component';

describe('EditColumnTitleComponent', () => {
  let component: EditColumnTitleComponent;
  let fixture: ComponentFixture<EditColumnTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditColumnTitleComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditColumnTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
