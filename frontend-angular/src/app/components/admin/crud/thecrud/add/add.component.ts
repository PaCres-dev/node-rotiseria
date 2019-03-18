import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../../../../services/food/food.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit {

  food:Object = {
    name: null,
    description: null,
    price: null,
    imgURL: null
  }

  constructor(public Food:FoodService,
              private router: Router ) { }

  ngOnInit() {

  }

  alta(){
    //console.log(this.tvshow);
    this.Food.addFood(this.food)
    .subscribe(res => {
      console.log('subscribe'); this.router.navigate(['/admin/crud']) 
    });
  }

  cancelar(){
    this.router.navigate(['/admin/crud'])
  }

}
