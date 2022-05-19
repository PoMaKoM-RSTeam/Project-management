import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-localization',
  template: '',
  styleUrls: [],
})
export class LocalizationComponent implements OnInit {
  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    const localeLang = localStorage.getItem('lang');

    if (localeLang) {
      this.translateService.use(localeLang);
    } else {
      let language = window.navigator ? window.navigator.language : 'en';

      language = language.split('-')[0].toLowerCase();

      if (!['en', 'ru', 'uk', 'be'].includes(language)) language = 'en';

      localStorage.setItem('lang', language);

      this.translateService.setDefaultLang(language);
    }
  }
}
