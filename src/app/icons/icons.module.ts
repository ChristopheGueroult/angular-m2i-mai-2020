import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconNavComponent } from './font-awesome-components/icon-close/icon-nav/icon-nav.component';
import { IconCloseComponent } from './font-awesome-components/icon-close/icon-close.component';
import { IconEditComponent } from './font-awesome-components/icon-close/icon-edit/icon-edit.component';
import { IconTrashComponent } from './font-awesome-components/icon-close/icon-trash/icon-trash.component';


@NgModule({
  declarations: [IconNavComponent, IconCloseComponent, IconEditComponent, IconTrashComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [IconNavComponent, IconCloseComponent, IconEditComponent, IconTrashComponent]
})
export class IconsModule { }
