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

    if (this.isDarkMode) {
      this.themeService.update('lightMode');
    } else {
      this.themeService.update('darkMode');
    }
  }
}
