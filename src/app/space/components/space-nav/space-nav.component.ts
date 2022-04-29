import { Component, Input } from '@angular/core';
import { INavLinks } from '../../../core/interfaces/nav-links.interface';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'space-nav',
  templateUrl: './space-nav.component.html',
  styleUrls: ['./space-nav.component.scss'],
})
export class SpaceNavComponent {
  @Input() links: INavLinks = { links: [], active: '' };
}
