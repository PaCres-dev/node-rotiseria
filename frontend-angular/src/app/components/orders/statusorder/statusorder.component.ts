import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { OrderService } from '../../../services/orders/order.service';

@Component({
  selector: 'app-statusorder',
  templateUrl: './statusorder.component.html',
  styleUrls: ['./statusorder.component.css']
})
export class StatusorderComponent implements OnInit {

	order:Object={
		pedido: null,  
		precioFinal: null, 
		datosPago: null,
	};

  constructor(private Auth: AuthService,public Order: OrderService, private router: Router) { }

	ngOnInit() {
		this.Auth.logged()
			.subscribe(data => {
				if (data.success) {
					this.Order.getOrder().subscribe(data => {
						console.log(data);
						this.order = data;
					});
				}
				else {
					console.log(data);
					this.router.navigate(['/login']);
				}
			});
	}
}
