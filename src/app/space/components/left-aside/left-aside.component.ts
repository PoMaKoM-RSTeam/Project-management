import { Component, Input } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'space-left-aside',
  templateUrl: './left-aside.component.html',
  styleUrls: ['./left-aside.component.scss'],
})
export class LeftAsideComponent {
  @Input() pageName: string = 'Page Name';

  @Input() title: string = 'Title';

  isCollapsed = false;

  isSpaceSearchVisible = false;

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  closeAside(event: Event) {
    this.stopPropagation(event);
    this.isCollapsed = true;
  }

  openSearchInput(event: Event, search: string) {
    this.stopPropagation(event);

    if (!search) this.isSpaceSearchVisible = !this.isSpaceSearchVisible;
  }
}
