import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainerOneComponent } from './container-one/container-one.component';
import { MainComponent } from './main/main.component';
import { ContainerTwoComponent } from './container-two/container-two.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ContainerOneComponent,
    ContainerTwoComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    MainComponent
  ]
})
export class CoreModule { }
