import { Component, Input } from '@angular/core';
import { INavLink } from '../../interfaces/nav-link.interface';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'header-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @Input() links: INavLink[] = [] as INavLink[];
}
