import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('trigger', [
      transition(':enter', [style({opacity: 0}), animate('1000ms')])
    ])
  ]
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
