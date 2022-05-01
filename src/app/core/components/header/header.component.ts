import { Component } from '@angular/core';
import { INavLink } from '../../interfaces/nav-link.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public nav_links: INavLink[] = [
    { url: '', icon: 'home' },
    { url: 'space', icon: 'check-square' },
    { url: 'notification', icon: 'bell' },
  ];

  public nav_more: INavLink[] = [
    { url: '', icon: 'file-text' },
    { url: '', icon: 'question' },
    { url: '', icon: 'trophy' },
    { url: '', icon: 'more' },
  ];
}
