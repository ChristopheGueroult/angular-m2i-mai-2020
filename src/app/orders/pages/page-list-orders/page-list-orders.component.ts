import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from 'src/app/shared/models/order';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public collection$: Observable<Order[]>;
  public title: string;
  public subtitle: string;
  public headers: string[];
  constructor(private os: OrdersService) { }

  ngOnInit(): void {
    this.title = 'Orders';
    this.subtitle = 'All orders';
    this.collection$ = this.os.collection;
    this.headers = [
      'Type',
      'Client',
      'NbJours',
      'TjmHT',
      'Total HT',
      'Total TTC',
      'State'
    ];

  }

}
