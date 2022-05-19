import { TestBed } from '@angular/core/testing';
import { SearchPipe } from './search.pipe';

describe('SearchPipe', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchPipe],
    }).compileComponents();
  });

  it('create an instance', () => {
    const pipe = new SearchPipe();

    expect(pipe).toBeTruthy();
  });
});
