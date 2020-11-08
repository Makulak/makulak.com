import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(translate: TranslateService) {
    const savedLanguage: string = localStorage.getItem('language');

    translate.setDefaultLang('en');

    if (savedLanguage) {
      translate.use(savedLanguage);
    } else {
      translate.use('en');
    }
  }
}
