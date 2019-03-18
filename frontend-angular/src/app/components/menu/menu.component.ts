import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food/food.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	foods:any[]=[];

  	constructor(public Food:FoodService, private router:Router) { }

  	ngOnInit() {
  		this.Food.getFood().subscribe(data => {
      	console.log(data);
      	this.foods = data;
      });
	}
	  
	verfood(idx:number) {
		this.router.navigate(['/ver/',idx])
	}

}
