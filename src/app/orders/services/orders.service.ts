import { Injectable } from '@angular/core';
import { Order } from 'src/app/shared/models/order';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private pCollection: Observable<Order[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}orders`);
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

  // update item in collection

  // add item in collection

  // get item by id from collection
}
