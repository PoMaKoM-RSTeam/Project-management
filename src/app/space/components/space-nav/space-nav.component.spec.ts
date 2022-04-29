import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceNavComponent } from './space-nav.component';

describe('SpaceNavComponent', () => {
  let component: SpaceNavComponent;
  let fixture: ComponentFixture<SpaceNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpaceNavComponent],
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
