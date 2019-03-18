import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../../services/food/food.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html'
})
export class CrudComponent implements OnInit {

  foods:any[]=[];

  constructor(public Food:FoodService, private router:Router ) {
    this.Food.getFood().subscribe(data => {
      console.log(data);
      this.foods = data;
    });
  }

  ngOnInit() {}

  addFood(){
    this.router.navigate(['admin/crud/add']);
  }

  delFood(id:string){
    this.router.navigate(['admin/crud/del', id]);
  }

  back() {
    this.router.navigate(['admin/']);
  }

}
