import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Button } from 'src/app/shared/interfaces/button';
import { Client } from 'src/app/shared/models/client';
import { ClientsService } from '../../services/clients.service';
import { Link } from 'src/app/shared/interfaces/link';

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
  public navLinks: Link[];
  public states = Object.values(StateClient);
  constructor(
    private cs: ClientsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.navLinks = [{route: 'details', label: 'details'}, {route: 'comments', label: 'comments'}];
    this.btnRoute = {
      text: 'Add client',
      route: 'add'
    };
    this.route.data.subscribe((datas) => {
      this.title = datas.title;
      this.subtitle = datas.subtitle;
    });
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

  public edit(item: Client) {
    this.router.navigate(['clients', 'edit', item.id]);
    // this.router.navigate(['clients/edit', item.id], { queryParams:  filter, skipLocationChange: true});
  }

  public loadDetails(item: Client) {
    this.cs.firstItem$.next(item);
  }

}
