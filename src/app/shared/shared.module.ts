import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TemplatesModule } from '../templates/templates.module';
import { ButtonComponent } from './components/button/button.component';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';
import { TextModule } from '../text/text.module';
import { NavInlineComponent } from './components/nav-inline/nav-inline.component';



@NgModule({
  declarations: [TableauLightComponent, ButtonComponent, TotalPipe, TableauDarkComponent, StateDirective, NavInlineComponent],
  exports: [TemplatesModule, TableauLightComponent, ButtonComponent, TotalPipe, TableauDarkComponent, StateDirective, TextModule, NavInlineComponent],
  imports: [
    CommonModule,
    TemplatesModule,
    RouterModule,
    TextModule
  ]
})
export class SharedModule { }
