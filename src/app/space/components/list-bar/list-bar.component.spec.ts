import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBarComponent } from './list-bar.component';

describe('ListBarComponent', () => {
  let component: ListBarComponent;
  let fixture: ComponentFixture<ListBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
