import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../../../../services/food/food.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-del',
  templateUrl: './del.component.html'
})

export class DelComponent implements OnInit {

  constructor(public Food:FoodService,
              private activatedRoute:ActivatedRoute,
              private router:Router ) {
    this.activatedRoute.params.subscribe( params => {
      this.Food.delFood(params['id']).subscribe();
      this.router.navigate(['/admin/crud']);
    });
  }

  ngOnInit() { }


}
