import { OrderI } from '../interfaces/order-i';
import { StateOrder } from '../enums/state-order.enum';

export class Order implements OrderI {
  tjmHt = 1500;
  nbJours = 1;
  tva = 20;
  state = StateOrder.OPTION;
  id: number;
  typePresta: string;
  client: string;
  comment: string;
  constructor(obj?: Partial<Order>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
  totalHt(): number {
    console.log('TOTAL HT CALLED');
    return this.nbJours * this.tjmHt;
  }
  totalTtc(): number {
    console.log('TOTAL TTC CALLED');
    return this.totalHt() * (1 + this.tva / 100);
  }
}


