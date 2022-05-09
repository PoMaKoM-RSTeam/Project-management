import { Injectable } from '@angular/core';
import { INavLinks } from '../core/interfaces/nav-links.interface';
import { PathTitle, PathUrl, NgIcon } from '../../constants/enums';

@Injectable({
  providedIn: 'root',
})
export class SpaceHeaderService {
  navLinks: INavLinks = {
    links: [
      {
        url: PathUrl.HOME,
        icon: NgIcon.LIST,
        title: PathTitle.LIST,
      },
      {
        url: PathUrl.BOARD,
        icon: NgIcon.BOARD,
        title: PathTitle.BOARD,
      },
    ],
    active: PathUrl.HOME,
  };

  setActive(value: string) {
    this.navLinks.active = value;
  }
}
