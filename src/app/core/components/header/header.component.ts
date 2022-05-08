import { Component } from '@angular/core';
import { INavLink } from '../../interfaces/nav-link.interface';
import { LinkIcon, PathUrl } from '../../../../constants/enums';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public nav_links: INavLink[] = [
    { url: PathUrl.HOME, icon: LinkIcon.HOME },
    { url: PathUrl.LIST, icon: LinkIcon.LIST },
    { url: PathUrl.BOARD, icon: LinkIcon.BOARD },
    { url: PathUrl.SEARCH, icon: LinkIcon.SEARCH },
  ];

  public nav_more: INavLink[] = [
    { url: PathUrl.HOME, icon: LinkIcon.ABOUT },
    { url: PathUrl.HOME, icon: LinkIcon.SETTINGS },
  ];
}
