import { Component, Input } from '@angular/core';
import { INavLinks } from 'src/app/core/interfaces/nav-links.interface';

@Component({
  selector: 'space-haeder',
  templateUrl: './space-haeder.component.html',
  styleUrls: ['./space-haeder.component.scss'],
})
export class SpaceHaederComponent {
  @Input() title = 'Title';

  isBoardSearchVisible = false;

  navLinks: INavLinks = {
    links: [
      {
        url: '',
        icon: 'unordered-list',
        title: 'List',
      },
      {
        url: '',
        icon: 'fund',
        title: 'Board',
      },
      {
        url: '',
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
