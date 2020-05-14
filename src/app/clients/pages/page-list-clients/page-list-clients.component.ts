import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Client } from 'src/app/shared/models/client';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { ClientsService } from '../../services/clients.service';
import { Button } from 'src/app/shared/interfaces/button';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {
  public collection$: Subject<Client[]> = new Subject();
  public title: string;
  public subtitle: string;
  public headers: string[];
  public btnRoute: Button;
  public states = Object.values(StateClient);
  constructor(private cs: ClientsService) { }

  ngOnInit(): void {
    this.btnRoute = {
      text: 'Add client',
      route: 'add'
    };
    this.title = 'Clients';
    this.subtitle = 'All clients';
    // this.collection$ = this.cs.collection;
    this.cs.collection.subscribe((datas) => {
      this.collection$.next(datas);
    });
    this.headers = [
      'Name',
      'CA HT',
      'CA TTC',
      'State',
      'Action'
    ];
  }

  public changeState(item: Client, event) {
    this.cs.changeState(item, event.target.value).subscribe((res) => {
      // traite erreur
      item.state = res.state;
    });

  }

  public openPopup() {
    console.log('popup opened');
  }

  public delete(item: Client) {
    this.cs.delete(item).subscribe((res) => {
      this.cs.collection.subscribe((datas) => {
        this.collection$.next(datas);
      });
    });
  }

}
