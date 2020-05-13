import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { ButtonComponent } from './components/button/button.component';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [TableauLightComponent, ButtonComponent, TotalPipe],
  exports: [TemplatesModule, TableauLightComponent, ButtonComponent, TotalPipe],
  imports: [
    CommonModule,
    TemplatesModule
  ]
})
export class SharedModule { }
