import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Order } from 'src/app/shared/models/order';
import { OrdersService } from '../../services/orders.service';
import { Button } from 'src/app/shared/interfaces/button';

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
  public btnRoute: Button;
  public btnHref: Button;
  public btnAction: Button;
  public states = Object.values(StateOrder);
  constructor(private os: OrdersService) { }

  ngOnInit(): void {
    this.btnRoute = {
      text: 'Add an order',
      route: 'add'
    };
    this.btnHref = {
      text: 'Google',
      href: 'http://www.google.fr'
    };
    this.btnAction = {
      text: 'Open popup',
      action: true
    };
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

  public changeState(item: Order, event) {
    this.os.changeState(item, event.target.value).subscribe((res) => {
      // traite erreur
      item.state = res.state;
    });

  }

  public openPopup() {
    console.log('popup opened');
  }

}
