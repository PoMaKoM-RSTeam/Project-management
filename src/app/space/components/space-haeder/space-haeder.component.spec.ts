import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceHaederComponent } from './space-haeder.component';

describe('SpaceHaederComponent', () => {
  let component: SpaceHaederComponent;
  let fixture: ComponentFixture<SpaceHaederComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpaceHaederComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceHaederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
