import { Component } from '@angular/core';
import { INavLink } from '../../interfaces/nav-link.interface';
import { NgIcon, PathUrl } from '../../../../constants/enums';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public nav_links: INavLink[] = [
    { url: PathUrl.HOME, icon: NgIcon.HOME },
    { url: PathUrl.LIST, icon: NgIcon.LIST },
    { url: PathUrl.BOARD, icon: NgIcon.BOARD },
    { url: PathUrl.SEARCH, icon: NgIcon.SEARCH },
  ];

  public nav_more: INavLink[] = [
    { url: PathUrl.HOME, icon: NgIcon.ABOUT },
    { url: PathUrl.HOME, icon: NgIcon.SETTINGS },
  ];
}
