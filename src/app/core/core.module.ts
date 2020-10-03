import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FirstContainerComponent } from './first-container/first-container.component';
import { MainComponent } from './main/main.component';
import { SecondContainerComponent } from './second-container/second-container.component';

@NgModule({
  declarations: [NavbarComponent, FirstContainerComponent, MainComponent, SecondContainerComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    MainComponent
  ]
})
export class CoreModule { }
