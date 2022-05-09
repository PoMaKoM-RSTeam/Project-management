import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditColumnTitleComponent } from './edit-column-title.component';

describe('EditColumnTitleComponent', () => {
  let component: EditColumnTitleComponent;
  let fixture: ComponentFixture<EditColumnTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditColumnTitleComponent],
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
