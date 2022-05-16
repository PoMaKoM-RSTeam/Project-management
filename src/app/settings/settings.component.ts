import { OverlayContainer } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  isDarkMode: boolean;

  constructor(private overlay: OverlayContainer, private themeService: ThemeService) {
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
  }

  toggleDarkMode() {
    this.isDarkMode = this.themeService.isDarkMode();

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.isDarkMode ? this.themeService.update('lightMode') : this.themeService.update('darkMode');
  }
}
