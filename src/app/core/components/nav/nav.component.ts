import { Component, Input } from '@angular/core';
import { INavLink } from '../../interfaces/nav-link.interface';

@Component({
  selector: 'header-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @Input() links: INavLink[] = [] as INavLink[];

  @Input() withBorder: boolean = false;
}
