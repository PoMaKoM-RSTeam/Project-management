import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(public searchService: SearchService) {}

  isBoardSearchVisible = false;

  findControl = new FormControl('', [Validators.required, Validators.minLength(3)]);

  ngOnInit(): void {
    this.findControl.valueChanges.pipe(debounceTime(1000), distinctUntilChanged()).subscribe((ev) => {
      if (ev.length > 2) {
        this.searchService.search(ev);
      }
    });
  }
}
