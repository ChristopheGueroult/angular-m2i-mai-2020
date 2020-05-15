import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Client } from 'src/app/shared/models/client';
import { ClientsService } from '../../services/clients.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss']
})
export class PageEditClientComponent implements OnInit {
  public item$: Observable<Client>;
  public title: string;
  public subtitle: string;
  constructor(
    private cs: ClientsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.title = 'Clients';
    this.subtitle = 'Edit client';

    this.item$ = this.route.paramMap.pipe(
      switchMap(params => this.cs.getItemById(params.get('id')))
    );
  }

  public edit(item: Client) {

    this.cs.update(item).subscribe((res) => {
      // si res ok
      this.router.navigate(['clients']);
    });
  }

}
