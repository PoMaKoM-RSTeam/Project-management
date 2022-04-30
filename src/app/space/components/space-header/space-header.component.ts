import { Component, Input } from '@angular/core';
import { INavLinks } from 'src/app/core/interfaces/nav-links.interface';

@Component({
  selector: 'space-header',
  templateUrl: './space-header.component.html',
  styleUrls: ['./space-header.component.scss'],
})
export class SpaceHeaderComponent {
  @Input() title = 'Title';

  isBoardSearchVisible = false;

  navLinks: INavLinks = {
    links: [
      {
        url: 'list',
        icon: 'unordered-list',
        title: 'List',
      },
      {
        url: 'board',
        icon: 'fund',
        title: 'Board',
      },
      {
        url: 'calendar',
        icon: 'calendar',
        title: 'Calendar',
      },
      {
        url: '',
        icon: 'fund',
        title: 'Board',
      },
    ],
    active: 'List',
  };

  openSearchInput(search: string) {
    if (!search) this.isBoardSearchVisible = !this.isBoardSearchVisible;
  }
}
