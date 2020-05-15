import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private pCollection: Observable<Client[]>;
  private urlApi = environment.urlApi;
  public firstItem$: BehaviorSubject<Client> = new BehaviorSubject(null);
  private itemDeleted: Client;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.urlApi}clients`).pipe(
      tap(clientsTab => {
        if (this.firstItem$.value === this.itemDeleted || this.firstItem$.value === null) {
          this.firstItem$.next(clientsTab[0]);
        }
      })
    );
  }

  // get collection
  get collection(): Observable<Client[]> {
    return this.pCollection;
  }
  // set collection
  set collection(col: Observable<Client[]>) {
    this.pCollection = col;
  }

  // changeState of item
  public changeState(item: Client, state: StateClient): Observable<Client> {
    const obj = new Client({...item});
    obj.state = state;
    return this.update(obj);
  }

  // update item in collection
  public update(item: Client): Observable<Client> {
    return this.http.put<Client>(`${this.urlApi}clients/${item.id}`, item);
  }

  // add item in collection
  public add(item: Client): Observable<Client> {
    return this.http.post<Client>(`${this.urlApi}clients`, item);
  }

  // delete item in collection
  public delete(item: Client): Observable<Client> {
    this.itemDeleted = item;
    return this.http.delete<Client>(`${this.urlApi}clients/${item.id}`);
  }

  // get item by id from collection
  public getItemById(id: string): Observable<Client> {
    return this.http.get<Client>(`${this.urlApi}clients/${id}`);
  }
}
