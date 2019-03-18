import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  //orderUrl: string = 'http://localhost:3000/api/';

  order:any;

  orders:any;

  creatOrder(newOrder) {
    return this.http.post('/neworder', newOrder, { withCredentials: true })
      .pipe(map((res: any) => {
        this.order = res;
        return this.order;
      }));
  }

  getOrder() {
    return this.http.get('/order', { withCredentials: true })
	    .pipe(map((res: any) => {
        this.order = res;
        return this.order;
	    }));
  }

  getOrders() {
    return this.http.get('/orders')
	    .pipe(map((res: any) => {
        this.order = res;
        return this.order;
	    }));
  }
}
