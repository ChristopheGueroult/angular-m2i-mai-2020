import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from 'src/app/shared/models/order';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public collection: Order[];
  public title: string;
  public subtitle: string;
  constructor(private os: OrdersService) { }

  ngOnInit(): void {
    this.title = 'Orders';
    this.subtitle = 'All orders';

    this.os.collection.subscribe((datas) => {
      this.collection = datas;
    });

  }

}
