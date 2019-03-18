import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/orders/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  orders:any[]=[];

  constructor(public Order:OrderService, private router:Router) {
    this.Order.getOrders().subscribe(data => {
      console.log(data);
      this.orders = data;
    });
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['admin/']);
  }

}
