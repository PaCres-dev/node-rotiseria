import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { FoodService } from '../../../services/food/food.service';
import { OrderService } from '../../../services/orders/order.service';

@Component({
  selector: 'app-makeorder',
  templateUrl: './makeorder.component.html',
	styleUrls: ['./makeorder.component.css'],
	animations: [
		trigger('fade', [
			state('void', style({opacity:0})),
			transition('void => *', [
				animate(2000)
			])
		])
	]
})
export class MakeorderComponent implements OnInit {

	//STEP 1 DECLARATIONS
	step:any= 1;

	foods:any[]=[];

	selectedFoods:any[]=[];

	totalPrice:number;

	//STEP 1 DECLARATIONS FINISH

	//STEP 2 DECLARATIONS
	req:Object = {
		address: null,
		payMethod: null,
		phone: null,
		add: null,
	}

	completedRequest:Object={
		pedido: null,  
		precioFinal: null, 
		datosPago: null,
	};

	//STEP 2 DECLARATIONS FINISH
  

	constructor(public Food:FoodService,public Order:OrderService , private Auth: AuthService, private router: Router) {}

	ngOnInit() {
		this.Auth.logged().subscribe(data => {
			if (data.success) {
				this.Food.getFood().subscribe(data => {
					console.log(data);
					this.foods = data;
				});
			}
			else {
				console.log(data);
				this.router.navigate(['/login'])
			}
		});
	}

	add(f) {

		if (!this.selectedFoods.some((food) => food._id == f._id)) {
			this.selectedFoods.push( {
				_id: f._id,
				name: f.name,
				quantity: 1,
				bprice: f.price,
				price: f.price,
			});
			console.log(this.selectedFoods);
		}
		else {
			for (const s of this.selectedFoods) {
				if (s._id == f._id) {
					s.quantity += 1;
					s.price += s.bprice;
				}
			}
			console.log(this.selectedFoods);
		}
		this.totalPrice= this.selectedFoods.map(item => item.price).reduce((prev, next) => prev + next);
	}

	change(i, n:any) {
		
		let newQ = parseInt(n);
		this.selectedFoods[i].quantity = newQ;
		this.selectedFoods[i].price = newQ*this.selectedFoods[i].bprice;
		console.log(this.selectedFoods);
		this.totalPrice= this.selectedFoods.map(item => item.price).reduce((prev, next) => prev + next);
	}

	delFood(i) {
		console.log(i);
		this.selectedFoods.splice(i,1);
		console.log(this.selectedFoods);
		if (this.selectedFoods[0]) {
			this.totalPrice= this.selectedFoods.map(item => item.price).reduce((prev, next) => prev + next);
		}
		else {
			this.totalPrice= 0;
		}
	}

	selected(s) {
		if (!this.selectedFoods[0]) {
			console.log("Debes elegir al menos una comida para realizar tu pedido");
			this.router.navigate(['/makeorder']);
		}
		else {
			console.log("Esto se esta mandado del maker", s);
			this.step= 2;
		}
	}


	//STEP 2

	makeReq() {
		this.completedRequest = {
			pedido: this.selectedFoods,  
			precioFinal: this.totalPrice, 
			datosPago: this.req,
		}
		console.log(this.completedRequest);

		this.Order.creatOrder(this.completedRequest)
		.subscribe(data => {
			if (data.success) {
				console.log("ESTA ES LA DATA", data);
				this.router.navigate(['/statusorder']);
			}
			else {
				console.log("ERROR");
				this.router.navigate(['/home']);
			}
		});
  	}

	cancel() {
		this.step= 1;
	}
}
