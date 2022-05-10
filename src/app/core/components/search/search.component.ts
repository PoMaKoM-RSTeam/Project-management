import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() buttonDirection: 'left' | 'right' = 'right';

  @Output() searchLine = new EventEmitter<string>();

  isBoardSearchVisible = false;

  changeSearchLine(search: string) {
    this.searchLine.emit(search);
  }

  openSearchInput(search: string) {
    if (!search) this.isBoardSearchVisible = !this.isBoardSearchVisible;
  }
}
