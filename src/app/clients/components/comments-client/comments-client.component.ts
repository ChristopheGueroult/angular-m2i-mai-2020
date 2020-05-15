import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Client } from 'src/app/shared/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-comments-client',
  templateUrl: './comments-client.component.html',
  styleUrls: ['./comments-client.component.scss']
})
export class CommentsClientComponent implements OnInit {
  public firstItem$: Subject<Client>;
  constructor(
    private cs: ClientsService
  ) { }

  ngOnInit(): void {
    this.firstItem$ = this.cs.firstItem$;
  }

}
