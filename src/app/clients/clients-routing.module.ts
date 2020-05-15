import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { DetailsClientComponent } from './components/details-client/details-client.component';
import { CommentsClientComponent } from './components/comments-client/comments-client.component';


const routes: Routes = [
  {
    path: '',
    component: PageListClientsComponent,
    data: {title: 'Clients', subtitle: 'All client'},
    children: [
      { path: '', redirectTo: 'details', pathMatch: 'full' },
      { path: 'details', component: DetailsClientComponent },
      { path: 'comments', component: CommentsClientComponent },
    ]
  },
  { path: 'add', component: PageAddClientComponent },
  { path: 'edit/:id', component: PageEditClientComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
