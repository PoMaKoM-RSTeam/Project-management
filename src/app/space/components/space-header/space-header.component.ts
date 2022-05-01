import { Component, Input } from '@angular/core';

@Component({
  selector: 'space-header',
  templateUrl: './space-header.component.html',
  styleUrls: ['./space-header.component.scss'],
})
export class SpaceHeaderComponent {
  @Input() title = 'Title';

  isBoardSearchVisible = false;

  openSearchInput(search: string) {
    if (!search) this.isBoardSearchVisible = !this.isBoardSearchVisible;
  }
}
