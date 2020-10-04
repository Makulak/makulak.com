import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    TranslateModule,
  ]
})
export class SharedModule { }
