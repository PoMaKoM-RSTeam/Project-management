import { Injectable } from '@angular/core';
import { INavLinks } from '../core/interfaces/nav-links.interface';

@Injectable({
  providedIn: 'root',
})
export class SpaceHeaderService {
  navLinks: INavLinks = {
    links: [
      {
        url: '',
        icon: 'unordered-list',
        title: 'List',
      },
      {
        url: 'board',
        icon: 'fund',
        title: 'Board',
      },
    ],
    active: '',
  };

  setActive(value: string) {
    this.navLinks.active = value;
  }
}
