import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private translate: TranslateService) { }

  scrollTo(elementId: string) {
    if (elementId) {
      const element = document.getElementById(elementId);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  changeLanguage(languageName: string) {
    localStorage.setItem('language', languageName);
    this.translate.use(languageName);
  }
}
