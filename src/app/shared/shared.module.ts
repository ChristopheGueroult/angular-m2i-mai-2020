import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { ButtonComponent } from './components/button/button.component';
import { TotalPipe } from './pipes/total.pipe';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';
import { StateDirective } from './directives/state.directive';



@NgModule({
  declarations: [TableauLightComponent, ButtonComponent, TotalPipe, TableauDarkComponent, StateDirective],
  exports: [TemplatesModule, TableauLightComponent, ButtonComponent, TotalPipe, TableauDarkComponent, StateDirective],
  imports: [
    CommonModule,
    TemplatesModule
  ]
})
export class SharedModule { }
