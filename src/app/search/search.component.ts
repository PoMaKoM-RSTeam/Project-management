import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(public searchService: SearchService) {}

  isBoardSearchVisible = false;

  findControl = new FormControl();

  ngOnInit(): void {
    this.findControl.valueChanges
      .pipe(
        filter((value) => value.length > 2),
        debounceTime(1000),
        distinctUntilChanged(),
      )
      .subscribe((ev) => {
        if (ev.length > 2) this.searchService.search(ev);
      });
  }
}
