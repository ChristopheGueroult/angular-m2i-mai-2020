import { Injectable } from '@angular/core';
import { Order } from 'src/app/shared/models/order';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private pCollection: Observable<Order[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}orders`).pipe(
      map((tab) => {
        return tab.map((obj) => {
          return new Order(obj);
        });
      })
    );
  }

  // get collection
  get collection(): Observable<Order[]> {
    return this.pCollection;
  }
  // set collection
  set collection(col: Observable<Order[]>) {
    this.pCollection = col;
  }

  // changeState of item
  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = new Order({...item});
    obj.state = state;
    return this.update(obj);
  }

  // update item in collection
  public update(item: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}orders/${item.id}`, item);
  }

  // add item in collection

  // delete item in collection
  public delete(item: Order): Observable<Order> {
    return this.http.delete<Order>(`${this.urlApi}orders/${item.id}`);
  }

  // get item by id from collection
}
