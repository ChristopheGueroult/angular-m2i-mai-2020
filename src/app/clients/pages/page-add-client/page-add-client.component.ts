import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public states = Object.values(StateClient);
  constructor(
    private cs: ClientsService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.title = 'Clients';
    this.subtitle = 'Add client';
  }

  public add(item: Client) {

    this.cs.add(item).subscribe((res) => {
      // si res ok
      this.router.navigate(['clients']);
    });
  }

}
