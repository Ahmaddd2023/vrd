import { Component } from '@angular/core';

import {IconService} from "./core/services/icon.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  constructor(public iconService: IconService,
               translate: TranslateService) {
    translate.setDefaultLang('en');

    const savedLanguage = localStorage.getItem('language');
    savedLanguage ? translate.use(savedLanguage) : translate.use('en');
  }
}
