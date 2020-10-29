import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainerOneComponent } from './container-one/container-one.component';
import { MainComponent } from './main/main.component';
import { ContainerTwoComponent } from './container-two/container-two.component';
import { ContainerThreeComponent } from './container-three/container-three.component';
import { ExperienceItemComponent } from './experience-item/experience-item.component';
import { ContainerFourComponent } from './container-four/container-four.component';
import { ContainerBaseComponent } from './container-base/container-base.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ContainerOneComponent,
    ContainerTwoComponent,
    MainComponent,
    ContainerThreeComponent,
    ExperienceItemComponent,
    ContainerFourComponent,
    ContainerBaseComponent,
    CodeEditorComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MainComponent
  ]
})
export class CoreModule { }
