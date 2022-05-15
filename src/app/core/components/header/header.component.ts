import { Component } from '@angular/core';
import { INavLink } from '../../interfaces/nav-link.interface';
import { NgIcon, PathUrl } from '../../../../constants/enums';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}

  public nav_links: INavLink[] = [
    { url: PathUrl.HOME, icon: NgIcon.HOME },
    { url: PathUrl.LIST, icon: NgIcon.LIST },
    { url: PathUrl.BOARD, icon: NgIcon.BOARD },
    { url: PathUrl.PROFILE, icon: NgIcon.PROFILE },
    { url: PathUrl.SEARCH, icon: NgIcon.SEARCH },
  ];

  public nav_more: INavLink[] = [
    { url: PathUrl.ABOUT, icon: NgIcon.ABOUT },
    { url: PathUrl.SETTINGS, icon: NgIcon.SETTINGS },
  ];

  logoutUser() {
    this.authService.logoutHandle();
  }
}
