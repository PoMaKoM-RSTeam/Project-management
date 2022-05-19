import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { INavLink } from '../../interfaces/nav-link.interface';
import { PathUrl } from '../../../../constants/enums';

@Component({
  selector: 'header-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  public url: string = '';

  constructor(private router: Router) {}

  getUtl() {
    const url =
      this.router.config.filter((item) => window.location.href.split('/').find((u) => item.path === u))[0]?.path || '';
    if (url === PathUrl.BOARD) return '';
    return url;
  }

  @Input() links: INavLink[] = [] as INavLink[];

  @Input() withBorder: boolean = false;
}
