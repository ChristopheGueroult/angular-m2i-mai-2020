import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from '../icons/icons.module';
import { SharedModule } from '../shared/shared.module';
import { ClientsRoutingModule } from './clients-routing.module';
import { FormClientComponent } from './components/form-client/form-client.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';
import { DetailsClientComponent } from './components/details-client/details-client.component';
import { CommentsClientComponent } from './components/comments-client/comments-client.component';



@NgModule({
  declarations: [PageListClientsComponent, PageAddClientComponent, FormClientComponent, PageEditClientComponent, DetailsClientComponent, CommentsClientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    IconsModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
