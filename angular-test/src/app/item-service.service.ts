import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './item';
import { response } from 'express';
import { error } from 'console';

@Injectable({
  providedIn: 'root',
})
export class ItemServiceService {
  private url = 'http://localhost:8080/item';
  constructor(private http: HttpClient) {}
  waitingItems: Item[] = [];
  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.url + '/add', item);
  }

  getWaitingItem(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url + '/getAll');
  }

  delete(id: number): Observable<String> {
    console.log('delete ' + this.url + '/delete/' + id);
    return this.http.delete<String>(this.url + '/delete/' + id);
  }
  updateStatus(status: string, item: Item): Observable<String>{
    item.status = status;
    return this.http.put<String>(this.url + '/update/', item);
  }
}
